import Stats from "../components/Stats";
import ContactSection from "../components/ContactSection";

function About() {
  return (
    <>
      <section className="inner-hero page-section">
        <div>
          <p className="eyebrow">About Us</p>
          <h1>A Marriage of Efficiency and Innovation</h1>
          <h3>Our mission is to simplify your problems.</h3>
          <p>
            Solutions Plus was created to bring marketing, technology,
            cybersecurity, and business strategy into one place. Instead of
            working with multiple agencies for different needs, businesses can
            work with one team that understands how all parts of the digital
            experience connect.
          </p>

          <div className="button-row">
            <a href="#about-content" className="btn-primary">
              Learn More
            </a>
            <a href="/contact" className="btn-secondary">
              Consult Us
            </a>
          </div>
        </div>

        <div className="image-placeholder large">
          <span>🌌</span>
          <p>About image placeholder</p>
          <small>Replace this with real about image</small>
        </div>
      </section>

      <section id="about-content" className="split-section page-section">
        <div className="image-placeholder">
          <span>🤝</span>
          <p>Company story image</p>
          <small>Replace with team/company image</small>
        </div>

        <div>
          <p className="eyebrow">Who We Are</p>
          <h2>Built by Marketing and Cybersecurity Experts</h2>
          <p>
            The company was built by professionals with experience in marketing
            and cybersecurity. This combination allows us to help businesses grow
            while also protecting their systems, data, and digital operations.
          </p>
          <p>
            Our team is made up of trained digital professionals who focus on
            long-term business growth. We use research, data, technology, and
            practical strategy to understand your business, your competitors,
            and your customers.
          </p>
        </div>
      </section>

      <Stats />

      <section className="page-section">
        <div className="section-heading center">
          <p className="eyebrow">Why Choose Us</p>
          <h2>Why Hire Us?</h2>
          <p>
            We combine creativity, strategy, technology, and security to help
            businesses solve problems more effectively.
          </p>
        </div>

        <div className="cards-grid three">
          <div className="service-card">
            <span>🏆</span>
            <h3>Extensive Experience</h3>
            <p>
              No matter the project, our team has the experience to handle
              complex business and digital challenges across different
              industries.
            </p>
          </div>

          <div className="service-card">
            <span>🎓</span>
            <h3>Qualified & Certified</h3>
            <p>
              We stay updated with modern tools, trends, technologies, and best
              practices so we can provide relevant professional solutions.
            </p>
          </div>

          <div className="service-card">
            <span>📊</span>
            <h3>KPI Oriented</h3>
            <p>
              We do not create strategies based on guesswork. Our process is
              focused on measurable results, transparency, and practical steps.
            </p>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div>
          <h2>Built for businesses that want clarity, growth, and protection.</h2>
          <p>
            Whether you need stronger marketing, a better website, improved
            cybersecurity, or a clearer business plan, our goal is to make the
            process simpler and the results stronger.
          </p>
        </div>
      </section>

      <ContactSection />
    </>
  );
}

export default About;