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

// All approximate polygons removed. Only real cadastral data will be added here.
export const parcels: ParcelCollection = {
  type: 'FeatureCollection',
  features: [],
};
