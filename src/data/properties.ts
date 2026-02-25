export interface Property {
  id: string;
  title: string;
  description: string;
  type: 'land' | 'house' | 'condo' | 'commercial' | 'development';
  status: 'for_sale' | 'for_rent' | 'under_construction' | 'sold' | 'rented' | 'pre_sale';
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
  { id: '4', name: 'Metro Realty', company: 'Metro Realty Panama', phone: '+507 6000-0001', email: 'info@metrorealtypanama.com', website: 'https://metrorealtypanama.com', properties_count: 4 },
  { id: '5', name: 'Panama Equity', company: 'Panama Equity', phone: '+507 6000-0002', email: 'info@panamaequity.com', website: 'https://panamaequity.com', properties_count: 4 },
  { id: '6', name: 'Le Figaro Properties', company: 'Le Figaro Properties', phone: '+507 6000-0003', email: 'info@lefigaro.com', website: 'https://properties.lefigaro.com', properties_count: 5 },
  { id: '7', name: 'Tropic Lands', company: 'Tropic Lands Panama', phone: '+507 6000-0004', email: 'info@tropiclandspanama.com', website: 'https://tropiclandspanama.com', properties_count: 2 },
  { id: '8', name: 'Casa Solution', company: 'Casa Solution', phone: '+507 6000-0005', email: 'info@casasolution.com', website: 'https://casasolution.com', properties_count: 4 },
  { id: '9', name: 'Kaniel & Omri', company: 'Solaris Energy', phone: '+507 6583-1822', email: 'k@kanielt.com', properties_count: 2 },
  { id: '10', name: 'Circa Panama', company: 'Circa Panama Real Estate', phone: '+507 6169-2453', email: 'info@circapanama.com', website: 'https://circapanama.com', properties_count: 3 },
  { id: '11', name: 'Panama Properties', company: 'Panama Properties', phone: '+507 6169-2453', email: 'info@panama-properties.com', website: 'https://panama-properties.com', properties_count: 4 },
  { id: '12', name: 'Love Your Land Panama', company: 'Love Your Land Panama', phone: '', email: 'info@loveyourlandpanama.com', website: 'https://loveyourlandpanama.com', properties_count: 6 },
  { id: '13', name: 'Open Doors Panama', company: 'Open Doors Panama', phone: '', email: 'info@opendoorspanama.com', website: 'https://opendoorspanama.com', properties_count: 1 },
  { id: '14', name: 'Dekel Group (Rafi & Daniel)', company: 'Dekel Development Group', phone: '', email: '', properties_count: 2 },
  { id: '15', name: 'Moledet', company: 'Moledet', phone: '', email: '', website: 'https://moledet.com.pa', properties_count: 2 },
  { id: '16', name: 'Green Ace (Aviad & Omri)', company: 'Green Ace Development & Construction', phone: '', email: '', properties_count: 1 },
];

// ============================================================
// PLAYA VENAO CENTER: 7.4320, -80.1928
// CAÑAS: ~7.440, -80.175  (east/northeast of Venao)
// CAMBUTAL: ~7.415, -80.235 (west of Venao)
// PEDASI TOWN: ~7.527, -80.027 (northeast)
// RESORT VENAO (Ami & Uri): ~7.433, -80.190
// HERMITAGE HILLS: ~7.436, -80.185
// BLUE VENAO: ~7.432, -80.187
// ============================================================

