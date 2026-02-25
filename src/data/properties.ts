export interface Property {
  id: string;
  title: string;
  description: string;
  type: 'land' | 'house' | 'condo' | 'commercial';
  status: 'for_sale' | 'for_rent' | 'under_construction' | 'sold' | 'rented';
  price: number;
  currency: string;
  size_sqm: number;
  land_size_sqm?: number;
  bedrooms?: number;
  bathrooms?: number;
  year_built?: number;
  lat: number;
  lng: number;
  address: string;
  images: string[];
  agent_name: string;
  agent_phone: string;
  agent_email: string;
  source?: string;
  created_at: string;
}

export interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  budget_min?: number;
  budget_max?: number;
  property_type?: string;
  message: string;
  property_id?: string;
  source: string;
  created_at: string;
}

export interface Agent {
  id: string;
  name: string;
  company: string;
  phone: string;
  email: string;
  website?: string;
  properties_count: number;
}

export const agents: Agent[] = [
  { id: '1', name: 'Panama Sovereign', company: 'Panama Sovereign', phone: '+507 6619-6669', email: 'info@panamasovereign.com', website: 'https://panamasovereign.com', properties_count: 5 },
  { id: '2', name: 'Stay in Venao', company: 'Stay in Venao', phone: '+507 6511-7166', email: 'info@stayinvenao.com', website: 'https://stayinvenao.com', properties_count: 4 },
  { id: '3', name: 'Aura Real Estate', company: 'Aura Real Estate', phone: '+507 6000-0000', email: 'info@aurarealestate.com', properties_count: 3 },
  { id: '4', name: 'Metro Realty', company: 'Metro Realty', phone: '+507 6000-0001', email: 'info@metrorealty.com', properties_count: 2 },
  { id: '5', name: 'Panama Equity', company: 'Panama Equity', phone: '+507 6000-0002', email: 'info@panamaequity.com', website: 'https://panamaequity.com', properties_count: 3 },
];

