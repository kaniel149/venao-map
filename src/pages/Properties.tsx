import { useState, useMemo } from 'react';
import PropertyCard from '../components/PropertyCard';
import { getProperties } from '../data/store';
import { typeLabels, statusLabels } from '../data/properties';

export default function Properties() {
  const allProperties = getProperties();
  const [type, setType] = useState('');
  const [status, setStatus] = useState('');
  const [sort, setSort] = useState('newest');
  const [priceRange, setPriceRange] = useState('');

  const filtered = useMemo(() => {
    let list = [...allProperties];
    if (type) list = list.filter(p => p.type === type);
    if (status) list = list.filter(p => p.status === status);
    if (priceRange) {
      const [min, max] = priceRange.split('-').map(Number);
      list = list.filter(p => p.price >= min && (!max || p.price <= max));
    }
    if (sort === 'price_asc') list.sort((a, b) => a.price - b.price);
    else if (sort === 'price_desc') list.sort((a, b) => b.price - a.price);
    else if (sort === 'size') list.sort((a, b) => b.size_sqm - a.size_sqm);
    else list.sort((a, b) => b.created_at.localeCompare(a.created_at));
    return list;
  }, [allProperties, type, status, sort, priceRange]);

  const selectClass = "px-3 py-2 rounded-lg border border-gray-200 text-sm focus:border-[#D4A843] focus:ring-1 focus:ring-[#D4A843] outline-none bg-white";

  return (
    <div className="pt-20 pb-10 px-4 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-[#0C2340] mb-2">Properties in Playa Venao</h1>
      <p className="text-gray-600 mb-6">{filtered.length} properties available</p>

      <div className="flex flex-wrap gap-3 mb-8">
        <select value={type} onChange={e => setType(e.target.value)} className={selectClass}>
          <option value="">All Types</option>
          {Object.entries(typeLabels).map(([k, v]) => <option key={k} value={k}>{v}</option>)}
        </select>
        <select value={status} onChange={e => setStatus(e.target.value)} className={selectClass}>
          <option value="">All Status</option>
          {Object.entries(statusLabels).map(([k, v]) => <option key={k} value={k}>{v}</option>)}
        </select>
        <select value={priceRange} onChange={e => setPriceRange(e.target.value)} className={selectClass}>
          <option value="">Any Price</option>
          <option value="0-200000">Under $200K</option>
          <option value="200000-500000">$200K - $500K</option>
          <option value="500000-1000000">$500K - $1M</option>
          <option value="1000000-">$1M+</option>
        </select>
        <select value={sort} onChange={e => setSort(e.target.value)} className={selectClass}>
          <option value="newest">Newest</option>
          <option value="price_asc">Price: Low → High</option>
          <option value="price_desc">Price: High → Low</option>
          <option value="size">Largest</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map(p => <PropertyCard key={p.id} property={p} />)}
      </div>
      {filtered.length === 0 && <p className="text-center text-gray-500 py-12">No properties match your filters.</p>}
    </div>
  );
}
