import { useState } from 'react';
import { getProperties, getLeads, deleteProperty, saveProperty } from '../data/store';
import { statusLabels, typeLabels, formatPrice } from '../data/properties';
import type { Property } from '../data/properties';

const ADMIN_PASSWORD = 'venao2024';

export default function Admin() {
  const [authed, setAuthed] = useState(false);
  const [password, setPassword] = useState('');
  const [tab, setTab] = useState<'dashboard' | 'properties' | 'leads' | 'add'>('dashboard');
  const [refresh, setRefresh] = useState(0);

  if (!authed) return (
    <div className="pt-24 flex items-center justify-center min-h-screen bg-gray-50">
      <form onSubmit={e => { e.preventDefault(); if (password === ADMIN_PASSWORD) setAuthed(true); }} className="bg-white rounded-xl p-8 shadow-lg max-w-sm w-full mx-4">
        <h1 className="text-2xl font-bold text-[#0C2340] mb-6 text-center">Admin Login</h1>
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-[#D4A843] focus:ring-1 focus:ring-[#D4A843] outline-none mb-4" />
        <button type="submit" className="w-full bg-[#0C2340] text-white font-semibold py-2.5 rounded-lg hover:bg-[#0a1c33]">Login</button>
      </form>
    </div>
  );

  const properties = getProperties();
  const leads = getLeads();
  const byStatus = (s: string) => properties.filter(p => p.status === s).length;

  return (
    <div className="pt-20 pb-10 px-4 max-w-7xl mx-auto" key={refresh}>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-[#0C2340]">Admin Panel</h1>
        <button onClick={() => setAuthed(false)} className="text-sm text-gray-500 hover:text-gray-700">Logout</button>
      </div>

      <div className="flex gap-2 mb-6 flex-wrap">
        {(['dashboard', 'properties', 'leads', 'add'] as const).map(t => (
          <button key={t} onClick={() => setTab(t)} className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${tab === t ? 'bg-[#0C2340] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
            {t === 'add' ? '+ Add Property' : t.charAt(0).toUpperCase() + t.slice(1)}
          </button>
        ))}
      </div>

      {tab === 'dashboard' && (
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <DashCard label="Total Properties" value={String(properties.length)} />
          <DashCard label="Total Leads" value={String(leads.length)} />
          <DashCard label="For Sale" value={String(byStatus('for_sale'))} />
          <DashCard label="Under Construction" value={String(byStatus('under_construction'))} />
        </div>
      )}

      {tab === 'properties' && (
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead><tr className="border-b text-left text-gray-500">
              <th className="pb-2">Title</th><th className="pb-2">Type</th><th className="pb-2">Status</th><th className="pb-2">Price</th><th className="pb-2">Actions</th>
            </tr></thead>
            <tbody>
              {properties.map(p => (
                <tr key={p.id} className="border-b">
                  <td className="py-3 font-medium">{p.title}</td>
                  <td>{typeLabels[p.type]}</td>
                  <td>{statusLabels[p.status]}</td>
                  <td>{formatPrice(p.price)}</td>
                  <td>
                    <button onClick={() => { deleteProperty(p.id); setRefresh(r => r + 1); }} className="text-red-500 hover:text-red-700 text-xs">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {tab === 'leads' && (
        <div className="overflow-x-auto">
          {leads.length === 0 ? <p className="text-gray-500 py-8 text-center">No leads yet.</p> : (
            <table className="w-full text-sm">
              <thead><tr className="border-b text-left text-gray-500">
                <th className="pb-2">Name</th><th className="pb-2">Email</th><th className="pb-2">Phone</th><th className="pb-2">Message</th><th className="pb-2">Date</th>
              </tr></thead>
              <tbody>
                {leads.map(l => (
                  <tr key={l.id} className="border-b">
                    <td className="py-3 font-medium">{l.name}</td>
                    <td>{l.email}</td>
                    <td>{l.phone}</td>
                    <td className="max-w-xs truncate">{l.message}</td>
                    <td className="text-gray-500">{new Date(l.created_at).toLocaleDateString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      )}

      {tab === 'add' && <AddPropertyForm onSave={() => { setTab('properties'); setRefresh(r => r + 1); }} />}
    </div>
  );
}

function DashCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
      <p className="text-4xl font-bold text-[#0C2340] mb-1">{value}</p>
      <p className="text-gray-500 text-sm">{label}</p>
    </div>
  );
}

function AddPropertyForm({ onSave }: { onSave: () => void }) {
  const [form, setForm] = useState<Partial<Property>>({ type: 'house', status: 'for_sale', currency: 'USD', images: [] });
  const set = (k: string, v: string | number) => setForm(f => ({ ...f, [k]: v }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const p: Property = {
      id: crypto.randomUUID(),
      title: form.title || '',
      description: form.description || '',
      type: form.type as Property['type'],
      status: form.status as Property['status'],
      price: Number(form.price) || 0,
      currency: form.currency || 'USD',
      size_sqm: Number(form.size_sqm) || 0,
      land_size_sqm: Number(form.land_size_sqm) || undefined,
      bedrooms: form.bedrooms ? Number(form.bedrooms) : undefined,
      bathrooms: form.bathrooms ? Number(form.bathrooms) : undefined,
      year_built: form.year_built ? Number(form.year_built) : undefined,
      lat: Number(form.lat) || 7.4210,
      lng: Number(form.lng) || -80.1505,
      address: form.address || '',
      images: form.images?.length ? form.images : ['https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800'],
      agent_name: form.agent_name || '',
      agent_phone: form.agent_phone || '',
      agent_email: form.agent_email || '',
      created_at: new Date().toISOString(),
      verified: false,
      verifiedStatus: 'uncertain',
    };
    saveProperty(p);
    onSave();
  };

  const inputClass = "w-full px-3 py-2 rounded-lg border border-gray-200 focus:border-[#D4A843] focus:ring-1 focus:ring-[#D4A843] outline-none text-sm";

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl space-y-4">
      <input required placeholder="Title" onChange={e => set('title', e.target.value)} className={inputClass} />
      <textarea placeholder="Description" onChange={e => set('description', e.target.value)} className={`${inputClass} h-24`} />
      <div className="grid grid-cols-2 gap-3">
        <select onChange={e => set('type', e.target.value)} className={inputClass}>
          {Object.entries(typeLabels).map(([k, v]) => <option key={k} value={k}>{v}</option>)}
        </select>
        <select onChange={e => set('status', e.target.value)} className={inputClass}>
          {Object.entries(statusLabels).map(([k, v]) => <option key={k} value={k}>{v}</option>)}
        </select>
      </div>
      <div className="grid grid-cols-3 gap-3">
        <input required type="number" placeholder="Price ($)" onChange={e => set('price', e.target.value)} className={inputClass} />
        <input type="number" placeholder="Size (m²)" onChange={e => set('size_sqm', e.target.value)} className={inputClass} />
        <input type="number" placeholder="Land (m²)" onChange={e => set('land_size_sqm', e.target.value)} className={inputClass} />
      </div>
      <div className="grid grid-cols-3 gap-3">
        <input type="number" placeholder="Bedrooms" onChange={e => set('bedrooms', e.target.value)} className={inputClass} />
        <input type="number" placeholder="Bathrooms" onChange={e => set('bathrooms', e.target.value)} className={inputClass} />
        <input type="number" placeholder="Year Built" onChange={e => set('year_built', e.target.value)} className={inputClass} />
      </div>
      <input placeholder="Address" onChange={e => set('address', e.target.value)} className={inputClass} />
      <div className="grid grid-cols-2 gap-3">
        <input type="number" step="any" placeholder="Latitude" onChange={e => set('lat', e.target.value)} className={inputClass} />
        <input type="number" step="any" placeholder="Longitude" onChange={e => set('lng', e.target.value)} className={inputClass} />
      </div>
      <input placeholder="Agent Name" onChange={e => set('agent_name', e.target.value)} className={inputClass} />
      <div className="grid grid-cols-2 gap-3">
        <input placeholder="Agent Phone" onChange={e => set('agent_phone', e.target.value)} className={inputClass} />
        <input placeholder="Agent Email" onChange={e => set('agent_email', e.target.value)} className={inputClass} />
      </div>
      <button type="submit" className="bg-[#0C2340] text-white font-semibold px-6 py-2.5 rounded-lg hover:bg-[#0a1c33]">Save Property</button>
    </form>
  );
}
