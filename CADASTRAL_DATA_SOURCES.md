# Cadastral & Parcel Boundary Data Sources for Playa Venao, Panama

**Research Date:** 2026-02-25
**Location:** Playa Venao, Corregimiento de Pedasi, Distrito de Pedasi, Provincia de Los Santos
**Coordinates:** ~7.44°N, -80.19°W

---

## ⚠️ KEY FINDING: No Public Cadastral Parcel Data Exists for Playa Venao

Panama's cadastral/parcel boundary data is **not publicly available** as downloadable GIS data. The Dirección de Catastro y Bienes Patrimoniales (under MEF - Ministerio de Economía y Finanzas) maintains the national cadastre, but does not publish parcel boundaries as open data, WMS services, or downloadable shapefiles.

**To get actual parcel boundaries, you must:**
1. Visit the Catastro office in person (Panama City or regional office)
2. Request certified planos (survey plans) for specific fincas (property numbers)
3. Hire a licensed Panamanian surveyor (agrimensor) who has access to the system
4. Use the ANATI (Autoridad Nacional de Tierras) office for title/boundary inquiries

---

## Available Data Sources (by usefulness)

### 1. ✅ Microsoft Building Footprints — AVAILABLE for Venao area
- **URL:** https://github.com/microsoft/GlobalMLBuildingFootprints
- **Format:** GeoJSON lines (compressed CSV with GeoJSON geometries)
- **Coverage:** Worldwide including Panama
- **Cost:** Free (ODbL license)
- **Quality:** ML-derived from satellite imagery (Maxar/Bing). Building outlines, NOT parcel boundaries.
- **Venao Quadkey:** `032221303` (zoom level 9)
- **Direct Download:** https://minedbuildings.z5.web.core.windows.net/global-buildings/2026-01-09/global-buildings.geojsonl/RegionName=Panama/quadkey=032221303/part-00028-66ec874b-f074-4991-9da4-67716003c6cd.c000.csv.gz (1.1MB)
- **Updated:** January 2026
- **Limitation:** Shows building footprints only, NOT property parcel boundaries

### 2. ✅ Google Open Buildings V3 — AVAILABLE for Panama
- **URL:** https://sites.research.google/open-buildings/
- **Format:** CSV with geometry, available via Google Earth Engine
- **Coverage:** Panama is in the country list (PAN)
- **Cost:** Free (CC BY 4.0)
- **Quality:** ML-derived building footprints from satellite imagery
- **Limitation:** Building footprints only, NOT parcel boundaries

### 3. ✅ OpenStreetMap — Buildings exist in Venao area
- **Query tested:** Overpass API returned building footprints (building=yes) in bbox 7.42,-80.21,7.46,-80.17
- **Format:** OSM XML/JSON, convertible to GeoJSON
- **Coverage:** Some buildings mapped in Venao area
- **Cost:** Free (ODbL)
- **No cadastral/parcel boundaries** in OSM for this area (boundary=cadastral and landuse queries returned empty)
- **Overpass query for buildings:**
  ```
  [out:json][timeout:25];
  (way["building"](7.42,-80.21,7.46,-80.17););
  out body;>;out skel qt;
  ```

### 4. ✅ GADM — Administrative Boundaries (NOT parcels)
- **URL:** https://gadm.org/download_country.html (select Panama)
- **Format:** Shapefile, GeoJSON, KML, R data
- **Coverage:** Administrative boundaries down to corregimiento level (admin level 3)
- **Cost:** Free (academic/non-commercial)
- **What it gives you:** Province > District > Corregimiento boundaries
- **Useful for:** Getting the Pedasi corregimiento boundary as a clip mask
- **Limitation:** Administrative boundaries only, NOT individual property parcels

### 5. ✅ HDX (Humanitarian Data Exchange) — Admin Boundaries
- **URL:** https://data.humdata.org/dataset/cod-ab-pan
- **Format:** Geodatabase, SHP, GeoJSON, XLSX
- **Coverage:** Panama admin levels 0-3 (13 provinces, 76 districts, 594 corregimientos)
- **Cost:** Free (CC BY 4.0)
- **Same limitation as GADM** — administrative, not cadastral

### 6. ⚠️ ArcGIS Online — Panama Pacifico Parcels (WRONG AREA)
- **URL:** https://services9.arcgis.com/tyqPXmyJlehvJ4lc/arcgis/rest/services/Land_Information/FeatureServer
- **Owner:** eric-acevedo
- **Coverage:** Panama Pacifico area only (near former Howard AFB, west of Panama City)
- **Extent:** ~8.89°N to 8.96°N — NOT Playa Venao
- **Format:** Feature Service (queryable, exportable to GeoJSON/SHP)
- **Note:** This proves parcel-level data CAN exist on ArcGIS for Panama, but nothing found for the Venao/Pedasi/Los Santos area

