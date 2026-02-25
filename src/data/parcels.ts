import type { FeatureCollection, Feature, Polygon } from 'geojson';

export interface ParcelProperties {
  name: string;
  owner: string;
  status: string;
  area_m2: number;
  color: string;
}

export type ParcelFeature = Feature<Polygon, ParcelProperties>;
export type ParcelCollection = FeatureCollection<Polygon, ParcelProperties>;

export const parcels: ParcelCollection = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      properties: {
        name: 'Blue Venao',
        owner: 'Blue Venao Development',
        status: 'Active Development',
        area_m2: 25000,
        color: '#2196F3',
      },
      geometry: {
        type: 'Polygon',
        coordinates: [[
          [-80.1895, 7.4285],
          [-80.1870, 7.4285],
          [-80.1868, 7.4305],
          [-80.1893, 7.4310],
          [-80.1895, 7.4285],
        ]],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'The Point',
        owner: 'The Point Panama',
        status: 'Pre-sale',
        area_m2: 160500,
        color: '#FF9800',
      },
      geometry: {
        type: 'Polygon',
        coordinates: [[
          [-80.1935, 7.4290],
          [-80.1900, 7.4285],
          [-80.1895, 7.4320],
          [-80.1898, 7.4345],
          [-80.1930, 7.4340],
          [-80.1935, 7.4290],
        ]],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Villa Marina',
        owner: 'Villa Marina Corp',
        status: 'Built',
        area_m2: 12000,
        color: '#4CAF50',
      },
      geometry: {
        type: 'Polygon',
        coordinates: [[
          [-80.1870, 7.4280],
          [-80.1850, 7.4280],
          [-80.1848, 7.4298],
          [-80.1868, 7.4300],
          [-80.1870, 7.4280],
        ]],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Eco Venao',
        owner: 'Eco Venao Lodge',
        status: 'Operating',
        area_m2: 80000,
        color: '#388E3C',
      },
      geometry: {
        type: 'Polygon',
        coordinates: [[
          [-80.2045, 7.4335],
          [-80.2000, 7.4330],
          [-80.1995, 7.4370],
          [-80.2040, 7.4375],
          [-80.2045, 7.4335],
        ]],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Cósmica / Venao Gardens',
        owner: 'Venao Gardens',
        status: 'Phase 1',
        area_m2: 70000,
        color: '#9C27B0',
      },
      geometry: {
        type: 'Polygon',
        coordinates: [[
          [-80.1975, 7.4365],
          [-80.1935, 7.4360],
          [-80.1930, 7.4400],
          [-80.1970, 7.4405],
          [-80.1975, 7.4365],
        ]],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Moledet Panorama',
        owner: 'Moledet Group',
        status: 'Active Development',
        area_m2: 35000,
        color: '#E91E63',
      },
      geometry: {
        type: 'Polygon',
        coordinates: [[
          [-80.1920, 7.4380],
          [-80.1895, 7.4378],
          [-80.1892, 7.4405],
          [-80.1918, 7.4408],
          [-80.1920, 7.4380],
        ]],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Moledet Terra Nova',
        owner: 'Moledet Group',
        status: 'Planning',
        area_m2: 28000,
        color: '#F44336',
      },
      geometry: {
        type: 'Polygon',
        coordinates: [[
          [-80.1895, 7.4355],
          [-80.1870, 7.4352],
          [-80.1868, 7.4378],
          [-80.1892, 7.4380],
          [-80.1895, 7.4355],
        ]],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Hermitage Hills',
        owner: 'Hermitage Development',
        status: 'Active Development',
        area_m2: 45000,
        color: '#795548',
      },
      geometry: {
        type: 'Polygon',
        coordinates: [[
          [-80.1770, 7.4320],
          [-80.1740, 7.4318],
          [-80.1735, 7.4350],
          [-80.1765, 7.4355],
          [-80.1770, 7.4320],
        ]],
      },
    },
  ],
};
