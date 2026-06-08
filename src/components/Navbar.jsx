import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const closeMenu = () => {
    setOpen(false);
    setServicesOpen(false);
  };

  return (
    <header className="navbar">
      <Link to="/" className="logo" onClick={closeMenu}>
        <span className="logo-mark">✦</span>
        <span>
          Solutions<span>Plus</span>
        </span>
      </Link>

      <button
        type="button"
        className="menu-toggle"
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>

      <nav className={open ? "nav-links open" : "nav-links"}>
        <NavLink to="/" onClick={closeMenu}>
          Home
        </NavLink>

        <NavLink to="/about" onClick={closeMenu}>
          About Us
        </NavLink>

        <div className="dropdown">
          <button
            type="button"
            className="dropdown-button"
            onClick={() => setServicesOpen(!servicesOpen)}
          >
            Services ▾
          </button>

          {servicesOpen && (
            <div className="dropdown-menu">
              <Link to="/services/digital_marketing" onClick={closeMenu}>
                Digital Marketing
              </Link>

              <Link to="/services/website_design" onClick={closeMenu}>
                Website Design
              </Link>

              <Link to="/services/security" onClick={closeMenu}>
                Cyber Security
              </Link>
<Link to="/services/ai_solutions" onClick={closeMenu}>
  AI Solutions
</Link>
              <Link to="/services/seo" onClick={closeMenu}>
                Strategic Planning
              </Link>

              <Link to="/services/creative_designs" onClick={closeMenu}>
                Creative Designs
              </Link>
            </div>
          )}
        </div>

        <NavLink to="/contact" className="nav-cta" onClick={closeMenu}>
          Consult Us
        </NavLink>
      </nav>
    </header>
  );
}

export default Navbar;