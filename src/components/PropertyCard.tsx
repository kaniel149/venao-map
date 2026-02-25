import { Link } from 'react-router-dom';
import type { Property } from '../data/properties';
import { statusColors, statusLabels, typeLabels, formatPrice } from '../data/properties';

export default function PropertyCard({ property: p }: { property: Property }) {
  return (
    <Link to={`/property/${p.id}`} className="group block bg-white rounded-xl shadow-md hover:shadow-xl transition-all overflow-hidden border border-gray-100">
      <div className="relative">
        <img src={p.images[0]} alt={p.title} className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-300" />
        <span className="absolute top-3 left-3 text-xs px-2.5 py-1 rounded-full text-white font-medium" style={{ backgroundColor: statusColors[p.status] }}>
          {statusLabels[p.status]}
        </span>
        <span className="absolute top-3 right-3 text-xs px-2.5 py-1 rounded-full bg-white/90 text-[#0C2340] font-medium">
          {typeLabels[p.type]}
        </span>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-[#0C2340] mb-1 truncate">{p.title}</h3>
        <p className="text-xs text-gray-500 mb-2">{p.address}</p>
        <p className="text-xl font-bold text-[#0C2340] mb-2">{formatPrice(p.price)}</p>
        <div className="flex gap-3 text-xs text-gray-600">
          <span>{p.size_sqm} m²</span>
          {p.bedrooms != null && <span>{p.bedrooms} bed</span>}
          {p.bathrooms != null && <span>{p.bathrooms} bath</span>}
        </div>
      </div>
    </Link>
  );
}
