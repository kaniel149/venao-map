# Competitive Analysis: Real Estate Mapping & Intelligence Platforms

*Last updated: 2026-02-25*

## Executive Summary

The real estate parcel/mapping intelligence space is dominated by US-focused platforms. **No competitor offers hyper-local property intelligence for Panama's Azuero Peninsula.** This is our gap to own.

---

## 1. US Parcel Data Platforms

### Regrid (formerly Loveland Technologies)
- **What:** Premium parcel boundary data for 155M+ US parcels, 100% US coverage
- **Data:** Parcel boundaries, ownership, addresses, building footprints, zoning, daily owner updates
- **Delivery:** API, bulk files (GeoJSON, Shapefile, GDB), SFTP, Esri Feature Service
- **Pricing:** Enterprise — starts at **$80K/year** for nationwide US data. Custom packages.
- **Partnership:** Esri for geographic enrichments
- **Expanding:** Claims "commitment to global expansion" (US & Canada currently)
- **Relevance to us:** Their data model (standardized parcel attributes + geographic enrichments) is the gold standard. We should emulate the schema locally.

### LandVision (by Digital Map Products / LightBox)
- **What:** Web-based GIS platform for commercial real estate, land development, energy
- **Data:** Parcel boundaries, ownership, zoning, environmental, demographics, transactions
- **Pricing:** Enterprise SaaS, typically **$5K-$20K/year** per seat
- **Relevance:** Shows how to layer multiple data types on a single map interface

### ParcelFact
- **What:** Quick parcel lookup tool for investors — find any property, its owner, and assessor data
- **Data:** 149M+ US properties, interactive Esri ArcGIS map, assessor data, owner/mailing addresses
- **Features:** Multiple map views (street, topo), KML export to Google Earth, boundary display
- **Pricing:** Subscription-based, affordable tier (~$10-50/mo for individual investors)
- **Created by:** Land Investors / House Academy community — built for land flippers
- **Relevance:** Closest to our use case — simple, investor-focused property lookup with map

### ParcelQuest
- **What:** California-focused parcel data provider
- **Data:** Assessor records, ownership, transaction history for CA counties
- **Pricing:** Per-search or subscription, ~$30-100/mo
- **Relevance:** Limited — shows regional specialization can work

---

## 2. Outdoor/Property Boundary Apps

### OnX Maps (Hunt / Offroad / Backcountry)
- **What:** Mobile-first map app originally for hunters — shows property boundaries, land ownership, public/private land
- **Products:** OnX Hunt, OnX Offroad, OnX Backcountry, OnX Fish
- **Key Features:**
  - Property boundary overlays on satellite imagery
  - Offline maps for remote areas
  - Owner name lookup on tap
  - Public vs private land coloring
  - GPS tracking & waypoints
- **Pricing:** ~$30/year per state, $100/year for all states (US only)
- **Tech:** Custom tile layers over satellite basemaps, mobile-native
- **Relevance:** **Best UX model for us.** Their tap-to-see-owner on a satellite map is exactly what Venao Map should feel like. But they're US-only and outdoor-recreation focused.

---

## 3. Real Estate Intelligence Platforms

### HouseCanary
- **What:** AI-powered residential real estate data & analytics platform + 50-state brokerage
- **Data:** Property valuations, CMAs, market forecasts, crime scores, block-level analytics
- **Users:** Top 6 of 10 SFR REITs and mortgage lenders
- **Key Features:** AI valuations, comparable adjustments, market forecasting, API
- **Pricing:** Enterprise — custom pricing, likely **$10K-100K+/year**
- **Relevance:** Shows the value of AI-driven property analytics. We could add AI valuation estimates for Venao properties.

### Reonomy
- **What:** Commercial real estate property intelligence platform
- **Data:** Title, assessor, geospatial, demographic data via partner network
- **Features:** Property search, owner lookup, deal sourcing, ML-powered data connections
- **Pricing:** Enterprise SaaS, ~**$100-500/mo** per seat
- **Relevance:** Their "connected data" approach (linking ownership, transactions, demographics) is aspirational for us

