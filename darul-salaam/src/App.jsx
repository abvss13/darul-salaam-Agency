import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import HajjPackages from './pages/HajjPackages';
import UmmrahPackages from './pages/UmmrahPackages';
import ContactUs from './pages/ContactUs';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <div style={{ flex: 1, padding: '20px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/hajj-packages" element={<HajjPackages />} />
            <Route path="/ummrah-packages" element={<UmmrahPackages />} />
            <Route path="/contact-us" element={<ContactUs />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
