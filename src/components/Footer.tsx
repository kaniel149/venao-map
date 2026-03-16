export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-6 mt-10">
      <div className="max-w-7xl mx-auto px-4 text-center text-sm text-slate-400">
        Venao Map &copy; {new Date().getFullYear()} &bull; Data for reference only
      </div>
    </footer>
  );
}
