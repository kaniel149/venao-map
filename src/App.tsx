import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Properties from './pages/Properties';
import PropertyDetail from './pages/PropertyDetail';
import Admin from './pages/Admin';
import Insights from './pages/Insights';
import NotFound from './pages/NotFound';

function WithFooter({ children }: { children: React.ReactNode }) {
  return <>{children}<Footer /></>;
}

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/properties" element={<WithFooter><Properties /></WithFooter>} />
        <Route path="/property/:id" element={<WithFooter><PropertyDetail /></WithFooter>} />
        <Route path="/admin" element={<WithFooter><Admin /></WithFooter>} />
        <Route path="/insights" element={<WithFooter><Insights /></WithFooter>} />
        <Route path="*" element={<WithFooter><NotFound /></WithFooter>} />
      </Routes>
    </BrowserRouter>
  );
}
