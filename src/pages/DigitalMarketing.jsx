import Stats from "../components/Stats";
import ContactSection from "../components/ContactSection";

function DigitalMarketing() {
  return (
    <>
      <section className="inner-hero page-section">
        <div>
          <p className="eyebrow">Digital Marketing</p>
          <h1>Build a Recognizable Brand</h1>
          <h3>We deliver digital experiences that sell.</h3>
          <p>
            Your brand deserves more than random posts and short-term campaigns.
            We create strategic digital marketing solutions that help your
            business attract attention, build trust, and turn online engagement
            into measurable results.
          </p>

          <div className="button-row">
            <a href="#digital-services" className="btn-primary">
              Start Project
            </a>
            <a href="/contact" className="btn-secondary">
              Consult Us
            </a>
          </div>
        </div>

        <div className="image-placeholder large">
          <span>🚀</span>
          <p>Digital Marketing Image</p>
          <small>Replace with real image</small>
        </div>
      </section>

      <section className="split-section page-section">
        <div className="image-placeholder">
          <span>📣</span>
          <p>Marketing strategy image</p>
        </div>

        <div>
          <p className="eyebrow">Marketing Strategy</p>
          <h2>Digital marketing is more than a single campaign.</h2>
          <p>
            It is a long-term commitment to understanding your audience,
            positioning your brand correctly, and creating consistent
            communication across every digital channel.
          </p>
          <p>
            Our marketing solutions are designed to help your business grow
            through strategy, creativity, and data. We focus on building
            authentic connections with your audience and guiding potential
            customers through the full journey.
          </p>
        </div>
      </section>

      <Stats />

      <section id="digital-services" className="page-section">
        <div className="section-heading center">
          <p className="eyebrow">What We Offer</p>
          <h2>Digital Marketing Services That Convert</h2>
          <p>
            Every marketing strategy should help your business generate
            interest, build relationships, and create real opportunities for
            growth.
          </p>
        </div>

        <div className="cards-grid three">
          <div className="service-card">
            <span>📱</span>
            <h3>Social Media Strategy & Advertising</h3>
            <p>
              We help your brand build meaningful social connections that lead
              to real business results.
            </p>
          </div>

          <div className="service-card">
            <span>✍</span>
            <h3>Content Marketing</h3>
            <p>
              We create content that your audience actually wants to read,
              watch, and share.
            </p>
          </div>

          <div className="service-card">
            <span>🔎</span>
            <h3>SEO Management</h3>
            <p>
              We improve your online visibility through practical search engine
              optimization strategies.
            </p>
          </div>

          <div className="service-card">
            <span>📊</span>
            <h3>PPC Strategy & Management</h3>
            <p>
              We create paid advertising campaigns that bring high-quality
              traffic to your business.
            </p>
          </div>

          <div className="service-card">
            <span>✉</span>
            <h3>Email Marketing</h3>
            <p>
              We design email campaigns that feel personal, useful, and worth
              opening.
            </p>
          </div>

          <div className="service-card">
            <span>📣</span>
            <h3>Public Relations</h3>
            <p>
              We help communicate launches, updates, and brand stories
              professionally.
            </p>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div>
          <h2>Providing omnichannel support for your business</h2>
          <p>
            From planning digital strategies to executing campaigns, we support
            your business across multiple platforms with clear, consistent, and
            effective communication.
          </p>
        </div>

        <a href="/contact" className="btn-primary">
          Free Consult
        </a>
      </section>

      <section className="page-section">
        <div className="section-heading center">
          <p className="eyebrow">Simple Steps. Perfect Results.</p>
          <h2>Work Process</h2>
        </div>

        <div className="process-grid">
          <div>
            <span>01</span>
            <h3>Discussion</h3>
            <p>We listen to your marketing goals, problems, and budget.</p>
          </div>

          <div>
            <span>02</span>
            <h3>Analysis</h3>
            <p>We research your competitors, audience, and market position.</p>
          </div>

          <div>
            <span>03</span>
            <h3>Proposal</h3>
            <p>We prepare a clear campaign plan and strategic direction.</p>
          </div>

          <div>
            <span>04</span>
            <h3>Execution</h3>
            <p>We launch, monitor, and improve the marketing campaign.</p>
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}

export default DigitalMarketing;