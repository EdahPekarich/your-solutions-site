import Stats from "../components/Stats";
import ContactSection from "../components/ContactSection";
import bsmImage from "../assets/bsm.png";
import spImage from "../assets/sp.jpg";

function StrategicPlanning() {
  return (
    <>
      <section className="inner-hero page-section">
        <div>
          <p className="eyebrow">Strategic Planning</p>
          <h1>Intelligent Solutions, Transformative Results</h1>
          <h3>Advance the effectiveness of your business.</h3>
          <p>
            Strong business growth starts with a clear strategy. We help
            companies understand their position, improve operations, identify
            opportunities, and create practical plans that support long-term
            success.
          </p>

          <div className="button-row">
            <a href="#strategy-services" className="btn-primary">
              Start Project
            </a>
            <a href="/contact" className="btn-secondary">
              Let’s Talk
            </a>
          </div>
        </div>

        <div className="image-placeholder large">
  <img
    src={spImage}
    alt="Strategic Planning"
    className="hero-image"
  />
</div>
      </section>

      <section className="split-section page-section">
        <div className="strategy-image-box">
  <img
    src={bsmImage}
    alt="Marketing strategy models"
    className="strategy-image"
  />
</div>

        <div>
          <p className="eyebrow">Business Strategy</p>
          <h2>Our Core Strategic Planning Services</h2>
          <p>
            Business strategy is not only about setting goals. It is about
            understanding your market, your internal structure, your customers,
            your competitors, and the steps needed to move forward with
            confidence.
          </p>
        </div>
      </section>

      <Stats />

      <section id="strategy-services" className="page-section">
        <div className="section-heading center">
          <p className="eyebrow">What We Offer</p>
          <h2>Strategic Planning Services</h2>
          <p>
            We help businesses make smarter decisions, improve structure, and
            create practical growth plans.
          </p>
        </div>

        <div className="cards-grid four">
          <div className="service-card">
            <span>📣</span>
            <h3>Marketing Strategy</h3>
            <p>
              We help define a strategy that supports your objectives and
              creates stronger marketing activities.
            </p>
          </div>

          <div className="service-card">
            <span>🏗</span>
            <h3>Organizational Structure</h3>
            <p>
              We help review your structure and define systems needed for
              sustainable growth.
            </p>
          </div>

          <div className="service-card">
            <span>♟</span>
            <h3>Competitive Environment</h3>
            <p>
              We analyze your competition so your business can position itself
              effectively.
            </p>
          </div>

          <div className="service-card">
            <span>⚙</span>
            <h3>Operational Efficiency</h3>
            <p>
              We improve processes, reduce waste, and create better service
              quality.
            </p>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div>
          <h2>Are you a startup business?</h2>
          <p>
            If you are building a new business, you need more than an idea. You
            need a clear roadmap, practical priorities, and an executable plan.
            We help turn entrepreneurial vision into a structured strategy.
          </p>
        </div>

        <a href="/contact" className="btn-primary">
          Let’s Talk
        </a>
      </section>

      <section className="page-section">
        <div className="section-heading center">
          <p className="eyebrow">Simple Steps. Perfect Results.</p>
          <h2>The Solutions Plus Process</h2>
        </div>

        <div className="process-grid">
          <div>
            <span>01</span>
            <h3>Diagnose</h3>
            <p>
              We review your current challenges, opportunities, goals, and
              market position.
            </p>
          </div>

          <div>
            <span>02</span>
            <h3>Conceptualize</h3>
            <p>
              We define objectives, priorities, and key performance indicators.
            </p>
          </div>

          <div>
            <span>03</span>
            <h3>Coordinate</h3>
            <p>
              We organize responsibilities, timelines, and practical action
              steps.
            </p>
          </div>

          <div>
            <span>04</span>
            <h3>Optimize</h3>
            <p>
              We track progress, review results, and adjust the strategy when
              needed.
            </p>
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}

export default StrategicPlanning;