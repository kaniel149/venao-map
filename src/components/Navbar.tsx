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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0F172A] shadow-lg">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-14">
        <Link to="/" className="flex items-center gap-2 font-bold text-lg tracking-wide text-white">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
            <circle cx="12" cy="10" r="3"/>
          </svg>
          <span>Venao <span className="text-[#D97706]">Map</span></span>
        </Link>
        <div className="hidden md:flex items-center h-full">
          {links.map(l => {
            const active = location.pathname === l.to;
            return (
              <Link
                key={l.to}
                to={l.to}
                className={`relative h-full flex items-center px-4 text-sm font-medium transition-colors hover:text-[#D97706] ${
                  active ? 'text-[#D97706]' : 'text-slate-300'
                }`}
              >
                {l.label}
                {active && (
                  <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-[#D97706] rounded-full" />
                )}
              </Link>
            );
          })}
        </div>
        <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open}>
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d={open ? "M6 6l12 12M6 18L18 6" : "M4 6h16M4 12h16M4 18h16"}/></svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-[#0F172A] border-t border-white/10 pb-3">
          {links.map(l => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className={`block px-4 py-3 text-sm font-medium ${
                location.pathname === l.to
                  ? 'text-[#D97706] bg-white/5 border-l-2 border-[#D97706]'
                  : 'text-slate-300'
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