export const properties: Property[] = [
  {
    id: '1', title: 'Casa Vida — Luxury Oceanfront Estate', description: 'Stunning 6-bedroom oceanfront estate with panoramic Pacific views, infinity pool, and direct beach access. The crown jewel of Playa Venao real estate.', type: 'house', status: 'for_sale', price: 2200000, currency: 'USD', size_sqm: 650, land_size_sqm: 2500, bedrooms: 6, bathrooms: 5, year_built: 2021, lat: 7.4235, lng: -80.1520, address: 'Playa Venao Oceanfront', images: ['https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800'], agent_name: 'Panama Sovereign', agent_phone: '+507 6619-6669', agent_email: 'info@panamasovereign.com', source: 'Panama Sovereign', created_at: '2024-01-15'
  },
  {
    id: '2', title: 'Hermitage Hills — Roble Villa', description: 'Modern 3-bedroom villa in the exclusive Hermitage Hills development. Mountain views, private pool, and gated community with 24/7 security.', type: 'house', status: 'for_sale', price: 740000, currency: 'USD', size_sqm: 280, land_size_sqm: 800, bedrooms: 3, bathrooms: 3, year_built: 2023, lat: 7.4180, lng: -80.1480, address: 'Hermitage Hills, Playa Venao', images: ['https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800'], agent_name: 'Stay in Venao', agent_phone: '+507 6511-7166', agent_email: 'info@stayinvenao.com', source: 'Stay in Venao', created_at: '2024-02-01'
  },
  {
    id: '3', title: 'Hermitage Hills — Caoba Villa', description: 'Elegant 3-bedroom villa with open-concept living, tropical landscaping, and stunning sunset views from the private terrace.', type: 'house', status: 'for_sale', price: 500000, currency: 'USD', size_sqm: 220, land_size_sqm: 600, bedrooms: 3, bathrooms: 2, year_built: 2023, lat: 7.4175, lng: -80.1475, address: 'Hermitage Hills, Playa Venao', images: ['https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800'], agent_name: 'Stay in Venao', agent_phone: '+507 6511-7166', agent_email: 'info@stayinvenao.com', source: 'Stay in Venao', created_at: '2024-02-01'
  },
  {
    id: '4', title: 'Oceanview Villa — Cañas', description: 'Spectacular 4-bedroom villa with unobstructed ocean views, infinity pool, and premium finishes throughout. Located in the desirable Cañas area.', type: 'house', status: 'for_sale', price: 1400000, currency: 'USD', size_sqm: 420, land_size_sqm: 1500, bedrooms: 4, bathrooms: 4, year_built: 2022, lat: 7.4250, lng: -80.1540, address: 'Cañas, Playa Venao', images: ['https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800'], agent_name: 'Aura Real Estate', agent_phone: '+507 6000-0000', agent_email: 'info@aurarealestate.com', source: 'Aura Real Estate', created_at: '2024-03-10'
  },
  {
    id: '5', title: 'Modern 3BD Villa with Pool', description: 'Contemporary design meets tropical living. This 3-bedroom villa features floor-to-ceiling windows, a chef\'s kitchen, and a private saltwater pool.', type: 'house', status: 'for_sale', price: 875000, currency: 'USD', size_sqm: 310, land_size_sqm: 900, bedrooms: 3, bathrooms: 3, year_built: 2024, lat: 7.4200, lng: -80.1490, address: 'Playa Venao', images: ['https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800'], agent_name: 'Panama Equity', agent_phone: '+507 6000-0002', agent_email: 'info@panamaequity.com', source: 'Panama Equity', created_at: '2024-04-05'
  },
  {
    id: '6', title: 'Prime Development Land — 1 Hectare', description: 'One hectare of prime development land with ocean views and road access. Perfect for a boutique hotel or villa development.', type: 'land', status: 'for_sale', price: 350000, currency: 'USD', size_sqm: 10000, land_size_sqm: 10000, lat: 7.4260, lng: -80.1530, address: 'Playa Venao Hills', images: ['https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800'], agent_name: 'Panama Sovereign', agent_phone: '+507 6619-6669', agent_email: 'info@panamasovereign.com', source: 'Panama Sovereign', created_at: '2024-01-20'
  },
  {
    id: '7', title: 'Hillside Lot with Ocean View', description: 'Beautiful 2,000 sqm lot on a gentle hillside with panoramic ocean views. Utilities available at the lot line.', type: 'land', status: 'for_sale', price: 200000, currency: 'USD', size_sqm: 2000, land_size_sqm: 2000, lat: 7.4220, lng: -80.1460, address: 'Playa Venao', images: ['https://images.unsplash.com/photo-1628624747186-a941c476b7ef?w=800'], agent_name: 'Metro Realty', agent_phone: '+507 6000-0001', agent_email: 'info@metrorealty.com', source: 'Metro Realty', created_at: '2024-05-01'
  },
  {
    id: '8', title: 'Jungle Lot — Build Your Dream', description: 'Lush 1,500 sqm jungle lot just 5 minutes from the beach. Titled land with easy access.', type: 'land', status: 'for_sale', price: 150000, currency: 'USD', size_sqm: 1500, land_size_sqm: 1500, lat: 7.4190, lng: -80.1450, address: 'Near Playa Venao', images: ['https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800'], agent_name: 'Panama Equity', agent_phone: '+507 6000-0002', agent_email: 'info@panamaequity.com', source: 'Panama Equity', created_at: '2024-03-15'
  },
  {
    id: '9', title: 'Starter Lot — Great Value', description: 'Affordable 800 sqm lot in a growing area near Playa Venao. Perfect entry point for investors.', type: 'land', status: 'for_sale', price: 99900, currency: 'USD', size_sqm: 800, land_size_sqm: 800, lat: 7.4165, lng: -80.1440, address: 'Cambutal Road, near Venao', images: ['https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800'], agent_name: 'Aura Real Estate', agent_phone: '+507 6000-0000', agent_email: 'info@aurarealestate.com', source: 'Aura Real Estate', created_at: '2024-06-01'
  },
  {
    id: '10', title: 'Beachfront Condo — Surf & Sand', description: 'Stunning 2-bedroom beachfront condo with direct beach access, modern finishes, and rental income potential.', type: 'condo', status: 'for_sale', price: 450000, currency: 'USD', size_sqm: 120, bedrooms: 2, bathrooms: 2, year_built: 2023, lat: 7.4230, lng: -80.1510, address: 'Beachfront, Playa Venao', images: ['https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800'], agent_name: 'Stay in Venao', agent_phone: '+507 6511-7166', agent_email: 'info@stayinvenao.com', source: 'Stay in Venao', created_at: '2024-02-20'
  },
  {
    id: '11', title: 'Ocean View Condo — Premium Finish', description: 'Luxury 3-bedroom condo with ocean views, high-end appliances, and access to pool and gym facilities.', type: 'condo', status: 'for_sale', price: 540000, currency: 'USD', size_sqm: 160, bedrooms: 3, bathrooms: 2, year_built: 2024, lat: 7.4225, lng: -80.1515, address: 'Playa Venao', images: ['https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800'], agent_name: 'Panama Sovereign', agent_phone: '+507 6619-6669', agent_email: 'info@panamasovereign.com', source: 'Panama Sovereign', created_at: '2024-04-01'
  },
  {
    id: '12', title: 'Cozy Beach Condo — Turnkey', description: 'Move-in ready 1-bedroom condo steps from the beach. Fully furnished with strong rental history.', type: 'condo', status: 'for_sale', price: 350000, currency: 'USD', size_sqm: 85, bedrooms: 1, bathrooms: 1, year_built: 2022, lat: 7.4215, lng: -80.1505, address: 'Playa Venao Center', images: ['https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800'], agent_name: 'Metro Realty', agent_phone: '+507 6000-0001', agent_email: 'info@metrorealty.com', source: 'Metro Realty', created_at: '2024-05-15'
  },
  {
    id: '13', title: 'Beach House — Surfer\'s Paradise', description: 'Charming 3-bedroom beach house with direct access to one of Panama\'s best surf breaks. Rustic-chic design with modern amenities.', type: 'house', status: 'for_sale', price: 640000, currency: 'USD', size_sqm: 200, land_size_sqm: 500, bedrooms: 3, bathrooms: 2, year_built: 2020, lat: 7.4240, lng: -80.1525, address: 'Beachfront, Playa Venao', images: ['https://images.unsplash.com/photo-1499793983394-12903e570d0b?w=800'], agent_name: 'Stay in Venao', agent_phone: '+507 6511-7166', agent_email: 'info@stayinvenao.com', source: 'Stay in Venao', created_at: '2024-03-01'
  },
  {
    id: '14', title: 'Eco Lodge — Boutique Commercial', description: 'Operating eco-lodge with 8 rooms, restaurant, and yoga deck. Strong booking history and growing brand.', type: 'commercial', status: 'for_sale', price: 1800000, currency: 'USD', size_sqm: 800, land_size_sqm: 3000, lat: 7.4195, lng: -80.1535, address: 'Playa Venao', images: ['https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800'], agent_name: 'Panama Equity', agent_phone: '+507 6000-0002', agent_email: 'info@panamaequity.com', source: 'Panama Equity', created_at: '2024-01-10'
  },
  {
    id: '15', title: 'New Construction — Mountain View Villa', description: 'Under construction: 4-bedroom villa with infinity pool and 180° mountain-to-ocean views. Completion Q3 2025.', type: 'house', status: 'under_construction', price: 950000, currency: 'USD', size_sqm: 350, land_size_sqm: 1200, bedrooms: 4, bathrooms: 3, year_built: 2025, lat: 7.4185, lng: -80.1495, address: 'Playa Venao Heights', images: ['https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800'], agent_name: 'Aura Real Estate', agent_phone: '+507 6000-0000', agent_email: 'info@aurarealestate.com', source: 'Aura Real Estate', created_at: '2024-06-15'
  },
];

export const statusColors: Record<string, string> = {
  for_sale: '#2E7D32',
  for_rent: '#1565C0',
  under_construction: '#E65100',
  sold: '#757575',
  rented: '#757575',
};

export const statusLabels: Record<string, string> = {
  for_sale: 'For Sale',
  for_rent: 'For Rent',
  under_construction: 'Under Construction',
  sold: 'Sold',
  rented: 'Rented',
};

export const typeLabels: Record<string, string> = {
  land: 'Land',
  house: 'House',
  condo: 'Condo',
  commercial: 'Commercial',
};

export function formatPrice(price: number): string {
  if (price >= 1000000) return `$${(price / 1000000).toFixed(1)}M`;
  if (price >= 1000) return `$${(price / 1000).toFixed(0)}K`;
  return `$${price}`;
}
