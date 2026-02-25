import { properties as seedProperties, agents as seedAgents } from './properties';
import type { Property, Lead, Agent } from './properties';

// Simple in-memory store (replace with Supabase later)
const PROPERTIES_KEY = 'venao_properties';
const LEADS_KEY = 'venao_leads';
const AGENTS_KEY = 'venao_agents';

function load<T>(key: string, fallback: T[]): T[] {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch { return fallback; }
}

function save<T>(key: string, data: T[]) {
  localStorage.setItem(key, JSON.stringify(data));
}

export function getProperties(): Property[] { return load(PROPERTIES_KEY, seedProperties); }
export function getProperty(id: string): Property | undefined { return getProperties().find(p => p.id === id); }
export function saveProperty(p: Property) {
  const all = getProperties();
  const idx = all.findIndex(x => x.id === p.id);
  if (idx >= 0) all[idx] = p; else all.push(p);
  save(PROPERTIES_KEY, all);
}
export function deleteProperty(id: string) {
  save(PROPERTIES_KEY, getProperties().filter(p => p.id !== id));
}

export function getLeads(): Lead[] { return load(LEADS_KEY, []); }
export function addLead(lead: Omit<Lead, 'id' | 'created_at'>): Lead {
  const all = getLeads();
  const newLead: Lead = { ...lead, id: crypto.randomUUID(), created_at: new Date().toISOString() };
  all.push(newLead);
  save(LEADS_KEY, all);
  return newLead;
}

export function getAgents(): Agent[] { return load(AGENTS_KEY, seedAgents); }
