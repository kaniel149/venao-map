import { useState } from 'react';
import PropertyMap from '../components/PropertyMap';
import LeadForm from '../components/LeadForm';
import { getProperties } from '../data/store';
import { statusLabels, statusColors } from '../data/properties';

export default function Home() {
  const properties = getProperties();
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="pt-16 h-screen flex flex-col">
      {/* Hero overlay */}
      <div className="relative flex-1">
        <PropertyMap properties={properties} />
        
        {/* Hero text overlay */}
        <div className="absolute top-4 left-4 right-4 z-10 pointer-events-none">
          <div className="bg-[#0C2340]/90 backdrop-blur-sm rounded-xl p-6 max-w-md pointer-events-auto">
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2" style={{ fontFamily: 'Playfair Display' }}>
              Every property in<br /><span className="text-[#D4A843]">Playa Venao, Panama</span>
            </h1>
            <p className="text-white/70 text-sm mb-4">The first real estate intelligence platform for Panama's fastest-growing beach town</p>
            
            {/* Legend */}
            <div className="flex flex-wrap gap-3 mb-4">
              {Object.entries(statusLabels).slice(0, 4).map(([key, label]) => (
                <div key={key} className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: statusColors[key] }} />
                  <span className="text-white/80 text-xs">{label}</span>
                </div>
              ))}
            </div>

            <button onClick={() => setShowForm(!showForm)} className="bg-[#D4A843] text-[#0C2340] font-semibold px-4 py-2 rounded-lg text-sm hover:bg-[#c49a3a] transition-colors">
              Looking for property in Venao?
            </button>

            {showForm && (
              <div className="mt-4">
                <LeadForm source="homepage_map" />
              </div>
            )}
          </div>
        </div>

        {/* Stats bar */}
        <div className="absolute bottom-0 left-0 right-0 z-10 bg-[#0C2340]/90 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 py-3 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-6 text-white/90 text-sm">
              <span><strong className="text-[#D4A843]">42</strong> businesses</span>
              <span><strong className="text-[#D4A843]">1,500-3,000</strong> visitors/season</span>
              <span><strong className="text-[#D4A843]">$100K-$2M</strong> properties</span>
              <span><strong className="text-[#D4A843]">{properties.length}</strong> listings</span>
            </div>
            <a href="https://wa.me/50766196669" target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-[#20bd5a] transition-colors flex items-center gap-2">
              💬 Talk to us on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
