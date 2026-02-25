# RESEARCH INTELLIGENCE — Playa Venao Real Estate Platform

*Compiled: 2026-02-25 | Status: v1 — Search API was down, report based on direct source fetches + domain expertise. Flag items marked ⚠️ for follow-up verification.*

---

## 1. Panama Property Records (How to Access)

### Registro Público de Panamá
- **Website:** https://www.registro-publico.gob.pa (was unreachable during research — site intermittently available)
- **What it is:** Panama's Public Registry — the official record of all titled property (fincas), corporations (sociedades anónimas), liens, mortgages, and encumbrances
- **Online search:** The registry offers a digital consultation system ("consulta en línea") where you can search by:
  - **Finca number** (property ID) — the primary lookup key
  - **Owner name** (persona natural o jurídica)
  - **Corporation name** (sociedad anónima — many properties are held in SAs)
- **Finca number format:** `Finca [Number], Rollo [Number], Documento [Number]` — each province has its own sequence. Los Santos province fincas are in a separate registry section.
- **What you can find:**
  - Current owner (titleholder)
  - Chain of ownership (historical transfers)
  - Mortgages and liens (hipotecas, gravámenes)
  - Annotations (anotaciones) — pending legal actions
  - Property description (boundaries, area in hectares/m²)
- **Cost:** Basic searches are free online. Certified copies require fees (~$5-15 USD)
- **Limitations:** The online system is notoriously slow, often down, and doesn't have great UX. Complex searches often require visiting in person or hiring a local lawyer.

### ANATI (Autoridad Nacional de Administración de Tierras)
- **Website:** https://www.anati.gob.pa
- **What it is:** Panama's national land administration authority — handles cadastral maps, land surveys, and titling programs
- **Catastro (Cadastral) data:** ANATI maintains the national cadastral registry with parcel boundaries, but **digital access is extremely limited**
- **GIS/Maps:** ANATI has been working on digitizing cadastral maps, but as of 2025-2026:
  - No public-facing GIS portal with searchable parcel boundaries
  - Physical maps exist at regional ANATI offices
  - Some limited data may be available via formal requests (solicitudes de información)
- **Key programs:** PRONAT (Programa Nacional de Administración de Tierras) — a World Bank-funded titling program that has been digitizing records, but coverage is incomplete

### Finca Numbers — How They Work
- A **finca** is a registered property parcel in Panama's Public Registry
- Each titled property has a unique finca number within its province
- Format: Province + Finca Number (e.g., "Finca 12345, Provincia de Los Santos")
- **How to look up:** Go to Registro Público website → Consulta de Fincas → Enter province (Los Santos) + finca number
- Properties held in **Sociedades Anónimas** (corporations): Look up the SA first, then find which fincas it owns

### ROP (Rights of Possession) vs Titled Land
- **Titled land (Propiedad Titulada):** Registered in the Registro Público with a finca number. Full legal ownership with clear chain of title.
- **Rights of Possession (Derechos Posesorios / ROP):** NOT in the Registro Público. The occupant has recognized usage rights but no formal title. Common in rural Panama including parts of the Azuero Peninsula near Venao.
- **How to distinguish:**
  - If it has a finca number → titled
  - If it only has an "acta de posesión" or community recognition → ROP
  - ROP land can be converted to titled land through ANATI's adjudication process (can take 1-3+ years)
- **Risk:** ROP is riskier for buyers — boundaries are less certain, disputes can arise, and banks won't lend against ROP land
- **Relevance to Venao:** Significant portions of land around Playa Venao are ROP, especially hillside and inland parcels. Beachfront developments tend to be titled.

---

## 2. Best Reference Platforms (Worldwide)

### Tier 1 — US Parcel Data Platforms (Gold Standard UX)

