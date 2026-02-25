import { useParams, Link } from 'react-router-dom';
import PropertyMap from '../components/PropertyMap';
import PropertyCard from '../components/PropertyCard';
import LeadForm from '../components/LeadForm';
import { getProperties, getProperty } from '../data/store';
import { statusLabels, statusColors, typeLabels, formatPrice } from '../data/properties';

export default function PropertyDetail() {
  const { id } = useParams();
  const property = getProperty(id!);
  const allProperties = getProperties();

  if (!property) return <div className="pt-24 text-center text-gray-500">Property not found.</div>;

  const similar = allProperties.filter(p => p.id !== property.id && p.type === property.type).slice(0, 3);

  return (
    <div className="pt-20 pb-10 px-4 max-w-6xl mx-auto">
      <Link to="/properties" className="text-sm text-[#D4A843] hover:text-[#c49a3a] transition-colors mb-6 inline-flex items-center gap-1.5 font-medium">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
        Back to Properties
      </Link>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="relative overflow-hidden rounded-xl mb-6">
            <img src={property.images[0]} alt={property.title} className="w-full h-72 md:h-96 object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            <span className="text-xs px-3 py-1 rounded-full text-white font-medium" style={{ backgroundColor: statusColors[property.status] }}>{statusLabels[property.status]}</span>
            <span className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-700 font-medium">{typeLabels[property.type]}</span>
          </div>

          <h1 className="text-3xl font-bold text-[#0C2340] mb-2">{property.title}</h1>
          <p className="text-gray-500 mb-4">{property.address}</p>
          <p className="text-4xl font-bold text-[#0C2340] mb-6">{formatPrice(property.price)} <span className="text-lg font-normal text-gray-500">{property.currency}</span></p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
            <Stat label="Size" value={`${property.size_sqm} m²`} icon="📐" />
            {property.land_size_sqm && <Stat label="Land" value={`${property.land_size_sqm} m²`} icon="🌿" />}
            {property.bedrooms != null && <Stat label="Bedrooms" value={String(property.bedrooms)} icon="🛏" />}
            {property.bathrooms != null && <Stat label="Bathrooms" value={String(property.bathrooms)} icon="🚿" />}
            {property.year_built && <Stat label="Year Built" value={String(property.year_built)} icon="📅" />}
          </div>

          <h2 className="text-xl font-bold text-[#0C2340] mb-3">Description</h2>
          <p className="text-gray-700 leading-relaxed mb-8">{property.description}</p>

          <h2 className="text-xl font-bold text-[#0C2340] mb-3">Location</h2>
          <div className="h-64 rounded-xl overflow-hidden mb-8">
            <PropertyMap properties={[property]} center={[property.lat, property.lng]} zoom={15} />
          </div>
        </div>

        <div>
          <div className="bg-gray-50 rounded-xl p-6 mb-6 border border-gray-100">
            <h3 className="text-lg font-bold text-[#0C2340] mb-4 flex items-center gap-2">
              <span className="w-8 h-8 bg-[#0C2340] text-white rounded-full flex items-center justify-center text-sm">👤</span>
              Agent
            </h3>
            <p className="font-semibold">{property.agent_name}</p>
            <p className="text-sm text-gray-600">{property.agent_phone}</p>
            <p className="text-sm text-gray-600 mb-4">{property.agent_email}</p>
            <a href={`https://wa.me/${property.agent_phone.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer" className="block text-center bg-[#25D366] text-white font-medium py-2.5 rounded-lg hover:bg-[#20bd5a] transition-colors mb-4">
              💬 WhatsApp
            </a>
          </div>

          <div className="bg-[#0C2340] rounded-xl p-6 text-white shadow-lg">
            <h3 className="text-lg font-bold mb-1">Interested?</h3>
            <p className="text-white/50 text-sm mb-4">Fill out the form and we'll get back to you.</p>
            <LeadForm propertyId={property.id} source="property_detail" />
          </div>
        </div>
      </div>

      {similar.length > 0 && (
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-[#0C2340] mb-6">Similar Properties</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {similar.map(p => <PropertyCard key={p.id} property={p} />)}
          </div>
        </div>
      )}
    </div>
  );
}

function Stat({ label, value, icon }: { label: string; value: string; icon?: string }) {
  return (
    <div className="bg-gray-50 rounded-xl p-4 text-center border border-gray-100 hover:border-[#D4A843]/30 transition-colors">
      {icon && <p className="text-lg mb-1">{icon}</p>}
      <p className="font-bold text-[#0C2340] text-lg">{value}</p>
      <p className="text-xs text-gray-400 uppercase tracking-wide mt-0.5">{label}</p>
    </div>
  );
}
