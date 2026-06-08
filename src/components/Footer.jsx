import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div>
          <Link to="/" className="logo">
            <span className="logo-mark">✦</span>
            <span>Solutions<span>Plus</span></span>
          </Link>
          <p>
            We are a creative agency providing digital solutions to grow your business.
          </p>
        </div>

        <div>
          <h4>Quick Links</h4>
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact Us</Link>
        </div>

        <div>
          <h4>Services</h4>
          <Link to="/services/digital_marketing">Digital Marketing</Link>
          <Link to="/services/website_design">Website Design</Link>
          <Link to="/services/security">Cyber Security</Link>
          <Link to="/services/seo">Strategic Planning</Link>
          <Link to="/services/creative_designs">Creative Designs</Link>
          <Link to="/services/ai_solutions">AI Solutions</Link>
        </div>

        <div>
          <h4>Follow Us</h4>
          <div className="socials">
            <span>f</span>
            <span>in</span>
            <span>ig</span>
            <span>x</span>
          </div>
        </div>
      </footer>

      <div className="copyright">
        © 2026 Solutions Plus. All Rights Reserved.
      </div>
    </>
  );
}

export default Footer;