### Plunk
- **What:** Real-time home analytics platform — AI-driven financial analysis of US properties
- **Data:** Tracks 104M+ homes in real-time, valuations, remodel ROI predictions
- **Key Features:**
  - Dynamic home values updated continuously
  - Remodeled/future value predictions
  - Comparative analysis with neighborhood
  - API for integration
- **Pricing:** API-based, developer tiers available
- **Relevance:** Their "what would this property be worth if renovated" feature is compelling for Venao investors

---

## 4. Investor-Focused Tools

### DealMachine
- **What:** Mobile app for real estate investors — "driving for dollars" + lead generation
- **Key Features:**
  - Drive routes & tap distressed properties to add as leads
  - List Builder with 700+ data points, 70+ filters
  - Owner lookup + skip tracing (phone numbers)
  - Automated direct mail campaigns
  - MLS expired listings, foreclosures, vacancies, high-equity, absentee owners
- **Pricing:**
  - Starter: ~$49/mo
  - Pro: ~$99/mo
  - Teams: ~$249/mo
- **Relevance:** Their "drive and tap" UX is similar to what someone exploring Venao would want. The skip-tracing / owner contact info feature is highly valuable.

---

## 5. Panama-Specific Landscape

### Government Cadastral Sources
- **Catastro (MEF - Ministerio de Economía y Finanzas):** catastro.mef.gob.pa — **currently unreachable/offline**. Historically provided property tax records and some parcel data, but not a modern GIS platform.
- **ANATI (Autoridad Nacional de Administración de Tierras):** anati.gob.pa — Panama's land administration authority. Has geographic/cartographic data but **no public-facing parcel map viewer** accessible online. Data exists internally but is not digitized for public use in a modern way.
- **Registro Público de Panamá:** Property title records searchable by finca number, but no map interface. Manual lookups only.

### What Exists for Panama Real Estate
- **Encuentra24.com / Compreoalquile.com:** Listing portals with basic map pins, no parcel boundaries
- **Google Maps:** Satellite imagery decent for Azuero but zero parcel/ownership data
- **Local real estate agents:** Have knowledge but no digital tools — everything is word-of-mouth and manual registry lookups
- **No Panama-specific parcel mapping platform exists** comparable to US tools

### Data Format Reality in Panama
- Parcel boundaries are defined by **surveyor plans (planos)** filed with ANATI
- Each property has a **finca number** (registered at Registro Público) and a **catastral number**
- No public GeoJSON/Shapefile downloads available
- Boundaries must be **manually digitized** from surveyor plans, satellite imagery, or on-the-ground GPS surveys

---

## 6. PropTech in Latin America / Emerging Markets

### Notable Players
- **La Haus** (Colombia/Mexico): Real estate marketplace with some map features, focused on new developments
- **Habi** (Colombia/Mexico): AI-powered home buying/selling, valuations
- **Loft** (Brazil): Real estate marketplace with data analytics
- **Flat.mx** (Mexico): iBuyer model
- **Properati** (multi-LATAM): Listing aggregator with basic mapping

### Key Insight
LATAM PropTech is focused on **transaction facilitation** (buying/selling), not **parcel intelligence**. Nobody is building a Regrid or OnX for Latin America. The infrastructure gap is enormous — most countries lack digitized cadastral data.

---

## 7. How Competitors Display Parcel Boundaries

| Platform | Data Format | Map Base | Boundary Style |
|----------|------------|----------|---------------|
| Regrid | GeoJSON, Shapefile, GDB, Feature Service | Esri/Mapbox | Colored polygons with labels |
| OnX Maps | Vector tiles (custom) | Satellite + topo | Semi-transparent colored overlays |
| ParcelFact | Esri ArcGIS hosted | Esri basemaps (multiple) | Boundary outlines + fill on click |
| DealMachine | Proprietary | Google Maps / Mapbox | Pin markers + boundary on select |
| HouseCanary | API (GeoJSON) | Custom | Boundary + heat maps |

### Common Technical Stack
- **Basemap:** Mapbox GL JS or Google Maps API with satellite imagery
- **Parcel layer:** GeoJSON polygons served as vector tiles or via API
- **Interaction:** Click/tap polygon → info panel with owner, value, details
- **Overlays:** Zoning, flood zones, demographics, schools, etc.

