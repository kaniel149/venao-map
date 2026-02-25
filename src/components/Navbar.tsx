import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

export default function Navbar() {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const links = [
    { to: '/', label: 'Map' },
    { to: '/properties', label: 'Properties' },
    { to: '/insights', label: 'Insights' },
    { to: '/admin', label: 'Admin' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0C2340] text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2 font-bold text-xl tracking-wider" style={{ fontFamily: 'Playfair Display' }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D4A843" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
            <circle cx="12" cy="10" r="3"/>
          </svg>
          <span>VENAO <span className="text-[#D4A843]">MAP</span></span>
        </Link>
        <div className="hidden md:flex gap-6">
          {links.map(l => (
            <Link key={l.to} to={l.to} className={`text-sm font-medium transition-colors hover:text-[#D4A843] ${location.pathname === l.to ? 'text-[#D4A843]' : 'text-white/80'}`}>
              {l.label}
            </Link>
          ))}
        </div>
        <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><path d={open ? "M6 6l12 12M6 18L18 6" : "M4 6h16M4 12h16M4 18h16"}/></svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-[#0C2340] border-t border-white/10 pb-4">
          {links.map(l => (
            <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className={`block px-4 py-3 text-sm ${location.pathname === l.to ? 'text-[#D4A843]' : 'text-white/80'}`}>
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
