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
  owner?: string;
  purchase_date?: string;
  notes?: string;
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
  { id: '1', name: 'Panama Sovereign', company: 'Panama Sovereign', phone: '+507 6619-6669', email: 'info@panamasovereign.com', website: 'https://panamasovereign.com', properties_count: 6 },
  { id: '2', name: 'Stay in Venao', company: 'Stay in Venao', phone: '+507 6511-7166', email: 'info@stayinvenao.com', website: 'https://stayinvenao.com', properties_count: 5 },
  { id: '3', name: 'Aura Real Estate', company: 'Aura Real Estate', phone: '+507 6000-0000', email: 'info@aurarealestate.com', properties_count: 4 },
  { id: '4', name: 'Metro Realty', company: 'Metro Realty Panama', phone: '+507 6000-0001', email: 'info@metrorealty.com', website: 'https://metrorealtypanama.com', properties_count: 3 },
  { id: '5', name: 'Panama Equity', company: 'Panama Equity', phone: '+507 6000-0002', email: 'info@panamaequity.com', website: 'https://panamaequity.com', properties_count: 4 },
  { id: '6', name: 'Le Figaro Properties', company: 'Le Figaro Properties', phone: '+507 6000-0003', email: 'info@lefigaro.com', website: 'https://properties.lefigaro.com', properties_count: 3 },
  { id: '7', name: 'Tropic Lands', company: 'Tropic Lands Panama', phone: '+507 6000-0004', email: 'info@tropiclandspanama.com', website: 'https://tropiclandspanama.com', properties_count: 2 },
  { id: '8', name: 'Casa Solution', company: 'Casa Solution', phone: '+507 6000-0005', email: 'info@casasolution.com', website: 'https://casasolution.com', properties_count: 2 },
  { id: '9', name: 'Kaniel & Omri', company: 'Solaris Energy', phone: '+507 6583-1822', email: 'k@kanielt.com', properties_count: 2 },
];

// ============================================================
// PLAYA VENAO CENTER: 7.4320, -80.1928
// CAÑAS: ~7.440, -80.175  (east/northeast of Venao)
// CAMBUTAL: ~7.415, -80.235 (west of Venao)
// PEDASI TOWN: ~7.527, -80.027 (northeast)
// RESORT VENAO (Ami & Uri): ~7.433, -80.190
// ============================================================

