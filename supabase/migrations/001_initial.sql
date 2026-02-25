-- Venao Map Database Schema

CREATE TYPE property_type AS ENUM ('land', 'house', 'condo', 'commercial');
CREATE TYPE property_status AS ENUM ('for_sale', 'for_rent', 'under_construction', 'sold', 'rented');

CREATE TABLE properties (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT,
  type property_type NOT NULL,
  status property_status NOT NULL DEFAULT 'for_sale',
  price NUMERIC NOT NULL,
  currency TEXT NOT NULL DEFAULT 'USD',
  size_sqm NUMERIC,
  land_size_sqm NUMERIC,
  bedrooms INT,
  bathrooms INT,
  year_built INT,
  lat DOUBLE PRECISION NOT NULL,
  lng DOUBLE PRECISION NOT NULL,
  address TEXT,
  images JSONB DEFAULT '[]'::jsonb,
  agent_name TEXT,
  agent_phone TEXT,
  agent_email TEXT,
  source TEXT,
  source_url TEXT,
  folio TEXT,
  owner_name TEXT,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  budget_min NUMERIC,
  budget_max NUMERIC,
  property_type TEXT,
  message TEXT,
  property_id UUID REFERENCES properties(id) ON DELETE SET NULL,
  source TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE agents (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  company TEXT,
  phone TEXT,
  email TEXT,
  website TEXT,
  properties_count INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Enable RLS
ALTER TABLE properties ENABLE ROW LEVEL SECURITY;
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE agents ENABLE ROW LEVEL SECURITY;

-- Public read on properties and agents
CREATE POLICY "Public can read properties" ON properties FOR SELECT USING (true);
CREATE POLICY "Public can read agents" ON agents FOR SELECT USING (true);

-- Public can insert leads
CREATE POLICY "Public can submit leads" ON leads FOR INSERT WITH CHECK (true);

-- Admin policies (using service role or authenticated admin)
CREATE POLICY "Admin full access properties" ON properties FOR ALL USING (auth.role() = 'service_role');
CREATE POLICY "Admin full access leads" ON leads FOR ALL USING (auth.role() = 'service_role');
CREATE POLICY "Admin full access agents" ON agents FOR ALL USING (auth.role() = 'service_role');

-- Updated at trigger
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER properties_updated_at
  BEFORE UPDATE ON properties
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();