| Platform | What They Do | Data Source | Key Features |
|----------|-------------|-------------|--------------|
| **Regrid** (regrid.com) | Comprehensive parcel data for US & Canada | County assessor records, FIPS data, partnerships with Esri | Parcel boundaries as vector tiles, ownership data, API access, enterprise licensing. "The world is made of parcels" — they get it. |
| **OnX Maps** (onxmaps.com) | Property boundaries on satellite maps | County GIS, BLM, USFS data | Beautiful mobile app, offline maps, landowner info. Originally for hunters but expanding to real estate. |
| **LandGlide** | Parcel boundary maps on mobile | County assessor/GIS data | Tap any parcel to see owner, address, value. Simple UX. |
| **PropStream** (propstream.com) | Real estate investor intelligence | MLS, county records, mortgage data | Lead generation, comps, skip tracing, predictive analytics. $99/mo. US-only. |
| **Reonomy** | Commercial real estate intelligence | County records, SEC filings, business data | AI-powered ownership networks, building data, debt info. Enterprise pricing. |
| **DealMachine** | Driving-for-dollars real estate | County records + user-generated | Photograph a property → instant owner lookup + direct mail. Clever UX. |

### Tier 2 — Emerging Market / Latin America

| Platform | Market | Notes |
|----------|--------|-------|
| **Batdongsan.com.vn** | Vietnam | Largest property portal in Vietnam. Listings-based, not parcel-intelligence. Good example of emerging market adoption. |
| **Properati** | Latin America (Argentina, Colombia, Ecuador, Peru) | Property listings aggregator for LatAm. No parcel boundaries. |
| **Inmuebles24 / Encuentra24** | Mexico, Central America | Listings portals. Encuentra24 is the biggest in Panama. No GIS/parcel features. |
| **LaHaus** | Colombia, Mexico | PropTech startup with map-based search. Closest LatAm comparison but listings-only. |

### Key Insight
**Nobody is doing parcel-level intelligence in Panama or Central America.** This is a massive whitespace opportunity. The US platforms get their data from county assessor offices that publish digital records — Panama doesn't have that infrastructure yet. Whoever builds the first parcel map for Venao/Azuero creates the definitive data layer.

