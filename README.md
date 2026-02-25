# Playa Venao Real Estate Map

Interactive parcel map for Playa Venao, Panama.

## Tech
- Leaflet.js (map), Tailwind CSS (styling), single HTML file, no build tools

## Features
- Satellite + OSM layers
- 20 color-coded parcels (Available/Sold/Under Contract/Not for Sale)
- Clickable parcels with detailed popups
- Sidebar: filter by status, type, price, owner search
- Stats bar, legend, mobile responsive

## Run
```bash
cd /Users/macmini/projects/venao-map
python3 -m http.server 8891
```
Then open http://localhost:8891
