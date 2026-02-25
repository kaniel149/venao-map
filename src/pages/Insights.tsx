import { getProperties } from '../data/store';
import { formatPrice } from '../data/properties';
import PropertyMap from '../components/PropertyMap';

export default function Insights() {
  const properties = getProperties();
  const forSale = properties.filter(p => p.status === 'for_sale');
  const underConstruction = properties.filter(p => p.status === 'under_construction');
  const byType = (t: string) => forSale.filter(p => p.type === t);
  const priceRange = (list: typeof properties) => list.length ? `${formatPrice(Math.min(...list.map(p => p.price)))} - ${formatPrice(Math.max(...list.map(p => p.price)))}` : 'N/A';

  return (
    <div className="pt-20 pb-10 px-4 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-[#0F172A] mb-2">Venao in Numbers</h1>
      <p className="text-slate-600 mb-8">Real estate intelligence for Playa Venao, Panama</p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        <StatCard value="~800" label="Permanent Residents" sub="90% expats" />
        <StatCard value="1,500-3K" label="High Season Visitors" sub="December - April" />
        <StatCard value="15%+" label="Annual Growth Rate" sub="Property values" />
        <StatCard value={String(underConstruction.length)} label="Active Construction" sub="Projects underway" />
      </div>

      <h2 className="text-2xl font-bold text-[#0F172A] mb-4">Property Prices by Type</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        {[
          { type: 'land', icon: '🌿', label: 'Land' },
          { type: 'house', icon: '🏠', label: 'Houses' },
          { type: 'condo', icon: '🏢', label: 'Condos' },
          { type: 'commercial', icon: '🏪', label: 'Commercial' },
        ].map(({ type, icon, label }) => {
          const list = byType(type);
          return (
            <div key={type} className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm">
              <p className="text-2xl mb-2">{icon}</p>
              <p className="font-bold text-[#0F172A]">{label}</p>
              <p className="text-sm text-slate-600">{list.length} available</p>
              <p className="text-sm font-semibold text-[#D97706] mt-1">{priceRange(list)}</p>
            </div>
          );
        })}
      </div>

      <h2 className="text-2xl font-bold text-[#0F172A] mb-4">Property Density Map</h2>
      <div className="h-96 rounded-xl overflow-hidden mb-10">
        <PropertyMap properties={properties} />
      </div>

      <div className="bg-[#0F172A] rounded-xl p-8 text-white">
        <h2 className="text-2xl font-bold mb-4">About Playa Venao</h2>
        <div className="grid md:grid-cols-2 gap-6 text-white/80 text-sm leading-relaxed">
          <div>
            <p className="mb-3">Playa Venao is a rapidly growing beach community on Panama's Pacific coast, located in the Azuero Peninsula. Known for its consistent surf breaks and laid-back lifestyle, it has become a magnet for digital nomads, surfers, and real estate investors.</p>
            <p>The area has seen significant development in recent years, with new restaurants, co-working spaces, and residential developments transforming it from a hidden gem into Panama's most exciting coastal investment destination.</p>
          </div>
          <div>
            <p className="mb-3"><strong className="text-white">Key Facts:</strong></p>
            <ul className="space-y-1">
              <li>• ~800 permanent residents (90% expats)</li>
              <li>• 1,500-3,000 visitors during high season</li>
              <li>• 42+ businesses and growing</li>
              <li>• Property values up 15%+ annually</li>
              <li>• 4.5 hours from Panama City</li>
              <li>• Year-round warm weather (28-32°C)</li>
            </ul>
            <a href="https://yallavenao.com" target="_blank" rel="noopener noreferrer" className="inline-block mt-4 text-[#D97706] hover:underline font-medium">
              Explore Yalla Venao for lifestyle data →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ value, label, sub }: { value: string; label: string; sub: string }) {
  return (
    <div className="bg-[#0F172A] rounded-xl p-5 text-white">
      <p className="text-3xl font-bold text-[#D97706]">{value}</p>
      <p className="font-semibold mt-1">{label}</p>
      <p className="text-white/60 text-sm">{sub}</p>
    </div>
  );
}
