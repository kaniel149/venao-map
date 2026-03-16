import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="pt-32 pb-20 px-4 text-center max-w-md mx-auto">
      <p className="text-6xl font-bold text-[#D97706] mb-4">404</p>
      <h1 className="text-2xl font-bold text-[#0F172A] mb-2">Page Not Found</h1>
      <p className="text-slate-500 mb-8">The property or page you're looking for doesn't exist.</p>
      <Link
        to="/"
        className="inline-block bg-[#0F172A] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#1E293B] transition-colors"
      >
        ← Back to Map
      </Link>
    </div>
  );
}