export const properties: Property[] = [
  // ── PLAYA VENAO BEACHFRONT ──────────────────────────────
  {
    id: '1',
    title: 'Casa Vida — Luxury Oceanfront Estate',
    description: 'Stunning 6-bedroom oceanfront estate with panoramic Pacific views, infinity pool, direct beach access. 6,403 sq ft. Suitable for B&B.',
    type: 'house', status: 'for_sale', price: 2200000, currency: 'USD',
    size_sqm: 595, land_size_sqm: 2500, bedrooms: 6, bathrooms: 5, year_built: 2021,
    lat: 7.4335, lng: -80.1940,
    address: 'Playa Venao Beachfront',
    owner: 'Unknown', notes: 'Listed by Panama Sovereign & Le Figaro',
    images: ['https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800'],
    agent_name: 'Panama Sovereign', agent_phone: '+507 6619-6669', agent_email: 'info@panamasovereign.com',
    source: 'Panama Sovereign', created_at: '2024-01-15'
  },
  {
    id: '2',
    title: 'Resort Playa Venao — Main Complex',
    description: 'The original surf resort. Restaurant, pool, cabins, event space. Owned by Ami & Uri.',
    type: 'commercial', status: 'rented', price: 0, currency: 'USD',
    size_sqm: 2000, land_size_sqm: 8000,
    lat: 7.4328, lng: -80.1905,
    address: 'Playa Venao Beach',
    owner: 'Ami & Uri', purchase_date: '2010', notes: 'Not for sale. Operating resort + Tipi buildings behind.',
    images: ['https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800'],
    agent_name: 'N/A', agent_phone: '', agent_email: '',
    source: 'Direct', created_at: '2010-01-01'
  },
  {
    id: '3',
    title: 'Tipi Complex — Behind Resort',
    description: 'Long warehouse-style buildings behind Resort Playa Venao. ~300kW solar POC site for Solaris Energy.',
    type: 'commercial', status: 'rented', price: 0, currency: 'USD',
    size_sqm: 1500, land_size_sqm: 5000,
    lat: 7.4318, lng: -80.1895,
    address: 'Behind Resort Playa Venao',
    owner: 'Ami & Uri', notes: 'Solaris Energy 300kW POC installation site.',
    images: ['https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800'],
    agent_name: 'N/A', agent_phone: '', agent_email: '',
    source: 'Direct', created_at: '2010-01-01'
  },
  {
    id: '4',
    title: 'Kaniel & Omri — Beachfront Lot',
    description: 'Private beachfront lot purchased by Kaniel & Omri. Future development planned.',
    type: 'land', status: 'sold', price: 0, currency: 'USD',
    size_sqm: 1200, land_size_sqm: 1200,
    lat: 7.4342, lng: -80.1960,
    address: 'Playa Venao Beach',
    owner: 'Kaniel & Omri', purchase_date: '2025', notes: 'Not for sale. Private investment.',
    images: ['https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800'],
    agent_name: 'Kaniel & Omri', agent_phone: '+507 6583-1822', agent_email: 'k@kanielt.com',
    source: 'Direct', created_at: '2025-01-01'
  },
  {
    id: '5',
    title: 'Selina Playa Venao',
    description: 'Selina hostel/coworking. 490m east of main beach. International brand.',
    type: 'commercial', status: 'rented', price: 0, currency: 'USD',
    size_sqm: 1000, land_size_sqm: 3000,
    lat: 7.4310, lng: -80.1870,
    address: 'East of Playa Venao Beach',
    owner: 'Selina', notes: 'International chain. Potential solar client.',
    images: ['https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800'],
    agent_name: 'N/A', agent_phone: '', agent_email: '',
    source: 'Direct', created_at: '2018-01-01'
  },
  {
    id: '6',
    title: 'Stunning Apartment in Blue Venao',
    description: 'Beautiful 114 m² apartment in the Blue Venao development. Ideal for surf lifestyle. Walking distance to beach.',
    type: 'condo', status: 'for_sale', price: 340000, currency: 'USD',
    size_sqm: 114, bedrooms: 2, bathrooms: 2, year_built: 2023,
    lat: 7.4324, lng: -80.1877,
    address: 'Blue Venao, Playa Venao',
    images: ['https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800'],
    agent_name: 'Le Figaro Properties', agent_phone: '+507 6000-0003', agent_email: 'info@lefigaro.com',
    source: 'Encuentra24', created_at: '2024-06-01'
  },
  {
    id: '7',
    title: 'Residence in Blue Venao — Furnished Villa',
    description: 'Fully furnished 200 m² villa with 3 bedrooms in Blue Venao complex. Pool access, tropical gardens.',
    type: 'house', status: 'for_sale', price: 650000, currency: 'USD',
    size_sqm: 200, land_size_sqm: 600, bedrooms: 3, bathrooms: 3, year_built: 2022,
    lat: 7.4320, lng: -80.1870,
    address: 'Blue Venao, Playa Venao',
    images: ['https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800'],
    agent_name: 'Le Figaro Properties', agent_phone: '+507 6000-0003', agent_email: 'info@lefigaro.com',
    source: 'Le Figaro', created_at: '2024-03-01'
  },
  {
    id: '8',
    title: 'Modern 3BD Ocean View Villa',
    description: 'Modern 3-bedroom ocean view villa, 180 m², near Playa Venao. Recent area developments include schools and supermarkets.',
    type: 'house', status: 'for_sale', price: 540000, currency: 'USD',
    size_sqm: 180, land_size_sqm: 700, bedrooms: 3, bathrooms: 2, year_built: 2024,
    lat: 7.4305, lng: -80.1920,
    address: 'Playa Venao Hills',
    images: ['https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800'],
    agent_name: 'Panama Equity', agent_phone: '+507 6000-0002', agent_email: 'info@panamaequity.com',
    source: 'Encuentra24', created_at: '2024-05-01'
  },
  {
    id: '9',
    title: 'Beach House — Metro Realty',
    description: '3-bedroom, 2.5-bath beach property. 167 m². Prime Playa Venao location.',
    type: 'house', status: 'for_sale', price: 640000, currency: 'USD',
    size_sqm: 167, land_size_sqm: 400, bedrooms: 3, bathrooms: 2, year_built: 2020,
    lat: 7.4340, lng: -80.1915,
    address: 'Playa Venao',
    images: ['https://images.unsplash.com/photo-1499793983394-12903e570d0b?w=800'],
    agent_name: 'Metro Realty', agent_phone: '+507 6000-0001', agent_email: 'info@metrorealty.com',
    source: 'Metro Realty', created_at: '2024-04-01'
  },
  {
    id: '10',
    title: 'The Point Hotel Area',
    description: 'Boutique surf hotel, 100m northwest of main beach. Restaurant and bar.',
    type: 'commercial', status: 'rented', price: 0, currency: 'USD',
    size_sqm: 500, land_size_sqm: 1500,
    lat: 7.4345, lng: -80.1945,
    address: 'Playa Venao NW',
    owner: 'Unknown', notes: 'Operating hotel. Potential solar client.',
    images: ['https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800'],
    agent_name: 'N/A', agent_phone: '', agent_email: '',
    source: 'Direct', created_at: '2019-01-01'
  },

  // ── VENAO HILLS / INLAND ──────────────────────────────
  {
    id: '11',
    title: 'Prime Ocean/Jungle View Lot — 8,000 m²',
    description: '8,000 m² titled land with ocean and jungle views. Utilities at lot line. Ready to build.',
    type: 'land', status: 'for_sale', price: 215000, currency: 'USD',
    size_sqm: 8000, land_size_sqm: 8000,
    lat: 7.4280, lng: -80.1910,
    address: 'Venao Hills',
    images: ['https://images.unsplash.com/photo-1628624747186-a941c476b7ef?w=800'],
    agent_name: 'Panama Sovereign', agent_phone: '+507 6619-6669', agent_email: 'info@panamasovereign.com',
    source: 'Encuentra24', created_at: '2024-02-15'
  },
  {
    id: '12',
    title: 'Eco Lodge — Operating Business',
    description: 'Operating eco-lodge with 8 rooms, restaurant, and yoga deck. Strong booking history.',
    type: 'commercial', status: 'for_sale', price: 1800000, currency: 'USD',
    size_sqm: 800, land_size_sqm: 3000,
    lat: 7.4290, lng: -80.1935,
    address: 'Playa Venao Inland',
    images: ['https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800'],
    agent_name: 'Panama Equity', agent_phone: '+507 6000-0002', agent_email: 'info@panamaequity.com',
    source: 'Panama Equity', created_at: '2024-01-10'
  },
  {
    id: '13',
    title: 'Hillside Lot — Ocean View',
    description: '2,000 m² hillside lot with panoramic ocean views. 5 min drive to beach.',
    type: 'land', status: 'for_sale', price: 150000, currency: 'USD',
    size_sqm: 2000, land_size_sqm: 2000,
    lat: 7.4270, lng: -80.1950,
    address: 'Venao Hills',
    images: ['https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800'],
    agent_name: 'Tropic Lands', agent_phone: '+507 6000-0004', agent_email: 'info@tropiclandspanama.com',
    source: 'Tropic Lands', created_at: '2024-05-20'
  },
  {
    id: '14',
    title: 'New Construction — Mountain View Villa',
    description: 'Under construction: 4-bedroom villa with infinity pool and 180° mountain-to-ocean views. Completion Q3 2025.',
    type: 'house', status: 'under_construction', price: 950000, currency: 'USD',
    size_sqm: 350, land_size_sqm: 1200, bedrooms: 4, bathrooms: 3, year_built: 2025,
    lat: 7.4295, lng: -80.1880,
    address: 'Venao Heights',
    images: ['https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800'],
    agent_name: 'Aura Real Estate', agent_phone: '+507 6000-0000', agent_email: 'info@aurarealestate.com',
    source: 'Aura Real Estate', created_at: '2024-06-15'
  },

  // ── CAÑAS AREA (northeast of Venao) ─────────────────────
  {
    id: '15',
    title: 'Oceanview Villa — Cañas',
    description: '4-bedroom villa with unobstructed ocean views, infinity pool, premium finishes. 323 m² on 6,552 m² lot. Built 2023.',
    type: 'house', status: 'for_sale', price: 1400000, currency: 'USD',
    size_sqm: 323, land_size_sqm: 6552, bedrooms: 4, bathrooms: 4, year_built: 2023,
    lat: 7.4405, lng: -80.1750,
    address: 'Cañas, near Playa Venao',
    images: ['https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800'],
    agent_name: 'Aura Real Estate', agent_phone: '+507 6000-0000', agent_email: 'info@aurarealestate.com',
    source: 'Le Figaro', created_at: '2024-03-10'
  },
  {
    id: '16',
    title: 'Luxury House — Sanctuary Gardens, Cañas',
    description: '285 m² construction on 5,400 m² land in Sanctuary Gardens. Ocean views, premium location.',
    type: 'house', status: 'for_sale', price: 750000, currency: 'USD',
    size_sqm: 285, land_size_sqm: 5400, bedrooms: 3, bathrooms: 3, year_built: 2022,
    lat: 7.4420, lng: -80.1730,
    address: 'Sanctuary Gardens, Cañas',
    images: ['https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800'],
    agent_name: 'Stay in Venao', agent_phone: '+507 6511-7166', agent_email: 'info@stayinvenao.com',
    source: 'Encuentra24', created_at: '2024-02-01'
  },
  {
    id: '17',
    title: 'Sea View Lots — Cañas del Sol',
    description: '6,133 m² estate lot (or subdividable). Asphalt road, private access. Best value ocean view lots in the area.',
    type: 'land', status: 'for_sale', price: 250000, currency: 'USD',
    size_sqm: 6133, land_size_sqm: 6133,
    lat: 7.4435, lng: -80.1715,
    address: 'Cañas del Sol',
    images: ['https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800'],
    agent_name: 'Panama Sovereign', agent_phone: '+507 6619-6669', agent_email: 'info@panamasovereign.com',
    source: 'Encuentra24', created_at: '2024-04-01'
  },
  {
    id: '18',
    title: 'Land — Corotu Village, Cañas',
    description: '17,794 m² prime lot with utilities near Corotu Village development. Road access.',
    type: 'land', status: 'for_sale', price: 1068000, currency: 'USD',
    size_sqm: 17794, land_size_sqm: 17794,
    lat: 7.4450, lng: -80.1700,
    address: 'Corotu Village, Cañas',
    images: ['https://images.unsplash.com/photo-1628624747186-a941c476b7ef?w=800'],
    agent_name: 'Panama Sovereign', agent_phone: '+507 6619-6669', agent_email: 'info@panamasovereign.com',
    source: 'Encuentra24', created_at: '2024-03-20'
  },
  {
    id: '19',
    title: 'Mega Estate — Cañas Hilltop',
    description: '50,000 m² luxury sea view estate. The largest available property in the Cañas area.',
    type: 'house', status: 'for_sale', price: 4480000, currency: 'USD',
    size_sqm: 500, land_size_sqm: 50000, bedrooms: 5, bathrooms: 5, year_built: 2021,
    lat: 7.4460, lng: -80.1680,
    address: 'Cañas Hilltop',
    images: ['https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800'],
    agent_name: 'Le Figaro Properties', agent_phone: '+507 6000-0003', agent_email: 'info@lefigaro.com',
    source: 'Encuentra24', created_at: '2024-01-20'
  },
  {
    id: '20',
    title: 'Ocean View Prime Property — Cañas',
    description: 'Premium ocean view lot, recently listed November 2024. Excellent investment opportunity.',
    type: 'land', status: 'for_sale', price: 575000, currency: 'USD',
    size_sqm: 4000, land_size_sqm: 4000,
    lat: 7.4415, lng: -80.1760,
    address: 'Cañas, Los Santos',
    images: ['https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800'],
    agent_name: 'Stay in Venao', agent_phone: '+507 6511-7166', agent_email: 'info@stayinvenao.com',
    source: 'Stay in Venao', created_at: '2024-11-01'
  },

  // ── HERMITAGE HILLS ─────────────────────────────────────
  {
    id: '21',
    title: 'Hermitage Hills — Roble Villa',
    description: 'Modern 3-bedroom villa in exclusive Hermitage Hills. Mountain views, private pool, gated community, 24/7 security.',
    type: 'house', status: 'for_sale', price: 740000, currency: 'USD',
    size_sqm: 280, land_size_sqm: 800, bedrooms: 3, bathrooms: 3, year_built: 2023,
    lat: 7.4360, lng: -80.1855,
    address: 'Hermitage Hills, Playa Venao',
    images: ['https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800'],
    agent_name: 'Stay in Venao', agent_phone: '+507 6511-7166', agent_email: 'info@stayinvenao.com',
    source: 'Stay in Venao', created_at: '2024-02-01'
  },
  {
    id: '22',
    title: 'Hermitage Hills — Caoba Villa',
    description: 'Elegant 3-bedroom villa with open-concept living, tropical landscaping, sunset views from private terrace.',
    type: 'house', status: 'for_sale', price: 500000, currency: 'USD',
    size_sqm: 220, land_size_sqm: 600, bedrooms: 3, bathrooms: 2, year_built: 2023,
    lat: 7.4365, lng: -80.1848,
    address: 'Hermitage Hills, Playa Venao',
    images: ['https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800'],
    agent_name: 'Stay in Venao', agent_phone: '+507 6511-7166', agent_email: 'info@stayinvenao.com',
    source: 'Stay in Venao', created_at: '2024-02-01'
  },

  // ── CAMBUTAL (west of Venao) ────────────────────────────
  {
    id: '23',
    title: 'Beachfront Lot — Cambutal',
    description: 'Rare beachfront lot in quiet Cambutal. 3,000 m², titled, road access. Next surf town west of Venao.',
    type: 'land', status: 'for_sale', price: 180000, currency: 'USD',
    size_sqm: 3000, land_size_sqm: 3000,
    lat: 7.4150, lng: -80.2350,
    address: 'Playa Cambutal',
    images: ['https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800'],
    agent_name: 'Tropic Lands', agent_phone: '+507 6000-0004', agent_email: 'info@tropiclandspanama.com',
    source: 'Tropic Lands', created_at: '2024-06-01'
  },
  {
    id: '24',
    title: 'Eco Cabin — Cambutal Jungle',
    description: 'Off-grid eco cabin with 2 bedrooms on 5,000 m² jungle lot. Solar powered. 10 min walk to beach.',
    type: 'house', status: 'for_sale', price: 275000, currency: 'USD',
    size_sqm: 100, land_size_sqm: 5000, bedrooms: 2, bathrooms: 1, year_built: 2021,
    lat: 7.4170, lng: -80.2300,
    address: 'Cambutal Jungle',
    images: ['https://images.unsplash.com/photo-1499793983394-12903e570d0b?w=800'],
    agent_name: 'Casa Solution', agent_phone: '+507 6000-0005', agent_email: 'info@casasolution.com',
    source: 'Casa Solution', created_at: '2024-04-15'
  },

  // ── LOS POZOS (inland, near Venao) ─────────────────────
  {
    id: '25',
    title: '5 Hectares — Los Pozos Ocean View',
    description: '50,009 m² with ocean views, 14 minutes from Playa Venao beach. Incredible development potential.',
    type: 'land', status: 'for_sale', price: 129000, currency: 'USD',
    size_sqm: 50009, land_size_sqm: 50009,
    lat: 7.4500, lng: -80.2000,
    address: 'Los Pozos, near Playa Venao',
    images: ['https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800'],
    agent_name: 'Panama Equity', agent_phone: '+507 6000-0002', agent_email: 'info@panamaequity.com',
    source: 'Encuentra24', created_at: '2024-03-01'
  },

  // ── PEDASI TOWN ─────────────────────────────────────────
  {
    id: '26',
    title: 'Colonial House — Pedasi Center',
    description: 'Charming colonial-style house in Pedasi town center. 3 bedrooms, renovated, walkable to restaurants and shops.',
    type: 'house', status: 'for_sale', price: 320000, currency: 'USD',
    size_sqm: 180, land_size_sqm: 400, bedrooms: 3, bathrooms: 2, year_built: 1985,
    lat: 7.5270, lng: -80.0270,
    address: 'Pedasi Town Center',
    images: ['https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800'],
    agent_name: 'Casa Solution', agent_phone: '+507 6000-0005', agent_email: 'info@casasolution.com',
    source: 'Casa Solution', created_at: '2024-07-01'
  },
  {
    id: '27',
    title: 'Commercial Lot — Pedasi Main Road',
    description: 'Prime 1,000 m² commercial lot on the main road into Pedasi. High traffic area.',
    type: 'land', status: 'for_sale', price: 195000, currency: 'USD',
    size_sqm: 1000, land_size_sqm: 1000,
    lat: 7.5250, lng: -80.0290,
    address: 'Main Road, Pedasi',
    images: ['https://images.unsplash.com/photo-1628624747186-a941c476b7ef?w=800'],
    agent_name: 'Metro Realty', agent_phone: '+507 6000-0001', agent_email: 'info@metrorealty.com',
    source: 'Metro Realty', created_at: '2024-08-01'
  },

  // ── BETWEEN VENAO & PEDASI ──────────────────────────────
  {
    id: '28',
    title: 'Farmland — 10 Hectares, Ocean View',
    description: '100,000 m² farmland between Venao and Pedasi. Rolling hills, ocean glimpses. Potential subdivision.',
    type: 'land', status: 'for_sale', price: 450000, currency: 'USD',
    size_sqm: 100000, land_size_sqm: 100000,
    lat: 7.4700, lng: -80.1200,
    address: 'Between Venao & Pedasi',
    images: ['https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800'],
    agent_name: 'Panama Sovereign', agent_phone: '+507 6619-6669', agent_email: 'info@panamasovereign.com',
    source: 'Panama Sovereign', created_at: '2024-02-10'
  },
  {
    id: '29',
    title: 'Starter Lot — Road to Venao',
    description: 'Affordable 800 m² lot on the road from Pedasi to Venao. Perfect entry-level investment.',
    type: 'land', status: 'for_sale', price: 65000, currency: 'USD',
    size_sqm: 800, land_size_sqm: 800,
    lat: 7.4600, lng: -80.1400,
    address: 'Road to Venao',
    images: ['https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800'],
    agent_name: 'Aura Real Estate', agent_phone: '+507 6000-0000', agent_email: 'info@aurarealestate.com',
    source: 'Aura Real Estate', created_at: '2024-06-01'
  },
  {
    id: '30',
    title: 'Ocean View Lot — Sold 2024',
    description: 'Previously available 1,005 m² ocean view lot near beach. Sold.',
    type: 'land', status: 'sold', price: 150000, currency: 'USD',
    size_sqm: 1005, land_size_sqm: 1005,
    lat: 7.4315, lng: -80.1945,
    address: 'Playa Venao',
    owner: 'Unknown buyer', purchase_date: '2024',
    images: ['https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800'],
    agent_name: 'Tropic Lands', agent_phone: '+507 6000-0004', agent_email: 'info@tropiclandspanama.com',
    source: 'Tropic Lands', created_at: '2023-01-01'
  },
];

export const statusColors: Record<string, string> = {
  for_sale: '#2E7D32',
  for_rent: '#1565C0',
  under_construction: '#E65100',
  sold: '#C62828',
  rented: '#757575',
};

export const statusLabels: Record<string, string> = {
  for_sale: 'For Sale',
  for_rent: 'For Rent',
  under_construction: 'Under Construction',
  sold: 'Sold',
  rented: 'Operating / Not for Sale',
};

export const typeLabels: Record<string, string> = {
  land: 'Land',
  house: 'House',
  condo: 'Condo',
  commercial: 'Commercial',
};

export function formatPrice(price: number): string {
  if (price === 0) return 'N/A';
  if (price >= 1000000) return `$${(price / 1000000).toFixed(1)}M`;
  if (price >= 1000) return `$${(price / 1000).toFixed(0)}K`;
  return `$${price}`;
}