export const properties: Property[] = [
  // ══════════════════════════════════════════════════════════
  // PLAYA VENAO — BEACHFRONT & CENTER
  // ══════════════════════════════════════════════════════════
  {
    id: '1', title: 'Casa Vida — Luxury Oceanfront Estate',
    description: '6-bedroom oceanfront estate, pool, garden, 180° ocean/beach views. 6,403 sq ft + separate 1BD apartment. Suitable for B&B.',
    type: 'house', status: 'for_sale', price: 2200000, currency: 'USD',
    size_sqm: 595, land_size_sqm: 2500, bedrooms: 6, bathrooms: 5, year_built: 2021,
    lat: 7.4338, lng: -80.1955, address: 'Playa Venao Beachfront',
    notes: 'Also listed by Love Your Land Panama at $2.1M', images: ['https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800'],
    agent_name: 'Le Figaro Properties', agent_phone: '+507 6000-0003', agent_email: 'info@lefigaro.com',
    source: 'Le Figaro / Love Your Land', created_at: '2024-01-15'
  },
  {
    id: '2', title: 'Resort Playa Venao — Main Complex',
    description: 'The original surf resort. Restaurant, pool, cabins, event space.',
    type: 'commercial', status: 'rented', price: 0, currency: 'USD',
    size_sqm: 2000, land_size_sqm: 8000, lat: 7.43266, lng: -80.19329, address: 'Playa Venao Beach',
    owner: 'Ami & Uri', purchase_date: '~2010', notes: 'Not for sale. Operating resort + Tipi buildings behind.',
    images: ['https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800'],
    agent_name: 'N/A', agent_phone: '', agent_email: '', source: 'Direct', created_at: '2010-01-01'
  },
  {
    id: '3', title: 'Tipi Complex — Behind Resort (Solaris POC)',
    description: 'Warehouse-style buildings behind Resort. 300kW solar POC site for Solaris Energy.',
    type: 'commercial', status: 'rented', price: 0, currency: 'USD',
    size_sqm: 1500, land_size_sqm: 5000, lat: 7.4335, lng: -80.1928, address: 'Behind Resort Playa Venao',
    owner: 'Ami & Uri', notes: 'Solaris Energy 300kW POC installation.',
    images: ['https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800'],
    agent_name: 'N/A', agent_phone: '', agent_email: '', source: 'Direct', created_at: '2010-01-01'
  },
  {
    id: '4', title: 'Kaniel & Omri — Beachfront Lot',
    description: 'Private beachfront lot. Future development planned.',
    type: 'land', status: 'sold', price: 0, currency: 'USD',
    size_sqm: 1200, land_size_sqm: 1200, lat: 7.433, lng: -80.197, address: 'Playa Venao Beach',
    owner: 'Kaniel & Omri', purchase_date: '2025', notes: 'Not for sale. Private investment.',
    images: ['https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800'],
    agent_name: 'Kaniel & Omri', agent_phone: '+507 6583-1822', agent_email: 'k@kanielt.com',
    source: 'Direct', created_at: '2025-01-01'
  },
  {
    id: '5', title: 'Beachfront Land — Rare Opportunity',
    description: '1,511 m² beachfront lot. One of the last beachfront parcels available.',
    type: 'land', status: 'for_sale', price: 1500000, currency: 'USD',
    size_sqm: 1511, land_size_sqm: 1511, lat: 7.4325, lng: -80.196, address: 'Playa Venao Beachfront',
    images: ['https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800'],
    agent_name: 'Panama Properties', agent_phone: '+507 6169-2453', agent_email: 'info@panama-properties.com',
    source: 'Panama Properties', created_at: '2024-06-01'
  },
  {
    id: '6', title: 'Luxury 6BD Estate — $5.2M',
    description: '6-bedroom luxury estate on 1,000 m². The most expensive listing in Playa Venao.',
    type: 'house', status: 'for_sale', price: 5200000, currency: 'USD',
    size_sqm: 600, land_size_sqm: 1000, bedrooms: 6, bathrooms: 6, year_built: 2022,
    lat: 7.4348, lng: -80.194, address: 'Playa Venao Beachfront',
    images: ['https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800'],
    agent_name: 'Le Figaro Properties', agent_phone: '+507 6000-0003', agent_email: 'info@lefigaro.com',
    source: 'Le Figaro', created_at: '2024-02-01'
  },
  {
    id: '7', title: '7BD Estate on 4.6 Ha',
    description: '7-bedroom property on 4.6 hectares (46,000 m²). Massive estate with development potential.',
    type: 'house', status: 'for_sale', price: 1800000, currency: 'USD',
    size_sqm: 2000, land_size_sqm: 46000, bedrooms: 7, bathrooms: 5,
    lat: 7.438, lng: -80.1975, address: 'Playa Venao Hillside',
    images: ['https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800'],
    agent_name: 'Le Figaro Properties', agent_phone: '+507 6000-0003', agent_email: 'info@lefigaro.com',
    source: 'Le Figaro', created_at: '2024-03-01'
  },
  {
    id: '8', title: 'Luxurious 4BD Home — $998K',
    description: '4-bedroom, 4-bath home. 380 m² on 1,710 m² lot. Premium finishes.',
    type: 'house', status: 'for_sale', price: 998000, currency: 'USD',
    size_sqm: 380, land_size_sqm: 1710, bedrooms: 4, bathrooms: 4,
    lat: 7.434, lng: -80.1925, address: 'Playa Venao',
    images: ['https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800'],
    agent_name: 'Casa Solution', agent_phone: '+507 6000-0005', agent_email: 'info@casasolution.com',
    source: 'Casa Solution', created_at: '2024-04-01'
  },
  {
    id: '9', title: 'Modern 3BD Villa on 2,900 m²',
    description: 'Modern 3-bedroom villa with large plot. Great for expansion.',
    type: 'house', status: 'for_sale', price: 875000, currency: 'USD',
    size_sqm: 250, land_size_sqm: 2900, bedrooms: 3, bathrooms: 3,
    lat: 7.4355, lng: -80.1945, address: 'Playa Venao',
    images: ['https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800'],
    agent_name: 'Casa Solution', agent_phone: '+507 6000-0005', agent_email: 'info@casasolution.com',
    source: 'Casa Solution', created_at: '2024-05-01'
  },
  {
    id: '10', title: 'Beach House — $640K (Price Drop)',
    description: '3-bedroom, 2.5-bath beach house. 167 m². Recently marked down.',
    type: 'house', status: 'for_sale', price: 640000, currency: 'USD',
    size_sqm: 167, land_size_sqm: 400, bedrooms: 3, bathrooms: 2, year_built: 2020,
    lat: 7.4335, lng: -80.1915, address: 'Playa Venao',
    images: ['https://images.unsplash.com/photo-1499793983394-12903e570d0b?w=800'],
    agent_name: 'Metro Realty', agent_phone: '+507 6000-0001', agent_email: 'info@metrorealtypanama.com',
    source: 'Metro Realty', created_at: '2024-04-01'
  },
  {
    id: '11', title: 'Ocean View Home — $400K (Circa)',
    description: 'Stunning ocean view home listed by Circa Panama.',
    type: 'house', status: 'for_sale', price: 400000, currency: 'USD',
    size_sqm: 180, land_size_sqm: 600, bedrooms: 3, bathrooms: 2,
    lat: 7.4345, lng: -80.196, address: 'Playa Venao',
    images: ['https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800'],
    agent_name: 'Circa Panama', agent_phone: '+507 6169-2453', agent_email: 'info@circapanama.com',
    source: 'Circa Panama', created_at: '2024-08-01'
  },
  {
    id: '12', title: 'Sea-View Lot — Venao West',
    description: '3,909 m² sea-view lot on the west side of Playa Venao. Great value.',
    type: 'land', status: 'for_sale', price: 99900, currency: 'USD',
    size_sqm: 3909, land_size_sqm: 3909, lat: 7.436, lng: -80.199, address: 'Venao West',
    images: ['https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800'],
    agent_name: 'Casa Solution', agent_phone: '+507 6000-0005', agent_email: 'info@casasolution.com',
    source: 'Casa Solution', created_at: '2024-06-01'
  },
  {
    id: '13', title: 'Large Ocean View Lots — $100/m²',
    description: '900 m² ocean view lots. Multiple available.',
    type: 'land', status: 'for_sale', price: 90000, currency: 'USD',
    size_sqm: 900, land_size_sqm: 900, lat: 7.4365, lng: -80.195, address: 'Playa Venao Hills',
    notes: '$100/m² — multiple lots available',
    images: ['https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800'],
    agent_name: 'Panama Properties', agent_phone: '+507 6169-2453', agent_email: 'info@panama-properties.com',
    source: 'Panama Properties', created_at: '2024-07-01'
  },
  {
    id: '14', title: 'Loft in Loma de Venao',
    description: 'Beautiful loft, 1 bed, 1.5 bath, 78 m². Modern design in hillside community.',
    type: 'condo', status: 'for_sale', price: 270000, currency: 'USD',
    size_sqm: 78, bedrooms: 1, bathrooms: 1,
    lat: 7.437, lng: -80.192, address: 'Loma de Venao',
    images: ['https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800'],
    agent_name: 'Love Your Land Panama', agent_phone: '', agent_email: 'info@loveyourlandpanama.com',
    source: 'Love Your Land', created_at: '2024-05-01'
  },
  {
    id: '15', title: 'Las Palmas Venao — Pre-Sale Land',
    description: '600 m² lot in Las Palmas Venao development. Pre-sale pricing.',
    type: 'land', status: 'for_sale', price: 130000, currency: 'USD',
    size_sqm: 600, land_size_sqm: 600, lat: 7.4375, lng: -80.1905, address: 'Las Palmas, Playa Venao',
    images: ['https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800'],
    agent_name: 'Love Your Land Panama', agent_phone: '', agent_email: 'info@loveyourlandpanama.com',
    source: 'Love Your Land', created_at: '2024-09-01'
  },
  {
    id: '16', title: 'Beachfront Exclusivity — 5,000 m²',
    description: '5,000 m² beachfront exclusive parcel. Premium investment opportunity.',
    type: 'land', status: 'for_sale', price: 1250000, currency: 'USD',
    size_sqm: 5000, land_size_sqm: 5000, lat: 7.434, lng: -80.198, address: 'Playa Venao Beachfront',
    images: ['https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800'],
    agent_name: 'Love Your Land Panama', agent_phone: '', agent_email: 'info@loveyourlandpanama.com',
    source: 'Love Your Land', created_at: '2024-08-01'
  },

  // ══════════════════════════════════════════════════════════
  // PLAYA VENAO — SELINA & THE POINT
  // ══════════════════════════════════════════════════════════
  {
    id: '17', title: 'Selina Playa Venao',
    description: 'International hostel/coworking chain. East of main beach.',
    type: 'commercial', status: 'rented', price: 0, currency: 'USD',
    size_sqm: 1000, land_size_sqm: 3000, lat: 7.43069, lng: -80.18892, address: 'East of Playa Venao Beach',
    owner: 'Selina / Dekel Group (Rafi & Daniel)', notes: 'Selina brand, owned by Dekel Group. Potential solar client.',
    images: ['https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800'],
    agent_name: 'N/A', agent_phone: '', agent_email: '', source: 'Direct', created_at: '2018-01-01'
  },
  {
    id: '18', title: 'The Point — Luxury Development (Dekel Group)',
    description: 'MAJOR PROJECT: Rafi & Daniel (Dekel Group, Selina owners) taking entire east side of beach. Luxury development. LP structure for investors.',
    type: 'commercial', status: 'under_construction', price: 12000000, currency: 'USD',
    size_sqm: 5000, land_size_sqm: 20000, lat: 7.431, lng: -80.188, address: 'East side of Playa Venao Beach',
    owner: 'Dekel Group (Rafi & Daniel)', notes: 'LP structure: 8% per $1M invested, GP takes 30% success fee. Finder fee: 4% of LP per $1M sales. Total $12M raise.',
    images: ['https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800'],
    agent_name: 'Dekel Group (Rafi & Daniel)', agent_phone: '', agent_email: '',
    source: 'Omri (via WhatsApp)', created_at: '2026-02-23'
  },
  {
    id: '19', title: 'The Point Hotel Area',
    description: 'Boutique surf hotel, NW of main beach.',
    type: 'commercial', status: 'rented', price: 0, currency: 'USD',
    size_sqm: 500, land_size_sqm: 1500, lat: 7.43266, lng: -80.19329, address: 'Playa Venao NW',
    owner: 'Unknown', notes: 'Operating hotel. Potential solar client.',
    images: ['https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800'],
    agent_name: 'N/A', agent_phone: '', agent_email: '', source: 'Direct', created_at: '2019-01-01'
  },

  // ══════════════════════════════════════════════════════════
  // BLUE VENAO
  // ══════════════════════════════════════════════════════════
  {
    id: '20', title: 'Blue Venao — 1BD Villa',
    description: '1-bedroom villa in Blue Venao Beach Club. 86 m², 2 floors.',
    type: 'house', status: 'for_sale', price: 390000, currency: 'USD',
    size_sqm: 86, bedrooms: 1, bathrooms: 1, year_built: 2023,
    lat: 7.4318, lng: -80.19, address: 'Blue Venao, Playa Venao',
    images: ['https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800'],
    agent_name: 'Panama Properties', agent_phone: '+507 6169-2453', agent_email: 'info@panama-properties.com',
    source: 'Panama Properties / Circa', created_at: '2024-06-01'
  },
  {
    id: '21', title: 'Blue Venao — Beach Club Apartments',
    description: 'Beachfront apartments 99-145 m², 2BD/2BA. 167m beach access, pool, amenities. Multiple units.',
    type: 'condo', status: 'for_sale', price: 355600, currency: 'USD',
    size_sqm: 120, bedrooms: 2, bathrooms: 2, year_built: 2023,
    lat: 7.4316, lng: -80.1905, address: 'Blue Venao Beach Club',
    notes: 'Range: $355,600-$562,300 depending on unit size',
    images: ['https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800'],
    agent_name: 'Metro Realty', agent_phone: '+507 6000-0001', agent_email: 'info@metrorealtypanama.com',
    source: 'Metro Realty', created_at: '2024-03-01'
  },
  {
    id: '22', title: 'Blue Venao — Income Generating Condo',
    description: 'Ocean view condo with proven rental income. Modern amenities.',
    type: 'condo', status: 'for_sale', price: 349752, currency: 'USD',
    size_sqm: 110, bedrooms: 2, bathrooms: 2,
    lat: 7.432, lng: -80.1898, address: 'Blue Venao',
    images: ['https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800'],
    agent_name: 'Circa Panama', agent_phone: '+507 6169-2453', agent_email: 'info@circapanama.com',
    source: 'Circa Panama', created_at: '2024-09-01'
  },
  {
    id: '23', title: 'Playa Venao Beach Condos — 56-Unit Complex',
    description: '113-159 m² units (up to 581 m² penthouses). Pool, ocean/hill views, near surf break.',
    type: 'condo', status: 'for_sale', price: 450000, currency: 'USD',
    size_sqm: 150, bedrooms: 3, bathrooms: 2,
    lat: 7.4313, lng: -80.191, address: 'Playa Venao',
    notes: '56-unit complex. Multiple sizes available.',
    images: ['https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800'],
    agent_name: 'Panama Equity', agent_phone: '+507 6000-0002', agent_email: 'info@panamaequity.com',
    source: 'Panama Equity', created_at: '2024-04-01'
  },
  {
    id: '24', title: 'Villa Marina Condo — Beachfront Turnkey',
    description: 'Fully furnished 3BD/2BA beachfront condo, 180 m². Built 2021. Turnkey.',
    type: 'condo', status: 'for_sale', price: 630000, currency: 'USD',
    size_sqm: 180, bedrooms: 3, bathrooms: 2, year_built: 2021,
    lat: 7.4262, lng: -80.1858, address: 'Playa Venao Beachfront',
    images: ['https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800'],
    agent_name: 'Open Doors Panama', agent_phone: '', agent_email: 'info@opendoorspanama.com',
    source: 'Open Doors Panama', created_at: '2024-05-01'
  },

  // ══════════════════════════════════════════════════════════
  // HERMITAGE HILLS
  // ══════════════════════════════════════════════════════════
  {
    id: '25', title: 'Hermitage Hills — Roble Villa',
    description: '3BD/3.5BA, 485 m² on 1,054 m² lot. Turnkey ocean view. Gated, 24/7 security.',
    type: 'house', status: 'for_sale', price: 740000, currency: 'USD',
    size_sqm: 485, land_size_sqm: 1054, bedrooms: 3, bathrooms: 3, year_built: 2023,
    lat: 7.4495, lng: -80.1845, address: 'Hermitage Hills, Playa Venao',
    images: ['https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800'],
    agent_name: 'Stay in Venao', agent_phone: '+507 6511-7166', agent_email: 'info@stayinvenao.com',
    source: 'Stay in Venao / Casa Solution', created_at: '2024-02-01'
  },
  {
    id: '26', title: 'Hermitage Hills — Caoba Villa',
    description: '3BD/3.5BA, 210 m² on 700 m² lot. Turnkey ocean view.',
    type: 'house', status: 'for_sale', price: 500000, currency: 'USD',
    size_sqm: 210, land_size_sqm: 700, bedrooms: 3, bathrooms: 3, year_built: 2023,
    lat: 7.4505, lng: -80.1855, address: 'Hermitage Hills, Playa Venao',
    images: ['https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800'],
    agent_name: 'Stay in Venao', agent_phone: '+507 6511-7166', agent_email: 'info@stayinvenao.com',
    source: 'Stay in Venao / Casa Solution', created_at: '2024-02-01'
  },

  // ══════════════════════════════════════════════════════════
  // VENAO HILLS / INLAND / FINCAS
  // ══════════════════════════════════════════════════════════
  {
    id: '27', title: 'Prime Ocean/Jungle View Lot — 8,000 m²',
    description: '8,000 m² titled land with ocean and jungle views. Utilities at lot line.',
    type: 'land', status: 'for_sale', price: 215000, currency: 'USD',
    size_sqm: 8000, land_size_sqm: 8000, lat: 7.4375, lng: -80.193, address: 'Venao Hills',
    images: ['https://images.unsplash.com/photo-1628624747186-a941c476b7ef?w=800'],
    agent_name: 'Panama Sovereign', agent_phone: '+507 6619-6669', agent_email: 'info@panamasovereign.com',
    source: 'Encuentra24', created_at: '2024-02-15'
  },
  {
    id: '28', title: 'Finca & Casa Papu — Tuscany-Style Villa',
    description: 'Tuscany-style villa on 7,455 m² land. 10 min from Venao. Tranquil setting.',
    type: 'house', status: 'for_sale', price: 0, currency: 'USD',
    size_sqm: 300, land_size_sqm: 7455, bedrooms: 3, bathrooms: 2,
    lat: 7.439, lng: -80.197, address: 'Near Playa Venao',
    notes: 'Price on request. Listed by Love Your Land Panama.',
    images: ['https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800'],
    agent_name: 'Love Your Land Panama', agent_phone: '', agent_email: 'info@loveyourlandpanama.com',
    source: 'Love Your Land', created_at: '2024-06-01'
  },
  {
    id: '29', title: 'Eco Lodge — Operating Business',
    description: 'Operating eco-lodge with 8 rooms, restaurant, yoga deck. Strong bookings.',
    type: 'commercial', status: 'for_sale', price: 1800000, currency: 'USD',
    size_sqm: 800, land_size_sqm: 3000, lat: 7.4358, lng: -80.201, address: 'Playa Venao Inland',
    images: ['https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800'],
    agent_name: 'Panama Equity', agent_phone: '+507 6000-0002', agent_email: 'info@panamaequity.com',
    source: 'Panama Equity', created_at: '2024-01-10'
  },
  {
    id: '30', title: 'New Construction — Mountain View Villa',
    description: 'Under construction: 4BD villa with infinity pool, 180° views. Q3 2025.',
    type: 'house', status: 'under_construction', price: 950000, currency: 'USD',
    size_sqm: 350, land_size_sqm: 1200, bedrooms: 4, bathrooms: 3, year_built: 2025,
    lat: 7.438, lng: -80.1895, address: 'Venao Heights',
    images: ['https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800'],
    agent_name: 'Aura Real Estate', agent_phone: '+507 6000-0000', agent_email: 'info@aurarealestate.com',
    source: 'Aura Real Estate', created_at: '2024-06-15'
  },

  // ══════════════════════════════════════════════════════════
  // ROAD TO VENAO (18 Ha Farm, Res/Commercial lot)
  // ══════════════════════════════════════════════════════════
  {
    id: '31', title: '18 Hectares — Main Road to Venao',
    description: '181,404 m² farm/development land with structures on the main road to Playa Venao.',
    type: 'land', status: 'for_sale', price: 540000, currency: 'USD',
    size_sqm: 181404, land_size_sqm: 181404, lat: 7.445, lng: -80.185, address: 'Main Road to Playa Venao',
    images: ['https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800'],
    agent_name: 'Panama Properties', agent_phone: '+507 6169-2453', agent_email: 'info@panama-properties.com',
    source: 'Panama Properties', created_at: '2024-09-01'
  },
  {
    id: '32', title: 'Res/Commercial Lot — Road to Venao',
    description: '35,000 m² (8.65 acres) on road to Playa Venao. Residential or commercial use.',
    type: 'land', status: 'for_sale', price: 350000, currency: 'USD',
    size_sqm: 35000, land_size_sqm: 35000, lat: 7.45, lng: -80.18, address: 'Road to Playa Venao',
    images: ['https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800'],
    agent_name: 'Casa Solution', agent_phone: '+507 6000-0005', agent_email: 'info@casasolution.com',
    source: 'Casa Solution', created_at: '2024-05-01'
  },
  {
    id: '33', title: 'Development Land — 6,000 m² Road to Venao',
    description: '6,000 m² (1.48 acres) on road from Pedasi to Venao.',
    type: 'land', status: 'for_sale', price: 150000, currency: 'USD',
    size_sqm: 6000, land_size_sqm: 6000, lat: 7.455, lng: -80.16, address: 'Pedasi-Venao Road',
    images: ['https://images.unsplash.com/photo-1628624747186-a941c476b7ef?w=800'],
    agent_name: 'Casa Solution', agent_phone: '+507 6000-0005', agent_email: 'info@casasolution.com',
    source: 'Casa Solution', created_at: '2024-07-01'
  },

  // ══════════════════════════════════════════════════════════
  // CAÑAS AREA
  // ══════════════════════════════════════════════════════════
  {
    id: '34', title: 'Oceanview Villa — Cañas (between Venao & Cañas)',
    description: '4BD/4BA, 323 m² on 6,552 m² lot. Built 2023. Infinity pool, ocean views.',
    type: 'house', status: 'for_sale', price: 1400000, currency: 'USD',
    size_sqm: 323, land_size_sqm: 6552, bedrooms: 4, bathrooms: 4, year_built: 2023,
    lat: 7.4405, lng: -80.175, address: 'Between Venao & Cañas',
    images: ['https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800'],
    agent_name: 'Le Figaro Properties', agent_phone: '+507 6000-0003', agent_email: 'info@lefigaro.com',
    source: 'Le Figaro', created_at: '2024-03-10'
  },
  {
    id: '35', title: 'New 3BD Home — Cañas',
    description: '3BD/3BA, 166 m², single floor. New construction near Playa Venao.',
    type: 'house', status: 'for_sale', price: 250000, currency: 'USD',
    size_sqm: 166, land_size_sqm: 500, bedrooms: 3, bathrooms: 3,
    lat: 7.442, lng: -80.173, address: 'Cañas, near Playa Venao',
    images: ['https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800'],
    agent_name: 'Panama Properties', agent_phone: '+507 6169-2453', agent_email: 'info@panama-properties.com',
    source: 'Panama Properties', created_at: '2024-06-01'
  },
  {
    id: '36', title: 'Luxury House — Sanctuary Gardens, Cañas',
    description: '285 m² on 5,400 m² in Sanctuary Gardens. Ocean views.',
    type: 'house', status: 'for_sale', price: 750000, currency: 'USD',
    size_sqm: 285, land_size_sqm: 5400, bedrooms: 3, bathrooms: 3, year_built: 2022,
    lat: 7.443, lng: -80.172, address: 'Sanctuary Gardens, Cañas',
    images: ['https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800'],
    agent_name: 'Stay in Venao', agent_phone: '+507 6511-7166', agent_email: 'info@stayinvenao.com',
    source: 'Encuentra24', created_at: '2024-02-01'
  },
  {
    id: '37', title: 'Prime Ocean View Development Land — Cañas',
    description: '10,000 m² ocean view development land. Road access.',
    type: 'land', status: 'for_sale', price: 379000, currency: 'USD',
    size_sqm: 10000, land_size_sqm: 10000, lat: 7.444, lng: -80.171, address: 'Cañas',
    images: ['https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800'],
    agent_name: 'Panama Properties', agent_phone: '+507 6169-2453', agent_email: 'info@panama-properties.com',
    source: 'Panama Properties', created_at: '2024-08-01'
  },
  {
    id: '38', title: 'Sea View Lots — Cañas del Sol',
    description: '6,133 m² estate lot (subdividable). Asphalt road, private access.',
    type: 'land', status: 'for_sale', price: 250000, currency: 'USD',
    size_sqm: 6133, land_size_sqm: 6133, lat: 7.4445, lng: -80.17, address: 'Cañas del Sol',
    images: ['https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800'],
    agent_name: 'Panama Sovereign', agent_phone: '+507 6619-6669', agent_email: 'info@panamasovereign.com',
    source: 'Encuentra24', created_at: '2024-04-01'
  },
  {
    id: '39', title: 'Land — Corotu Village, Cañas',
    description: '17,794 m² prime lot with utilities near Corotu Village.',
    type: 'land', status: 'for_sale', price: 1068000, currency: 'USD',
    size_sqm: 17794, land_size_sqm: 17794, lat: 7.446, lng: -80.169, address: 'Corotu Village, Cañas',
    images: ['https://images.unsplash.com/photo-1628624747186-a941c476b7ef?w=800'],
    agent_name: 'Panama Sovereign', agent_phone: '+507 6619-6669', agent_email: 'info@panamasovereign.com',
    source: 'Encuentra24', created_at: '2024-03-20'
  },
  {
    id: '40', title: 'Mega Estate — Cañas Hilltop',
    description: '50,000 m² luxury sea view estate. Largest available in Cañas.',
    type: 'house', status: 'for_sale', price: 4480000, currency: 'USD',
    size_sqm: 500, land_size_sqm: 50000, bedrooms: 5, bathrooms: 5, year_built: 2021,
    lat: 7.447, lng: -80.168, address: 'Cañas Hilltop',
    images: ['https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800'],
    agent_name: 'Le Figaro Properties', agent_phone: '+507 6000-0003', agent_email: 'info@lefigaro.com',
    source: 'Encuentra24', created_at: '2024-01-20'
  },
  {
    id: '41', title: 'Ocean View Prime Property — Cañas',
    description: 'Premium ocean view lot. Listed November 2024.',
    type: 'land', status: 'for_sale', price: 575000, currency: 'USD',
    size_sqm: 4000, land_size_sqm: 4000, lat: 7.4415, lng: -80.176, address: 'Cañas',
    images: ['https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800'],
    agent_name: 'Stay in Venao', agent_phone: '+507 6511-7166', agent_email: 'info@stayinvenao.com',
    source: 'Stay in Venao', created_at: '2024-11-01'
  },
  {
    id: '42', title: 'Titled Lots — Cañas (from $35K!)',
    description: 'Most affordable titled lots in the area. Utilities ready. Minutes from Venao.',
    type: 'land', status: 'for_sale', price: 35000, currency: 'USD',
    size_sqm: 500, land_size_sqm: 500, lat: 7.4425, lng: -80.174, address: 'Cañas',
    notes: 'Starting at $35K — cheapest titled lots near Venao',
    images: ['https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800'],
    agent_name: 'Circa Panama', agent_phone: '+507 6169-2453', agent_email: 'info@circapanama.com',
    source: 'Circa Panama / Panama Sovereign', created_at: '2024-10-01'
  },
  {
    id: '43', title: 'Oceanview Lot — Cañas ($250K)',
    description: 'Sunset and surf access. Premium ocean view.',
    type: 'land', status: 'for_sale', price: 250000, currency: 'USD',
    size_sqm: 3000, land_size_sqm: 3000, lat: 7.441, lng: -80.177, address: 'Cañas',
    images: ['https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800'],
    agent_name: 'Circa Panama', agent_phone: '+507 6169-2453', agent_email: 'info@circapanama.com',
    source: 'Circa Panama', created_at: '2024-09-01'
  },
  {
    id: '44', title: 'Sereno de Cañas — 6 Lots ($30/m²)',
    description: '6 flat lots, 800-1,202 m² each (total 5,777 m²). 10 min from Venao. Electricity ready.',
    type: 'land', status: 'for_sale', price: 30, currency: 'USD',
    size_sqm: 5777, land_size_sqm: 5777, lat: 7.4435, lng: -80.1745, address: 'Sereno de Cañas',
    notes: '$30/m² — 6 lots from $24K to $36K each. Dig well for water.',
    images: ['https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800'],
    agent_name: 'Love Your Land Panama', agent_phone: '', agent_email: 'info@loveyourlandpanama.com',
    source: 'Love Your Land', created_at: '2025-09-09'
  },
  {
    id: '45', title: 'Riverhome — Off-Grid Sanctuary, Cañas',
    description: 'Off-grid riverfront nature sanctuary in Cañas.',
    type: 'house', status: 'for_sale', price: 0, currency: 'USD',
    size_sqm: 200, land_size_sqm: 5000,
    lat: 7.4455, lng: -80.1695, address: 'Cañas Riverside',
    notes: 'Price on request. Love Your Land Panama.',
    images: ['https://images.unsplash.com/photo-1499793983394-12903e570d0b?w=800'],
    agent_name: 'Love Your Land Panama', agent_phone: '', agent_email: 'info@loveyourlandpanama.com',
    source: 'Love Your Land', created_at: '2024-07-01'
  },

  // ══════════════════════════════════════════════════════════
  // LOS POZOS (inland)
  // ══════════════════════════════════════════════════════════
  {
    id: '46', title: '5 Hectares — Los Pozos Ocean View',
    description: '50,009 m² with ocean views. 14 min from beach. Incredible value.',
    type: 'land', status: 'for_sale', price: 129000, currency: 'USD',
    size_sqm: 50009, land_size_sqm: 50009, lat: 7.45, lng: -80.2, address: 'Los Pozos',
    images: ['https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800'],
    agent_name: 'Panama Properties', agent_phone: '+507 6169-2453', agent_email: 'info@panama-properties.com',
    source: 'Panama Properties', created_at: '2024-03-01'
  },
  {
    id: '47', title: '109 Hectares — Mega Land',
    description: '109 hectares near Venao. Massive development opportunity.',
    type: 'land', status: 'for_sale', price: 400000, currency: 'USD',
    size_sqm: 1090000, land_size_sqm: 1090000, lat: 7.455, lng: -80.205, address: 'Near Playa Venao',
    images: ['https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800'],
    agent_name: 'Love Your Land Panama', agent_phone: '', agent_email: 'info@loveyourlandpanama.com',
    source: 'Love Your Land', created_at: '2024-08-01'
  },

  // ══════════════════════════════════════════════════════════
  // CAMBUTAL (west)
  // ══════════════════════════════════════════════════════════
  {
    id: '48', title: 'Beachfront Lot — Cambutal',
    description: 'Rare beachfront lot in quiet Cambutal. 3,000 m², titled.',
    type: 'land', status: 'for_sale', price: 180000, currency: 'USD',
    size_sqm: 3000, land_size_sqm: 3000, lat: 7.42, lng: -80.235, address: 'Playa Cambutal',
    images: ['https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800'],
    agent_name: 'Tropic Lands', agent_phone: '+507 6000-0004', agent_email: 'info@tropiclandspanama.com',
    source: 'Tropic Lands', created_at: '2024-06-01'
  },
  {
    id: '49', title: 'Eco Cabin — Cambutal Jungle',
    description: '2BD off-grid eco cabin on 5,000 m². Solar powered. 10 min walk to beach.',
    type: 'house', status: 'for_sale', price: 275000, currency: 'USD',
    size_sqm: 100, land_size_sqm: 5000, bedrooms: 2, bathrooms: 1, year_built: 2021,
    lat: 7.423, lng: -80.23, address: 'Cambutal Jungle',
    images: ['https://images.unsplash.com/photo-1499793983394-12903e570d0b?w=800'],
    agent_name: 'Casa Solution', agent_phone: '+507 6000-0005', agent_email: 'info@casasolution.com',
    source: 'Casa Solution', created_at: '2024-04-15'
  },

  // ══════════════════════════════════════════════════════════
  // PEDASI TOWN & BETWEEN
  // ══════════════════════════════════════════════════════════
  {
    id: '50', title: 'Colonial House — Pedasi Center',
    description: '3BD renovated colonial house. Walkable to restaurants and shops.',
    type: 'house', status: 'for_sale', price: 320000, currency: 'USD',
    size_sqm: 180, land_size_sqm: 400, bedrooms: 3, bathrooms: 2, year_built: 1985,
    lat: 7.527, lng: -80.027, address: 'Pedasi Town Center',
    images: ['https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800'],
    agent_name: 'Casa Solution', agent_phone: '+507 6000-0005', agent_email: 'info@casasolution.com',
    source: 'Casa Solution', created_at: '2024-07-01'
  },
  {
    id: '51', title: 'Farmland — 10 Ha, Between Venao & Pedasi',
    description: '100,000 m² rolling hills with ocean glimpses. Potential subdivision.',
    type: 'land', status: 'for_sale', price: 450000, currency: 'USD',
    size_sqm: 100000, land_size_sqm: 100000, lat: 7.47, lng: -80.12, address: 'Between Venao & Pedasi',
    images: ['https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800'],
    agent_name: 'Panama Sovereign', agent_phone: '+507 6619-6669', agent_email: 'info@panamasovereign.com',
    source: 'Panama Sovereign', created_at: '2024-02-10'
  },
  {
    id: '52', title: 'Ocean View Lot — Sold 2024',
    description: '1,005 m² ocean view lot near beach. Sold.',
    type: 'land', status: 'sold', price: 150000, currency: 'USD',
    size_sqm: 1005, land_size_sqm: 1005, lat: 7.433, lng: -80.1965, address: 'Playa Venao',
    owner: 'Unknown buyer', purchase_date: '2024',
    images: ['https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800'],
    agent_name: 'Tropic Lands', agent_phone: '+507 6000-0004', agent_email: 'info@tropiclandspanama.com',
    source: 'Tropic Lands', created_at: '2023-01-01'
  },

  // ══════════════════════════════════════════════════════════
  // VILLA MARINA LODGE & CONDOS
  // ══════════════════════════════════════════════════════════
  {
    id: '53', title: 'Villa Marina Lodge & Condos — Operating Hotel',
    description: 'Beachfront hotel & condo complex. 7.5 acres. Hotel rooms + furnished condos (109-181 m²). Infinity pool, restaurant. Managed by VerdeAzul Hotels.',
    type: 'commercial', status: 'rented', price: 0, currency: 'USD',
    size_sqm: 3000, land_size_sqm: 30000, lat: 7.42599, lng: -80.18553, address: 'Playa Venao Beachfront',
    owner: 'VerdeAzul Hotels', notes: 'Website: villamarina.com.pa. 6 low-density condo buildings. Condos from $630K.',
    images: ['https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800'],
    agent_name: 'Villa Marina / Open Doors Panama', agent_phone: '+507 307-0243', agent_email: 'reservations@villamarina.com.pa',
    source: 'villamarina.com.pa', created_at: '2021-01-01'
  },
  {
    id: '54', title: 'Villa Marina — 2BD Ocean View Condo',
    description: '2-bedroom ocean view condo, 109 m². Fully furnished. Part of Villa Marina complex.',
    type: 'condo', status: 'for_sale', price: 450000, currency: 'USD',
    size_sqm: 109, bedrooms: 2, bathrooms: 2, year_built: 2021,
    lat: 7.4261, lng: -80.1854, address: 'Villa Marina, Playa Venao',
    images: ['https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800'],
    agent_name: 'Open Doors Panama', agent_phone: '', agent_email: 'info@opendoorspanama.com',
    source: 'villamarina.com.pa', created_at: '2024-06-01'
  },
  {
    id: '55', title: 'Villa Marina — 3BD Beachfront Condo ($630K)',
    description: '3BD/2BA beachfront condo, 180 m². Fully furnished, turnkey. Built 2021. Strong rental history.',
    type: 'condo', status: 'for_sale', price: 630000, currency: 'USD',
    size_sqm: 180, bedrooms: 3, bathrooms: 2, year_built: 2021,
    lat: 7.4259, lng: -80.18565, address: 'Villa Marina, Playa Venao',
    images: ['https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800'],
    agent_name: 'Open Doors Panama', agent_phone: '', agent_email: 'info@opendoorspanama.com',
    source: 'Open Doors Panama', created_at: '2024-05-01'
  },

  // ══════════════════════════════════════════════════════════
  // MOLEDET — Israeli Community Developers
  // ══════════════════════════════════════════════════════════
  {
    id: '56', title: 'Panorama by Moledet — Hilltop Townhomes',
    description: 'MAJOR PROJECT: Premium townhomes, hotels & restaurants on the hills above Playa Venao. Israeli community developers. World-class amenities.',
    type: 'house', status: 'under_construction', price: 0, currency: 'USD',
    size_sqm: 5000, land_size_sqm: 30000, lat: 7.436, lng: -80.195, address: 'Hills above Playa Venao',
    owner: 'Moledet', notes: 'moledet.com.pa — Israeli founders living in Venao. Targeting premium investors. Hilltop development crowning the beach area.',
    images: ['https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800'],
    agent_name: 'Moledet', agent_phone: '', agent_email: '',
    source: 'moledet.com.pa', created_at: '2025-01-01'
  },
  {
    id: '57', title: 'Terra Nova by Moledet — Community Center',
    description: 'MAJOR PROJECT: Sport center, school, commercial areas. The community foundation for the new era of Playa Venao. Minutes from beach.',
    type: 'commercial', status: 'under_construction', price: 0, currency: 'USD',
    size_sqm: 10000, land_size_sqm: 50000, lat: 7.44, lng: -80.19, address: 'Inland near Playa Venao',
    owner: 'Moledet', notes: 'moledet.com.pa — School, sports, commercial. For the growing international community. Calm area few minutes from beach.',
    images: ['https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800'],
    agent_name: 'Moledet', agent_phone: '', agent_email: '',
    source: 'moledet.com.pa', created_at: '2025-01-01'
  },

  // ══════════════════════════════════════════════════════════
  // THE POINT — Dekel Development Group ($120M project)
  // ══════════════════════════════════════════════════════════
  {
    id: '58', title: 'The Point — Beachfront Luxury Development ($120M)',
    description: 'FLAGSHIP PROJECT: 160,500 m² (39.7 acres) beachfront. 80 villas + 50-key boutique hotel. By Dekel Group (creators of Selina). Architect: George Moreno. Builder: Grupo Céspedes. Investment lead: Ohad Landau (ex-Harel, $4B track record).',
    type: 'commercial', status: 'under_construction', price: 68600000, currency: 'USD',
    size_sqm: 160500, land_size_sqm: 160500,
    lat: 7.4310, lng: -80.1875, address: 'East Side, Playa Venao Beach',
    owner: 'Dekel Development Group (Rafi & Daniel)',
    notes: 'Finca #21469. Land cost $10.16M (49% below $20M appraisal). $67/m² beachfront vs $500-1500 in Costa Rica. 30 beachfront villas @$5,000/m² + 50 second-line @$4,200/m². Hotel: 50 rooms, $400 ADR, $17M exit. Equity raise $12.4M, 8% per $1M. IRR 20-41%. Construction starts after 50% pre-sales. Blue Venao validated: $100M cumulative sales, $1.5M/month.',
    images: ['https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800'],
    agent_name: 'Dekel Group (Rafi & Daniel)', agent_phone: '', agent_email: '',
    source: 'THE-POINT OPPORTUNITY 09.02.pdf', created_at: '2026-02-09'
  },

  // ══════════════════════════════════════════════════════════
  // CÓSMICA (Venao Gardens) — Green Ace Development
  // ══════════════════════════════════════════════════════════
  {
    id: '59', title: 'Cósmica - Venao Gardens',
    description: 'Phase 1: 7ha, 5 villas + 25 apartments + boutique hotel. Architect: Gensler. Total buildout: 40ha. Ridgeline above Venao Bay with 360° Pacific + jungle views.',
    type: 'development', status: 'pre_sale', price: 0, currency: 'USD',
    size_sqm: 70000, land_size_sqm: 400000,
    lat: 7.438, lng: -80.195, address: 'Ridgeline above Venao Bay',
    owner: 'Green Ace Development',
    notes: 'Phase 0: 30 apts + commercial. Phase 1: 5 villas + 25 apts. Phase 2: 20 villas + 2,000m² commercial. Future: +26 Ha. All lots min 2,000m². Hilltop with 360° views. Design: Gensler. Projected: $100-400/m² now → $600-1200/m² by 2040.',
    images: ['https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800'],
    agent_name: 'Green Ace (Aviad & Omri)', agent_phone: '', agent_email: '',
    source: 'Green Ace / Cósmica', created_at: '2026-02-15'
  },
];

export const statusColors: Record<string, string> = {
  for_sale: '#2E7D32',
  for_rent: '#1565C0',
  under_construction: '#E65100',
  sold: '#C62828',
  rented: '#757575',
  pre_sale: '#7B1FA2',
};

export const statusLabels: Record<string, string> = {
  for_sale: 'For Sale',
  for_rent: 'For Rent',
  under_construction: 'Under Construction',
  sold: 'Sold',
  rented: 'Operating / Not for Sale',
  pre_sale: 'Pre-Sale',
};

export const typeLabels: Record<string, string> = {
  land: 'Land',
  house: 'House',
  condo: 'Condo',
  commercial: 'Commercial',
  development: 'Development',
};

export function formatPrice(price: number): string {
  if (price === 0) return 'Price on Request';
  if (price < 100) return `$${price}/m²`;
  if (price >= 1000000) return `$${(price / 1000000).toFixed(1)}M`;
  if (price >= 1000) return `$${(price / 1000).toFixed(0)}K`;
  return `$${price}`;
}
