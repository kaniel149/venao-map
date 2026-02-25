import { useMap, useMapEvents } from 'react-leaflet';
import L from 'leaflet';
import { useEffect, useRef, useState, useCallback } from 'react';
import buildings from '../data/buildings';

// Calculate polygon area in m² using the Shoelace formula with lat/lng
function polygonAreaSqM(coords: number[][]): number {
  // Use a simple equirectangular projection
  const toRad = Math.PI / 180;
  const R = 6371000; // Earth radius in meters
  const latMid = coords.reduce((s, c) => s + c[1], 0) / coords.length * toRad;
  const cosLat = Math.cos(latMid);

  let area = 0;
  for (let i = 0; i < coords.length - 1; i++) {
    const x1 = coords[i][0] * toRad * R * cosLat;
    const y1 = coords[i][1] * toRad * R;
    const x2 = coords[i + 1][0] * toRad * R * cosLat;
    const y2 = coords[i + 1][1] * toRad * R;
    area += x1 * y2 - x2 * y1;
  }
  return Math.abs(area / 2);
}

interface Props {
  visible: boolean;
}

export default function BuildingLayer({ visible }: Props) {
  const map = useMap();
  const layerRef = useRef<L.LayerGroup | null>(null);
  const [bounds, setBounds] = useState(map.getBounds());

  const updateBounds = useCallback(() => {
    setBounds(map.getBounds());
  }, [map]);

  useMapEvents({
    moveend: updateBounds,
    zoomend: updateBounds,
  });

  useEffect(() => {
    if (!layerRef.current) {
      layerRef.current = L.layerGroup();
    }
    const group = layerRef.current;
    group.clearLayers();

    if (!visible) {
      group.remove();
      return;
    }

    group.addTo(map);

    const mapBounds = bounds;
    for (const feature of buildings.features) {
      if (feature.geometry.type !== 'Polygon') continue;
      const coords = feature.geometry.coordinates[0] as number[][];

      // Check if any vertex is in viewport
      const inView = coords.some(c => mapBounds.contains([c[1], c[0]]));
      if (!inView) continue;

      const latLngs = coords.map(c => [c[1], c[0]] as [number, number]);
      const area = polygonAreaSqM(coords);
      const tags = feature.properties || {};

      const poly = L.polygon(latLngs, {
        color: '#475569',
        weight: 1,
        fillColor: '#CBD5E1',
        fillOpacity: 0.2,
      });

      poly.on('mouseover', () => {
        poly.setStyle({ color: '#D97706', weight: 2 });
      });
      poly.on('mouseout', () => {
        poly.setStyle({ color: '#475569', weight: 1 });
      });

      const label = tags.name ? `<b>${tags.name}</b><br/>` : '';
      const use = tags.building && tags.building !== 'yes' ? `<b>${tags.building}</b><br/>` : '';
      poly.bindPopup(`${label}${use}Area: <b>${area.toFixed(0)} m²</b>`);

      group.addLayer(poly);
    }

    return () => {
      group.clearLayers();
      group.remove();
    };
  }, [visible, bounds, map]);

  return null;
}
