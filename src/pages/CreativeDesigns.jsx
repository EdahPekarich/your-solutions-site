import Stats from "../components/Stats";
import ContactSection from "../components/ContactSection";
import cdImage from "../assets/cd.jpg";
import crdImage from "../assets/crd.png";

function CreativeDesigns() {
  return (
    <>
      <section className="inner-hero page-section">
        <div>
          <p className="eyebrow">Creative Designs</p>
          <h1>Creative Capabilities Under One Roof</h1>
          <h3>From beautiful videos to compelling infographics.</h3>
          <p>
            We bring your ideas to life through strong visual design. Our
            creative services help your brand look professional, communicate
            clearly, and stand out across digital and print platforms.
          </p>

          <div className="button-row">
            <a href="#creative-services" className="btn-primary">
              Start Project
            </a>
            <a href="/contact" className="btn-secondary">
              Consult Us
            </a>
          </div>
        </div>

        <div className="image-placeholder large">
          <img
            src={cdImage}
            alt="Strategic Planning"
            className="hero-image"
          />
        </div>
      </section>

      <section className="split-section page-section">
             <div className="image-placeholder branding-project">
  <img
    src={crdImage}
    alt="Branding project"
    className="branding-project-image"
  />
</div>

        <div>
          <p className="eyebrow">Creative Studio</p>
          <h2>Powerful Designs</h2>
          <p>
            Creative design should do more than decorate your brand. It should
            communicate your message, support your marketing goals, and create a
            visual identity that people remember.
          </p>
        </div>
      </section>

      <Stats />

      <section id="creative-services" className="page-section">
        <div className="section-heading center">
          <p className="eyebrow">Design Services</p>
          <h2>Creative Design Services</h2>
          <p>
            We create high-quality designs for branding, content marketing,
            social media campaigns, product promotions, and business
            presentations.
          </p>
        </div>

        <div className="cards-grid three">
          <div className="service-card">
            <span>📊</span>
            <h3>Presentation Design</h3>
            <p>
              We design branded and editable presentations that communicate your
              message clearly.
            </p>
          </div>

          <div className="service-card">
            <span>💎</span>
            <h3>Branding</h3>
            <p>
              We create visual identities that help businesses become more
              recognizable.
            </p>
          </div>

          <div className="service-card">
            <span>🖌</span>
            <h3>Illustration Design</h3>
            <p>
              We create custom visuals, icons, headers, animations, and
              infographics.
            </p>
          </div>

          <div className="service-card">
            <span>📢</span>
            <h3>Ad Creative</h3>
            <p>
              We design creative concepts for digital ads, social media, and
              campaign materials.
            </p>
          </div>

          <div className="service-card">
            <span>🎞</span>
            <h3>Video Graphics</h3>
            <p>
              We create visual assets that support videos, promos, and
              presentations.
            </p>
          </div>

          <div className="service-card">
            <span>🧩</span>
            <h3>Brand Assets</h3>
            <p>
              We design reusable creative materials that keep your brand
              consistent.
            </p>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="section-heading center">
          <p className="eyebrow">Portfolio</p>
          <h2>Our Creative Projects</h2>
          <p>
            We tell your story through visual experiences, from branding
            palettes to ads, flyers, presentations, and logo concepts.
          </p>
        </div>

        <div className="portfolio-grid">
          <div className="portfolio-card">
            <span>🎨</span>
            <h3>Branding Palette</h3>
            <p>Brand Identity</p>
          </div>

          <div className="portfolio-card">
            <span>📢</span>
            <h3>Event Ad</h3>
            <p>Advertising</p>
          </div>

          <div className="portfolio-card">
            <span>🧾</span>
            <h3>Sales Flyer</h3>
            <p>Print Design</p>
          </div>

          <div className="portfolio-card">
            <span>📊</span>
            <h3>PowerPoint Deck</h3>
            <p>Presentation</p>
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}

export default CreativeDesigns;