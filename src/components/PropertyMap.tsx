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
        background: showUnverified ? '#0F172A' : 'white',
        borderRadius: 8, padding: '8px 14px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
        fontSize: 13,
        display: 'flex', alignItems: 'center', gap: 8,
        border: showUnverified ? '1px solid #D97706' : '1px dashed #94A3B8',
        transition: 'all 0.2s ease',
      }}>
        <label style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer', margin: 0, color: showUnverified ? '#D97706' : '#64748B', fontWeight: 500 }}>
          <span style={{
            width: 18, height: 18, borderRadius: 4,
            border: showUnverified ? '2px solid #D97706' : '2px dashed #94A3B8',
            background: showUnverified ? '#D97706' : 'transparent',
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            transition: 'all 0.2s ease',
          }}>
            {showUnverified && <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3"><path d="M20 6L9 17l-5-5"/></svg>}
          </span>
          <input
            type="checkbox"
            checked={showUnverified}
            onChange={e => setShowUnverified(e.target.checked)}
            style={{ display: 'none' }}
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
                <div className="font-sans" style={{ minWidth: 280, margin: -4 }}>
                  <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '8px 8px 0 0', marginBottom: 10 }}>
                    <img src={p.images[0]} alt={p.title} style={{ width: '100%', height: 140, objectFit: 'cover', display: 'block' }} />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.3), transparent)' }} />
                    <span style={{ position: 'absolute', top: 8, left: 8, fontSize: 11, padding: '3px 10px', borderRadius: 20, color: 'white', fontWeight: 600, backgroundColor: statusColors[p.status] }}>
                      {statusLabels[p.status]}
                    </span>
                    {isUncertain && (
                      <span style={{ position: 'absolute', top: 8, right: 8, fontSize: 11, padding: '3px 10px', borderRadius: 20, color: 'white', fontWeight: 500, backgroundColor: '#64748B', border: '1px dashed #94A3B8' }}>
                        ⚠ Approx.
                      </span>
                    )}
                  </div>
                  <div style={{ padding: '0 4px 4px' }}>
                    <h3 style={{ fontWeight: 700, fontSize: 14, color: '#0F172A', marginBottom: 2, lineHeight: 1.3 }}>{p.title}</h3>
                    <p style={{ fontSize: 22, fontWeight: 800, color: '#0F172A', margin: '4px 0 6px' }}>{formatPrice(p.price)}</p>
                    <div style={{ display: 'flex', gap: 6, fontSize: 11, color: '#64748B', marginBottom: 8, flexWrap: 'wrap' }}>
                      <span style={{ background: '#F1F5F9', padding: '2px 8px', borderRadius: 4, fontWeight: 500 }}>{typeLabels[p.type]}</span>
                      <span style={{ background: '#F1F5F9', padding: '2px 8px', borderRadius: 4 }}>{p.size_sqm.toLocaleString()} m²</span>
                      {p.bedrooms && <span style={{ background: '#F1F5F9', padding: '2px 8px', borderRadius: 4 }}>{p.bedrooms} bd</span>}
                      {p.bathrooms && <span style={{ background: '#F1F5F9', padding: '2px 8px', borderRadius: 4 }}>{p.bathrooms} ba</span>}
                    </div>
                    <p style={{ fontSize: 11, color: '#94A3B8', marginBottom: 4 }}>{p.address}</p>
                    {p.agent_name !== 'N/A' && <p style={{ fontSize: 11, color: '#94A3B8', marginBottom: 8 }}>Agent: {p.agent_name}</p>}
                    <Link to={`/property/${p.id}`} style={{ display: 'inline-block', fontSize: 12, fontWeight: 600, color: '#D97706', textDecoration: 'none' }}>View Details →</Link>
                  </div>
                </div>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
}
