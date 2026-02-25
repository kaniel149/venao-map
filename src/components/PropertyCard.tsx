import { Link } from 'react-router-dom';
import type { Property } from '../data/properties';
import { statusColors, statusLabels, typeLabels, formatPrice } from '../data/properties';

export default function PropertyCard({ property: p }: { property: Property }) {
  return (
    <Link to={`/property/${p.id}`} className="group block bg-white rounded-xl shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden border border-gray-100/80">
      <div className="relative overflow-hidden">
        <img src={p.images[0]} alt={p.title} className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500 ease-out" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <span className="absolute top-3 left-3 text-xs px-2.5 py-1 rounded-full text-white font-semibold tracking-wide shadow-sm" style={{ backgroundColor: statusColors[p.status] }}>
          {statusLabels[p.status]}
        </span>
        <span className="absolute top-3 right-3 text-xs px-2.5 py-1 rounded-full bg-white/95 text-[#0C2340] font-semibold shadow-sm backdrop-blur-sm">
          {typeLabels[p.type]}
        </span>
      </div>
      <div className="p-5">
        <h3 className="font-semibold text-[#0C2340] mb-1 truncate text-base">{p.title}</h3>
        <p className="text-xs text-gray-400 mb-3 flex items-center gap-1">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
          {p.address}
        </p>
        <p className="text-xl font-bold text-[#0C2340] mb-3">{formatPrice(p.price)}</p>
        <div className="flex gap-3 text-xs text-gray-500 pt-3 border-t border-gray-100">
          <span className="flex items-center gap-1">{p.size_sqm} m²</span>
          {p.bedrooms != null && <span className="flex items-center gap-1">🛏 {p.bedrooms}</span>}
          {p.bathrooms != null && <span className="flex items-center gap-1">🚿 {p.bathrooms}</span>}
        </div>
      </div>
    </Link>
  );
}