---

## 8. Gap Analysis: What They Do That We Don't (Yet)

| Feature | Competitors | Venao Map |
|---------|------------|-----------|
| Parcel boundaries on map | ✅ All | 🔨 Building (manual digitization) |
| Owner name lookup | ✅ All | ✅ Via research |
| Tap-to-see-details | ✅ OnX, ParcelFact | 🔜 Planned |
| Transaction history | ✅ HouseCanary, Reonomy | ❌ Not yet |
| AI valuations | ✅ HouseCanary, Plunk | ❌ Not yet |
| Skip tracing (contact info) | ✅ DealMachine | ❌ Not yet |
| Offline maps | ✅ OnX | ❌ Not yet |
| Automated marketing | ✅ DealMachine | ❌ Not applicable |
| API access | ✅ Regrid, HouseCanary, Plunk | ❌ Not yet |
| Mobile app | ✅ OnX, DealMachine | ❌ Web only |

---

## 9. Our Unique Advantages

### What nobody else has:
1. **Hyper-local Venao/Azuero intelligence** — We know the area intimately. No US platform covers Panama at all.
2. **Ownership research network** — Direct relationships with local lawyers, Registro Público contacts, and community knowledge that no algorithm can replace.
3. **Cultural context** — Understanding of Panama property law (ROP, SAs, finca vs catastral), concessions, titled vs untitled land, indigenous territories.
4. **Boots-on-the-ground verification** — We can physically verify boundaries, current use, access roads, utilities.
5. **Surf/lifestyle intelligence** — Beach breaks, water access, sunset views, walking distance to amenities — things that matter to the Venao buyer.
6. **First mover in a data vacuum** — There is literally NO digital parcel intelligence for this region. We're building the dataset from scratch, which becomes our moat.

### Why this matters:
US platforms spent billions digitizing already-public county assessor data. In Panama, the data doesn't exist digitally. **Whoever builds the dataset first owns the market.**

---

## 10. Recommended Features to Add (Priority Order)

### Phase 1: Foundation (Now)
- ✅ Satellite basemap with parcel boundaries (GeoJSON polygons on Mapbox)
- ✅ Click-to-view property details (owner, finca #, size, status)
- 📋 Property profile pages with photos, notes, research status

### Phase 2: Intelligence Layer (Next)
- 🗺️ Multiple map layers (satellite, terrain, street)
- 📊 Comparable sales data (manual entry from known transactions)
- 🏷️ Property status tags (for sale, sold, under development, vacant)
- 📱 Mobile-responsive design (PWA before native app)
- 🔗 Link to Registro Público finca records

### Phase 3: Community & Scale (Later)
- 👤 User accounts with saved properties / watchlists
- 💰 Estimated value ranges (based on comparable sales + location factors)
- 🌊 Lifestyle scores (beach proximity, surf quality, road access, utilities)
- 📤 PDF property reports for investors
- 🔌 Expand to Pedasi, Cambutal, broader Azuero

### Phase 4: Platform (Future)
- 🤖 AI-assisted valuations trained on local transaction data
- 📲 Native mobile app with offline maps
- 🔍 Owner contact facilitation (with legal compliance)
- 🌎 API for partner integrations (real estate agencies, legal firms)
- 📈 Market trend analytics dashboard

---

## 11. Pricing Model Recommendations

Based on competitor analysis:

| Tier | Price | Features |
|------|-------|----------|
| **Free** | $0 | View map, see general area boundaries, limited details |
| **Explorer** | $19/mo | Full property details, owner info, 25 property views/mo |
| **Investor** | $49/mo | Unlimited views, comparable sales, PDF reports, saved lists |
| **Professional** | $149/mo | API access, bulk data, priority research requests |
| **Enterprise** | Custom | White-label, full dataset access, custom research |

---

## Key Takeaway

> **The biggest real estate data companies in the world (Regrid, HouseCanary, Reonomy) have ZERO coverage in Panama.** There is no competition here — only a massive information vacuum. Venao Map doesn't need to out-feature these platforms. It needs to **be the only platform** with this data. In emerging markets, the dataset IS the product.
