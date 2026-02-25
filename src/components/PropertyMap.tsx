import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { Link } from 'react-router-dom';
import type { Property } from '../data/properties';
import { statusColors, statusLabels, formatPrice } from '../data/properties';

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

interface Props {
  properties: Property[];
  height?: string;
  center?: [number, number];
  zoom?: number;
}

export default function PropertyMap({ properties, height = '100%', center = [7.4210, -80.1505], zoom = 14 }: Props) {
  return (
    <div style={{ height, width: '100%' }}>
      <MapContainer center={center} zoom={zoom} style={{ height: '100%', width: '100%' }} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {properties.map(p => (
          <Marker key={p.id} position={[p.lat, p.lng]} icon={createIcon(statusColors[p.status])}>
            <Popup maxWidth={300}>
              <div className="font-sans">
                <img src={p.images[0]} alt={p.title} className="w-full h-32 object-cover rounded mb-2" />
                <h3 className="font-bold text-sm mb-1">{p.title}</h3>
                <p className="text-lg font-bold text-[#0C2340] mb-1">{formatPrice(p.price)}</p>
                <div className="flex gap-2 text-xs text-gray-600 mb-2">
                  <span>{p.size_sqm} m²</span>
                  {p.bedrooms && <span>{p.bedrooms} bd</span>}
                  {p.bathrooms && <span>{p.bathrooms} ba</span>}
                </div>
                <span className="inline-block text-xs px-2 py-0.5 rounded-full text-white mb-2" style={{ backgroundColor: statusColors[p.status] }}>
                  {statusLabels[p.status]}
                </span>
                <p className="text-xs text-gray-500 mb-2">{p.agent_name}</p>
                <Link to={`/property/${p.id}`} className="text-xs text-[#D4A843] font-semibold hover:underline">View Details →</Link>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
