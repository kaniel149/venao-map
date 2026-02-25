import { Polygon, Popup } from 'react-leaflet';
import { parcels } from '../data/parcels';

interface Props {
  visible: boolean;
}

export default function ParcelLayer({ visible }: Props) {
  if (!visible) return null;

  return (
    <>
      {parcels.features.map((feature, i) => {
        const { name, owner, status, area_m2, color } = feature.properties;
        // GeoJSON is [lng, lat], Leaflet wants [lat, lng]
        const positions = feature.geometry.coordinates[0].map(
          ([lng, lat]) => [lat, lng] as [number, number]
        );

        return (
          <Polygon
            key={i}
            positions={positions}
            pathOptions={{
              color,
              fillColor: color,
              fillOpacity: 0.25,
              weight: 2,
              opacity: 0.8,
            }}
          >
            <Popup>
              <div className="font-sans" style={{ minWidth: 200 }}>
                <h3 className="font-bold text-sm mb-1">{name}</h3>
                <p className="text-xs text-gray-600 mb-0.5"><strong>Owner:</strong> {owner}</p>
                <p className="text-xs text-gray-600 mb-0.5"><strong>Status:</strong> {status}</p>
                <p className="text-xs text-gray-600"><strong>Area:</strong> {area_m2.toLocaleString()} m²</p>
              </div>
            </Popup>
          </Polygon>
        );
      })}
    </>
  );
}
