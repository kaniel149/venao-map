import { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, LayersControl } from 'react-leaflet';
import L from 'leaflet';
import { Link } from 'react-router-dom';
import type { Property } from '../data/properties';
import { statusColors, statusLabels, formatPrice, typeLabels } from '../data/properties';
import ParcelLayer from './ParcelLayer';

function createIcon(color: string) {
  return L.divIcon({
    className: '',
    html: `<svg width="28" height="40" viewBox="0 0 28 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14 0C6.27 0 0 6.27 0 14c0 10.5 14 26 14 26s14-15.5 14-26C28 6.27 21.73 0 14 0z" fill="${color}"/>
      <circle cx="14" cy="14" r="6" fill="white"/>
    </svg>`,
    iconSize: [28, 40],
    iconAnchor: [14, 40],
    popupAnchor: [0, -40],
  });
}

function createUncertainIcon() {
  return L.divIcon({
    className: '',
    html: `<svg width="28" height="40" viewBox="0 0 28 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14 0C6.27 0 0 6.27 0 14c0 10.5 14 26 14 26s14-15.5 14-26C28 6.27 21.73 0 14 0z" fill="#9E9E9E" stroke="#616161" stroke-width="1" stroke-dasharray="3,2"/>
      <text x="14" y="19" text-anchor="middle" fill="white" font-size="14" font-weight="bold">?</text>
    </svg>`,
    iconSize: [28, 40],
    iconAnchor: [14, 40],
    popupAnchor: [0, -40],
  });
}

const uncertainIcon = createUncertainIcon();

interface Props {
  properties: Property[];
  height?: string;
  center?: [number, number];
  zoom?: number;
  showParcels?: boolean;
}

export default function PropertyMap({ properties, height = '100%', center = [7.4350, -80.1920], zoom = 14, showParcels = false }: Props) {
  const [showUnverified, setShowUnverified] = useState(false);

  const verifiedProperties = properties.filter(p => p.verified !== false);
  const unverifiedProperties = properties.filter(p => p.verified === false);
  const displayProperties = showUnverified ? properties : verifiedProperties;

  return (
    <div style={{ height, width: '100%', position: 'relative' }}>
      <div style={{
        position: 'absolute', top: 10, left: 50, zIndex: 1000,
        background: 'white', borderRadius: 8, padding: '6px 12px',
        boxShadow: '0 2px 6px rgba(0,0,0,0.3)', fontSize: 13,
        display: 'flex', alignItems: 'center', gap: 8,
      }}>
        <label style={{ display: 'flex', alignItems: 'center', gap: 6, cursor: 'pointer', margin: 0 }}>
          <input
            type="checkbox"
            checked={showUnverified}
            onChange={e => setShowUnverified(e.target.checked)}
          />
          Show unverified ({unverifiedProperties.length})
        </label>
      </div>
      <MapContainer center={center} zoom={zoom} style={{ height: '100%', width: '100%' }} scrollWheelZoom={true}>
        <LayersControl position="topright">
          <LayersControl.BaseLayer checked name="Satellite">
            <TileLayer
              attribution='&copy; Esri'
              url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
            />
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer name="Street Map">
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          </LayersControl.BaseLayer>
        </LayersControl>
        <ParcelLayer visible={showParcels} />
        {displayProperties.map(p => {
          const isUncertain = p.verified === false;
          const icon = isUncertain ? uncertainIcon : createIcon(statusColors[p.status]);
          return (
            <Marker key={p.id} position={[p.lat, p.lng]} icon={icon}>
              <Popup maxWidth={320}>
                <div className="font-sans" style={{ minWidth: 260 }}>
                  <img src={p.images[0]} alt={p.title} className="w-full h-32 object-cover rounded mb-2" />
                  <h3 className="font-bold text-sm mb-1">{p.title}</h3>
                  {isUncertain && (
                    <span className="inline-block text-xs px-2 py-0.5 rounded-full bg-gray-400 text-white mb-1">
                      ⚠ Approximate location
                    </span>
                  )}
                  <p className="text-lg font-bold text-[#0C2340] mb-1">{formatPrice(p.price)}</p>
                  <div className="flex gap-2 text-xs text-gray-600 mb-1">
                    <span>{typeLabels[p.type]}</span>
                    <span>•</span>
                    <span>{p.size_sqm.toLocaleString()} m²</span>
                    {p.land_size_sqm && p.land_size_sqm !== p.size_sqm && <><span>•</span><span>Land: {p.land_size_sqm.toLocaleString()} m²</span></>}
                    {p.bedrooms && <><span>•</span><span>{p.bedrooms} bd</span></>}
                    {p.bathrooms && <><span>•</span><span>{p.bathrooms} ba</span></>}
                  </div>
                  <span className="inline-block text-xs px-2 py-0.5 rounded-full text-white mb-2" style={{ backgroundColor: statusColors[p.status] }}>
                    {statusLabels[p.status]}
                  </span>
                  {p.owner && (
                    <p className="text-xs text-gray-700 mb-1"><strong>Owner:</strong> {p.owner}</p>
                  )}
                  {p.purchase_date && (
                    <p className="text-xs text-gray-700 mb-1"><strong>Purchased:</strong> {p.purchase_date}</p>
                  )}
                  {p.notes && (
                    <p className="text-xs text-gray-500 italic mb-1">{p.notes}</p>
                  )}
                  <p className="text-xs text-gray-500 mb-1">{p.address}</p>
                  {p.agent_name !== 'N/A' && <p className="text-xs text-gray-500 mb-2">Agent: {p.agent_name}</p>}
                  <Link to={`/property/${p.id}`} className="text-xs text-[#D4A843] font-semibold hover:underline">View Details →</Link>
                </div>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
}
