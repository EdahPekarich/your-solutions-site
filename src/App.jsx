import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AISolutions from "./pages/AISolutions";
import Home from "./pages/Home";
import About from "./pages/About";
import DigitalMarketing from "./pages/DigitalMarketing";
import WebsiteDesign from "./pages/WebsiteDesign";
import CyberSecurity from "./pages/CyberSecurity";
import StrategicPlanning from "./pages/StrategicPlanning";
import CreativeDesigns from "./pages/CreativeDesigns";
import Contact from "./pages/Contact";

import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route
          path="/services/digital_marketing"
          element={<DigitalMarketing />}
        />

        <Route
          path="/services/website_design"
          element={<WebsiteDesign />}
        />

        <Route
          path="/services/security"
          element={<CyberSecurity />}
        />

        <Route
          path="/services/seo"
          element={<StrategicPlanning />}
        />

        <Route
          path="/services/creative_designs"
          element={<CreativeDesigns />}
        />
<Route path="/services/ai_solutions" element={<AISolutions />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;