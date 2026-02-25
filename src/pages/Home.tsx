import { useState } from 'react';
import PropertyMap from '../components/PropertyMap';
import LeadForm from '../components/LeadForm';
import MapFilters, { defaultFilters, applyFilters } from '../components/MapFilters';
import type { FilterState } from '../components/MapFilters';
import { getProperties } from '../data/store';

export default function Home() {
  const allProperties = getProperties();
  const [filters, setFilters] = useState<FilterState>(defaultFilters);
  const [showForm, setShowForm] = useState(false);
  const [panelOpen, setPanelOpen] = useState(false);
  const [showParcels, setShowParcels] = useState(false);
  const [showBuildings, setShowBuildings] = useState(false);

  const filtered = applyFilters(allProperties, filters);

  return (
    <div className="pt-16 h-screen flex flex-col">
      <div className="relative flex-1">
        {/* Full-screen map */}
        <PropertyMap properties={filtered} showParcels={showParcels} showBuildings={showBuildings} />

        {/* Desktop sidebar */}
        <div className="hidden md:block absolute top-4 left-4 z-10 w-80">
          <div className="bg-[#0F172A]/90 backdrop-blur-sm rounded-xl p-5">
            <h1 className="text-xl font-bold text-white mb-1" style={{ fontFamily: 'Inter' }}>
              Every property in <span className="text-[#D97706]">Playa Venao</span>
            </h1>
            <p className="text-white/60 text-xs mb-4">Panama's fastest-growing beach town</p>

            <MapFilters filters={filters} onChange={setFilters} showParcels={showParcels} onToggleParcels={setShowParcels} showBuildings={showBuildings} onToggleBuildings={setShowBuildings} />

            <p className="text-white/50 text-xs mt-3">{filtered.length} of {allProperties.length} properties</p>

            <button
              onClick={() => setShowForm(!showForm)}
              className="mt-3 w-full bg-[#D97706] text-[#0F172A] font-semibold px-4 py-2 rounded-lg text-sm hover:bg-[#B45309] transition-colors"
            >
              Looking for property?
            </button>
            {showForm && (
              <div className="mt-3">
                <LeadForm source="homepage_map" />
              </div>
            )}
          </div>
        </div>

        {/* Mobile slide-up panel */}
        <div
          className={`md:hidden absolute left-0 right-0 bottom-0 z-10 bg-[#0F172A]/95 backdrop-blur-sm rounded-t-2xl transition-transform duration-300 ${
            panelOpen ? 'translate-y-0' : 'translate-y-[calc(100%-3.5rem)]'
          }`}
          style={{ maxHeight: '70vh' }}
        >
          {/* Drag handle + summary */}
          <button
            onClick={() => setPanelOpen(!panelOpen)}
            className="w-full flex flex-col items-center pt-2 pb-3 px-4"
          >
            <div className="w-10 h-1 bg-white/40 rounded-full mb-2" />
            <div className="flex items-center justify-between w-full">
              <span className="text-white text-sm font-semibold">
                {filtered.length} properties
              </span>
              <span className="text-[#D97706] text-xs font-medium">
                {panelOpen ? 'Close' : 'Filter & Search ▲'}
              </span>
            </div>
          </button>

          {/* Panel content */}
          <div className={`overflow-y-auto px-4 pb-6 ${panelOpen ? 'block' : 'hidden'}`} style={{ maxHeight: 'calc(70vh - 3.5rem)' }}>
            <MapFilters filters={filters} onChange={setFilters} showParcels={showParcels} onToggleParcels={setShowParcels} showBuildings={showBuildings} onToggleBuildings={setShowBuildings} />
            <button
              onClick={() => setShowForm(!showForm)}
              className="mt-4 w-full bg-[#D97706] text-[#0F172A] font-semibold px-4 py-2.5 rounded-lg text-sm"
            >
              Looking for property?
            </button>
            {showForm && (
              <div className="mt-3">
                <LeadForm source="homepage_map" />
              </div>
            )}
          </div>
        </div>

        {/* Desktop stats bar */}
        <div className="hidden md:block absolute bottom-0 left-0 right-0 z-10 bg-[#0F172A]/90 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
            <div className="flex flex-wrap gap-6 text-white/90 text-sm">
              <span><strong className="text-[#D97706]">42</strong> businesses</span>
              <span><strong className="text-[#D97706]">1,500-3,000</strong> visitors/season</span>
              <span><strong className="text-[#D97706]">{filtered.length}</strong> listings shown</span>
            </div>
            <a href="https://wa.me/50766196669" target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-[#20bd5a] transition-colors flex items-center gap-2">
              💬 WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