### 7. ⚠️ ArcGIS Online — STRI Agua Salud Project
- **URL:** Feature Service by stridataportal
- **Coverage:** Panama Canal watershed experimental plots
- **NOT relevant** to Playa Venao

### 8. ⚠️ ArcGIS Online — Panama Geology (STRI)
- **URL:** https://www.arcgis.com/home/item.html?id=09021b61cd7946e78fcf16ed53613e60
- **Coverage:** All of Panama, 1:250,000 scale
- **Format:** Feature Service
- **Useful for:** Geological context only

---

## Government Sources Investigated (Mostly Inaccessible)

### Dirección de Catastro y Bienes Patrimoniales (MEF)
- **catastro.mef.gob.pa** — DNS not resolving (offline/deprecated)
- **www.mef.gob.pa/direccion-de-catastro-y-bienes-patrimoniales/** — 404 Not Found
- **www.mef.gob.pa/direccion-de-catastro/** — 404 Not Found
- **Status:** The catastro web portal appears to be down or reorganized. No public GIS service found.

### ANATI (Autoridad Nacional de Tierras)
- **www.anati.gob.pa** — Site loads but no content extracted (heavy JS)
- **geo.anati.gob.pa** — DNS not resolving
- **geoportal.anati.gob.pa** — Connection failed
- **Status:** ANATI's geoportal is either behind authentication or currently down

### IGNTG (Instituto Geográfico Nacional Tommy Guardia)
- **www.igntg.gob.pa** — DNS not resolving
- **Status:** National mapping agency website appears offline

### MiViOT (Ministerio de Vivienda)
- **gis.miviot.gob.pa** — DNS not resolving

---

## Commercial Sources

### Regrid
- **Coverage:** US and Canada only. Does NOT cover Panama.
- **URL:** https://regrid.com

### LandGrid / PropertyShark
- US-focused, no Panama coverage found.

---

## Recommended Approach to Get Real Parcel Data

Since no public digital cadastral data exists for Playa Venao, here are practical paths:

### Option A: Professional Surveyor (Best option)
1. Hire a licensed agrimensor (surveyor) in Panama
2. They can access MEF's catastro database
3. They provide certified planos catastrales with GPS coordinates
4. Cost: ~$500-2000 per property survey
5. Contacts: Search "agrimensor Pedasi" or "topógrafo Los Santos Panama"

### Option B: ANATI/Catastro Office Visit
1. Visit the Dirección de Catastro (MEF) in Panama City
2. Or regional office in Las Tablas (Los Santos provincial capital)
3. Request planos for specific finca numbers in Corregimiento de Pedasi
4. May need to provide property registration (Registro Público) numbers

### Option C: Registro Público de Panamá
- **URL:** https://www.registro-publico.gob.pa
- Contains property title information linked to finca numbers
- May have some spatial references but typically not GIS-format

### Option D: Manual Digitization from Aerial Imagery
- Use Google Earth Pro or Bing Maps aerial imagery
- Trace visible property boundaries (fences, walls, roads)
- Cross-reference with any available survey plans
- Combine with building footprints from Microsoft/Google/OSM
- **This gives approximations, not legal boundaries**

### Option E: Real Estate Developer Maps
- Contact local Venao real estate developers (Playa Venao Resort, etc.)
- They often have survey/lot plans for their developments
- Search "Playa Venao lots for sale map" — sales maps sometimes show parcel layouts

---

## Data Already Downloadable for the Map

| Source | Type | Format | Use Case |
|--------|------|--------|----------|
| Microsoft Building Footprints | Buildings | GeoJSON | Show structures on map |
| Google Open Buildings V3 | Buildings | CSV/GeoJSON | Additional building data |
| OSM Buildings | Buildings | GeoJSON | Community-mapped structures |
| GADM v4.1 | Admin boundaries | SHP/GeoJSON | District/corregimiento outline |
| HDX COD-AB | Admin boundaries | SHP/GeoJSON | Same as GADM, OCHA source |

---

## Summary

**Real cadastral parcel boundaries for Playa Venao are NOT available as open/downloadable GIS data.** Panama's cadastral system is not digitally accessible to the public. The best publicly available data for a map are:

1. **Administrative boundaries** (GADM/HDX) for the Pedasi district outline
2. **Building footprints** (Microsoft/Google/OSM) to show where structures are
3. **Satellite imagery** basemap (Mapbox/Google/Bing) for visual context

For actual property parcel boundaries, a licensed Panamanian surveyor or in-person catastro office visit is required.
