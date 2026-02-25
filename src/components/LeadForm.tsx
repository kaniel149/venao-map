import { useState } from 'react';
import { addLead } from '../data/store';

interface Props {
  propertyId?: string;
  source?: string;
  onSuccess?: () => void;
}

export default function LeadForm({ propertyId, source = 'website', onSuccess }: Props) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', budget_min: '', budget_max: '', property_type: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addLead({
      name: form.name,
      email: form.email,
      phone: form.phone,
      budget_min: form.budget_min ? Number(form.budget_min) : undefined,
      budget_max: form.budget_max ? Number(form.budget_max) : undefined,
      property_type: form.property_type || undefined,
      message: form.message,
      property_id: propertyId,
      source,
    });
    setSent(true);
    onSuccess?.();
  };

  if (sent) return (
    <div className="text-center py-8">
      <div className="text-4xl mb-2">✅</div>
      <p className="text-lg font-semibold text-[#0F172A]">Thank you!</p>
      <p className="text-slate-600">We'll be in touch soon.</p>
    </div>
  );

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <input required placeholder="Your Name" value={form.name} onChange={e => setForm({...form, name: e.target.value})} className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-[#D97706] focus:ring-1 focus:ring-[#D97706] outline-none text-sm" />
      <input required type="email" placeholder="Email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-[#D97706] focus:ring-1 focus:ring-[#D97706] outline-none text-sm" />
      <input placeholder="Phone" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-[#D97706] focus:ring-1 focus:ring-[#D97706] outline-none text-sm" />
      {!propertyId && (
        <>
          <div className="grid grid-cols-2 gap-2">
            <input placeholder="Min Budget ($)" value={form.budget_min} onChange={e => setForm({...form, budget_min: e.target.value})} className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-[#D97706] focus:ring-1 focus:ring-[#D97706] outline-none text-sm" />
            <input placeholder="Max Budget ($)" value={form.budget_max} onChange={e => setForm({...form, budget_max: e.target.value})} className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-[#D97706] focus:ring-1 focus:ring-[#D97706] outline-none text-sm" />
          </div>
          <select value={form.property_type} onChange={e => setForm({...form, property_type: e.target.value})} className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-[#D97706] focus:ring-1 focus:ring-[#D97706] outline-none text-sm text-slate-600">
            <option value="">What are you looking for?</option>
            <option value="land">Land</option>
            <option value="house">House / Villa</option>
            <option value="condo">Condo</option>
            <option value="commercial">Commercial</option>
          </select>
        </>
      )}
      <textarea placeholder={propertyId ? "I'm interested in this property..." : "Tell us what you're looking for..."} value={form.message} onChange={e => setForm({...form, message: e.target.value})} className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-[#D97706] focus:ring-1 focus:ring-[#D97706] outline-none text-sm h-20 resize-none" />
      <button type="submit" className="w-full bg-[#D97706] text-[#0F172A] font-semibold py-2.5 rounded-lg hover:bg-[#B45309] transition-colors">
        {propertyId ? "I'm Interested" : "Get in Touch"}
      </button>
    </form>
  );
}
