import { useState } from 'react';
import { statusLabels, statusColors, typeLabels } from '../data/properties';

export interface FilterState {
  statuses: string[];
  type: string;
  priceRange: [number, number];
  search: string;
}

interface Props {
  filters: FilterState;
  onChange: (f: FilterState) => void;
  collapsed?: boolean;
  onToggle?: () => void;
  showParcels?: boolean;
  onToggleParcels?: (v: boolean) => void;
}

const MAX_PRICE = 6000000;

export const defaultFilters: FilterState = {
  statuses: Object.keys(statusLabels),
  type: 'all',
  priceRange: [0, MAX_PRICE],
  search: '',
};

export default function MapFilters({ filters, onChange, collapsed, onToggle, showParcels, onToggleParcels }: Props) {
  const [, setLocalMax] = useState(String(filters.priceRange[1] >= MAX_PRICE ? '' : filters.priceRange[1]));

  const toggleStatus = (s: string) => {
    const next = filters.statuses.includes(s)
      ? filters.statuses.filter(x => x !== s)
      : [...filters.statuses, s];
    onChange({ ...filters, statuses: next });
  };

  return (
    <div className="flex flex-col gap-3 text-sm">
      {/* Mobile toggle handle */}
      {onToggle && (
        <button onClick={onToggle} className="md:hidden flex items-center justify-center py-1">
          <div className="w-10 h-1 bg-white/40 rounded-full" />
        </button>
      )}

      <div className={`flex flex-col gap-3 ${collapsed ? 'hidden' : ''}`}>
        {/* Search */}
        <div>
          <input
            type="text"
            placeholder="Search name, owner, address..."
            value={filters.search}
            onChange={e => onChange({ ...filters, search: e.target.value })}
            className="w-full px-3 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:border-[#D97706] focus:bg-white/15 transition-all"
          />
        </div>

        {/* Status checkboxes */}
        <div>
          <p className="text-white/60 text-xs font-semibold mb-1.5 uppercase tracking-wide">Status</p>
          <div className="flex flex-wrap gap-x-3 gap-y-1.5">
            {Object.entries(statusLabels).map(([key, label]) => (
              <label key={key} className="flex items-center gap-1.5 cursor-pointer hover:text-white transition-colors">
                <input
                  type="checkbox"
                  checked={filters.statuses.includes(key)}
                  onChange={() => toggleStatus(key)}
                  className="accent-[#D97706] w-3.5 h-3.5"
                />
                <span className="w-2.5 h-2.5 rounded-full inline-block" style={{ backgroundColor: statusColors[key] }} />
                <span className="text-white/80 text-xs">{label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Property type */}
        <div>
          <p className="text-white/60 text-xs font-semibold mb-1.5 uppercase tracking-wide">Type</p>
          <select
            value={filters.type}
            onChange={e => onChange({ ...filters, type: e.target.value })}
            className="w-full px-3 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white text-sm focus:outline-none focus:border-[#D97706] focus:bg-white/15 transition-all [&>option]:text-black"
          >
            <option value="all">All Types</option>
            {Object.entries(typeLabels).map(([key, label]) => (
              <option key={key} value={key}>{label}</option>
            ))}
          </select>
        </div>

        {/* Price range */}
        <div>
          <p className="text-white/60 text-xs font-semibold mb-1.5 uppercase tracking-wide">
            Max Price: {filters.priceRange[1] >= MAX_PRICE ? 'Any' : `$${(filters.priceRange[1] / 1000).toFixed(0)}K`}
          </p>
          <input
            type="range"
            min={0}
            max={MAX_PRICE}
            step={50000}
            value={filters.priceRange[1]}
            onChange={e => {
              const v = Number(e.target.value);
              setLocalMax(v >= MAX_PRICE ? '' : String(v));
              onChange({ ...filters, priceRange: [0, v] });
            }}
            className="w-full accent-[#D97706]"
          />
          <div className="flex justify-between text-white/40 text-xs">
            <span>$0</span>
            <span>$6M+</span>
          </div>
        </div>

        {/* Parcel overlay toggle */}
        {onToggleParcels !== undefined && (
          <div>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={showParcels ?? false}
                onChange={e => onToggleParcels!(e.target.checked)}
                className="accent-[#D97706] w-3.5 h-3.5"
              />
              <span className="text-white/80 text-xs">Show Parcels</span>
            </label>
          </div>
        )}
      </div>
    </div>
  );
}

export function applyFilters(properties: import('../data/properties').Property[], filters: FilterState) {
  return properties.filter(p => {
    if (!filters.statuses.includes(p.status)) return false;
    if (filters.type !== 'all' && p.type !== filters.type) return false;
    if (p.price > 0 && p.price > filters.priceRange[1]) return false;
    if (filters.search) {
      const q = filters.search.toLowerCase();
      const haystack = `${p.title} ${p.owner || ''} ${p.address} ${p.agent_name} ${p.description}`.toLowerCase();
      if (!haystack.includes(q)) return false;
    }
    return true;
  });
}