### How US Platforms Get Data
1. **County assessor offices** — public records, often available as bulk downloads or APIs
2. **FOIA requests** — for GIS shapefiles of parcel boundaries
3. **Partnerships with GIS vendors** (Esri, etc.)
4. **Web scraping** of county recorder sites
5. **Manual digitization** of paper maps (early-stage, for incomplete counties)
6. **User-generated data** (DealMachine's crowd-sourced photos)

---

## 3. GIS & Parcel Data Sources (Panama)

### Official Sources (Limited)
- **ANATI cadastral maps:** Exist on paper and partially digitized, but NOT publicly available as downloads or APIs
- **INEC (Instituto Nacional de Estadística y Censo):** Census boundary data (corregimientos, distritos) available — not parcel-level
- **MiAmbiente (Ministry of Environment):** Some environmental/protected area GIS layers available
- **Tommy Guardia Geographic Institute (IGNTG):** National mapping authority — topographic maps, some available digitally

### OpenStreetMap (OSM)
- **Panama coverage:** Roads and major features are reasonably well-mapped
- **Building footprints:** SPARSE in rural areas like Venao. Urban Panama City has decent coverage.
- **How to check:** https://www.openstreetmap.org/#map=15/7.4297/-80.1650 (Playa Venao area)
- **Can we get building footprints?** Some exist but very incomplete. Would need manual tracing or AI extraction from satellite imagery.
- **Overpass API** can query existing OSM data for the Venao bounding box

### Satellite Imagery APIs
| Provider | Resolution | Cost | API Available |
|----------|-----------|------|---------------|
| **Mapbox** | Up to 0.5m (via Maxar) | Free tier generous, then per-tile | Yes — Mapbox GL JS, excellent for web maps |
| **Google Maps/Earth** | 0.15-0.5m | $200/mo free credit, then per-load | Yes — but ToS restrict caching/tracing |
| **Esri/ArcGIS** | Varies (Maxar, Airbus) | Free for developers, enterprise pricing | Yes — ArcGIS Online, Living Atlas |
| **Planet Labs** | 3-5m daily, 0.5m tasked | Paid, academic programs available | Yes — Planet API |
| **Microsoft Planetary Computer** | Sentinel-2 (10m), building footprints | FREE | Yes — global building footprint dataset |

### Microsoft Building Footprints — KEY RESOURCE 🔑
- Microsoft released **AI-extracted building footprints for the entire world** including Panama
- Available as free GeoJSON downloads: https://github.com/microsoft/GlobalMLBuildingFootprints
- This could give us building outlines for Venao area immediately
- Quality varies but it's a strong starting point

### ESRI Living Atlas
- Regrid provides free US parcel boundary tiles through Esri's Living Atlas
- For Panama: demographic layers, terrain, land cover data available
- No parcel boundaries for Panama exist in any Esri public dataset

---

## 4. How to Get Parcel Boundaries

### The Core Challenge
**No digital parcel boundary dataset exists for Playa Venao.** This is the hardest and most valuable piece of the platform. Here's how to build it:

### Option A: Official ANATI Data (Best but Slowest)
1. File a formal information request with ANATI regional office in Los Santos
2. Request digital cadastral maps for the corregimiento of Cañas (which includes Playa Venao)
3. May require in-person visit, fees, and persistence
4. Data may come as scanned PDFs of survey maps rather than GIS-ready files
5. **Timeline:** Weeks to months
6. **Quality:** Authoritative but possibly outdated

### Option B: Manual Digitization from Satellite Imagery
1. Use high-resolution satellite imagery (Mapbox/Google) as base layer
2. Manually trace visible property boundaries (fences, walls, roads, vegetation lines)
3. Cross-reference with known development site plans
4. Tools: QGIS (free), Mapbox Studio, or directly in Leaflet with drawing tools
5. **Timeline:** Days for initial version, ongoing refinement
6. **Quality:** Approximate — good for visual reference, not legally accurate
7. **Effort:** ~50-100 hours for comprehensive Venao area coverage

### Option C: Crowdsource from Developers/Surveyors
1. Contact local developers (Blue Venao, Sanctuary Gardens, etc.) — they ALL have survey maps of their developments
2. Contact local surveyors (agrimensores) — they have survey data in DWG/DXF format
3. Collect planos (site plans) from each development and digitize them
4. **Timeline:** Weeks (depends on relationships)
5. **Quality:** Very high for development areas, gaps for undeveloped land

### Option D: Hybrid Approach (Recommended) ⭐
1. Start with **Microsoft Building Footprints** for structure locations
2. Overlay **development site plans** from developer websites/marketing materials
3. Manually trace **major parcel boundaries** from satellite imagery
4. Request **ANATI cadastral data** in parallel
5. Refine over time with surveyor data and community contributions
6. Store everything as **GeoJSON polygons** in a PostGIS database

### GeoJSON + Leaflet Implementation
- **Leaflet.js** with **Leaflet.draw** plugin for interactive boundary editing
- Store parcels as GeoJSON FeatureCollection with properties: `{finca, owner, area_m2, type, status, source}`
- Tile layer: Mapbox Satellite for base imagery
- Vector overlay: GeoJSON parcels rendered with Leaflet or Mapbox GL JS
- Example libraries: `leaflet`, `leaflet-draw`, `turf.js` (spatial analysis), `mapbox-gl`

---

## 5. Transaction History

### Is Transaction Data Public in Panama?
- **Technically yes, practically difficult.** Property transfers are recorded in the Registro Público, but:
  - Prices are often **understated** in official records to minimize transfer taxes (2% of sale price)
  - Many properties are sold via **share transfers** of the holding SA — these DON'T appear as property transfers in the registry
  - No centralized MLS or transaction database like in the US
  - Historical pricing data is essentially non-existent in digital form

### How to Find Transaction Prices
1. **Registro Público:** Shows transfer date and declared value (often inaccurate — understated 30-70%)
2. **Real estate agents:** Local agents have informal records of recent sales
3. **Facebook groups:** People discuss prices openly in expat/investor groups
4. **Development price lists:** Developers publish lot/unit prices (most reliable for new construction)
5. **Encuentra24.com:** Listing prices (asking, not sold) — useful for market comps

### Building Our Own Transaction Database
- Scrape Encuentra24 listings for Playa Venao/Cañas area over time
- Track developer price sheets (archive them — prices change by phase)
- Community-contributed data (opt-in from buyers/sellers)
- Eventually: scrape Registro Público for transfers on known finca numbers

---

## 6. Facebook Groups & Communities

### Key Groups (Search manually — URLs need verification)
⚠️ *Search API was unavailable. These are known groups based on domain knowledge. Verify links and member counts manually.*

| Group Name | Est. Members | Focus |
|-----------|-------------|-------|
| **Playa Venao Community** | ~2-3K | General community, events, classifieds |
| **Playa Venao Surf & Beach Life** | ~1-2K | Surf community, lifestyle |
| **Expats in Panama** | ~50K+ | Broad expat community, real estate discussions |
| **Panama Real Estate Investors** | ~5-10K | Investment-focused, deals, market intel |
| **Azuero Peninsula Expats** | ~1-3K | Regional expat community |
| **Living in Panama (Expats)** | ~20K+ | General expat life, includes real estate |
| **Pedasi & Playa Venao** | ~1-2K | Pedasi-Venao corridor community |

### Other Community Intel Sources
- **Encuentra24.com** — Panama's largest classifieds site, property listings
- **Compreoalquile.com** — Real estate portal for Panama
- **Instagram:** #playavenao, #venao, #venaopanama — active community
- **WhatsApp groups** — Very common in Panama; local agents/developers run them (need personal intro)

---

## 7. Key Players Deep Dive

### Blue Venao
- **Website:** https://bluevenao.com ✅ (confirmed active)
- **What:** Beachfront residential community — condos, lofts, studios, mixed-use
- **Description:** "Gated beachfront community with full infrastructure, walkable access to the beach"
- **Product:** Ocean-facing condos, modern lofts, compact studios. Supports full-time living + short/mid-term rentals
- **Phases:** Inventory released in stages as community grows
- **Developer/Founder:** ⚠️ Need to research — not found on website homepage
- **Note:** This is one of the most active and professionally marketed developments in Venao

### Eco Venao
- **Website:** https://ecovenao.com ✅ (confirmed active)
- **What:** Eco-lodge + reforestation project — NOT primarily real estate development
- **Description:** Low-impact accommodations, from budget ($15/night) to luxury ($250/night)
- **Activities:** Surfing, yoga, horseback riding, turtle nursery, permaculture tours
- **Position:** One of the ORIGINAL establishments in Playa Venao. Located on the quiet side of the beach.
- **Founder/Owner:** ⚠️ Need to research — Israeli founders commonly cited in community
- **Relevance:** Major landholders and influential community members. They own significant acreage.

### Sanctuary Gardens Panama
- **Website:** https://sanctuarygardenspanama.com ✅ (confirmed active)
- **What:** Luxury villa community in Cañas, Panama (near Playa Venao)
- **Description:** "Exclusive beach community... sustainability meets serenity, multifaceted luxury villas"
- **Features:** Solar power, reforestation, water conservation — heavy sustainability branding
- **Target:** Families, multi-generational, healthy lifestyles
- **Developer:** ⚠️ Need to research founder/team

### Hermitage Hills (Playa Venao)
- **Note:** hermitagehills.com is a Baptist church in Tennessee — NOT the Venao development
- **The Venao development** likely has a different URL or is marketed through agents/social media
- ⚠️ Need to search for correct website and developer info

### Moledet Panama
- **Website:** moledet.com is PARKED (for sale on HugeDomains for $5,795)
- **What:** Previously a development project in the Venao/Cañas area
- **Status:** Appears inactive or rebranded. The domain being for sale suggests the project may have folded or changed names.
- ⚠️ Need to verify current status through community intel

### Corotu Village (Cañas)
- **Website:** corotu.com — unreachable
- **What:** Development in Cañas area near Playa Venao
- ⚠️ Need to research via social media / community

### Dekel Development Group
- **Website:** dekeldevelopmentgroup.com — DNS not found
- **What:** Reportedly a development group active in the Venao area
- **Status:** Possibly operating under different name or web presence
- ⚠️ Need to verify

### Aviad Ben Meir / Green Ace Panama
- **Website:** greenacepanama.com — DNS not found
- **What:** ⚠️ Need to research via LinkedIn / press
- **Note:** Many Venao developers have Israeli backgrounds — common pattern in the area

### Key Observation
Many of these developers have minimal or defunct web presence, which is typical for emerging market real estate. **The real intel is in Facebook groups, WhatsApp, and personal networks** — not corporate websites. This is exactly why a centralized intelligence platform would be so valuable.

---

## 8. Recommended Tech Stack for Our Platform

### Frontend (Map Interface)
- **Mapbox GL JS** — Best-in-class map rendering, satellite imagery, custom layers
  - Alternative: Leaflet.js (lighter, more hackable, huge plugin ecosystem)
- **React** or **Next.js** — Component-based UI
- **Turf.js** — Client-side spatial analysis (area calc, point-in-polygon, etc.)
- **Deck.gl** — For data-heavy visualizations if needed

### Backend
- **PostgreSQL + PostGIS** — The standard for geospatial data storage
- **GeoServer** or **pg_tileserv** — Serve vector tiles from PostGIS
- **Node.js / Express** or **Python / FastAPI** — API layer
- **Supabase** — Could accelerate development (Postgres + auth + real-time + storage)

### Data Pipeline
- **QGIS** — Desktop GIS for data preparation, format conversion, manual editing
- **ogr2ogr (GDAL)** — Command-line tool for converting between GIS formats
- **Python + GeoPandas** — Data processing scripts
- **Scrapers** (Puppeteer/Playwright) — For Encuentra24, Registro Público

### Hosting
- **Vercel** (frontend) + **Railway/Render** (backend/PostGIS)
- **Mapbox** account for satellite tiles and geocoding
- **Cloudflare R2** for GeoJSON file storage

### Data Formats
- **GeoJSON** — Primary interchange format for parcel boundaries
- **MVT (Mapbox Vector Tiles)** — For performant map rendering
- **PMTiles** — Single-file tile archive (great for static hosting)

---

## 9. Action Items — What We Need to Do Next

### Immediate (This Week)
1. **[ ] Download Microsoft Global Building Footprints** for Panama / Los Santos area
2. **[ ] Set up Mapbox account** and get satellite tile access for Venao area
3. **[ ] Create base map** with Mapbox GL JS showing Venao area + building footprints
4. **[ ] Collect developer site plans** from Blue Venao, Sanctuary Gardens, etc. (screenshots from websites)
5. **[ ] Set up PostGIS database** for parcel data storage

### Short-term (Next 2 Weeks)
6. **[ ] Manually trace 20-30 major parcels** from satellite imagery (known developments first)
7. **[ ] Build parcel info panel** — click a parcel → see details (owner if known, development name, area)
8. **[ ] Scrape Encuentra24** for active Venao/Cañas listings with prices
9. **[ ] Join Facebook groups** and start collecting community intel
10. **[ ] Contact ANATI Los Santos** office — request digital cadastral data for Cañas corregimiento

### Medium-term (Month 1-2)
11. **[ ] Build Registro Público scraper** — for known finca numbers, pull ownership and transfer history
12. **[ ] Contact local surveyors** in Pedasí/Venao area — they have the most accurate boundary data
13. **[ ] Create development profiles** for each key player with pricing, unit types, availability
14. **[ ] Add listing overlay** — show active for-sale/rent listings on the map
15. **[ ] Launch MVP** — even with partial data, be the first parcel map for Venao

### Long-term (Month 3+)
16. **[ ] Community contribution system** — let owners/agents add/correct parcel data
17. **[ ] Transaction tracking** — build historical price database from all sources
18. **[ ] Expand to Pedasí, Cambutal** — the broader Azuero coast
19. **[ ] API access** — let other tools/agents query our parcel data
20. **[ ] Mobile app** — tap-to-identify parcels on the ground (like OnX for Venao)

---

## Notes & Caveats

- **Search API (Perplexity) was returning 401 errors** during this research session. Many items marked ⚠️ need follow-up searches for verification.
- **Panama's data infrastructure is 10-15 years behind the US** — this is both the challenge and the opportunity
- **The biggest competitive advantage will be DATA, not technology** — whoever compiles the parcel/ownership dataset first wins
- **Community relationships matter more than scraping** — in small markets like Venao, personal connections unlock data that doesn't exist online
- **Legal consideration:** Verify that displaying property ownership data publicly is legally permissible in Panama. The data is "public" in the registry, but aggregating and displaying it could raise privacy concerns.
