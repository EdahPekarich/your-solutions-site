import Stats from "../components/Stats";
import ContactSection from "../components/ContactSection";

function WebsiteDesign() {
  return (
    <>
      <section className="inner-hero page-section">
        <div>
          <p className="eyebrow">Website Design & Development</p>
          <h1>You Imagine It, We Create It</h1>
          <h3>Enriching your brand through your website.</h3>
          <p>
            Your website is often the first place people experience your brand.
            We design and develop modern, responsive, and professional websites
            that help your business look credible, communicate clearly, and
            convert visitors into customers.
          </p>

          <div className="button-row">
            <a href="#website-services" className="btn-primary">
              Start Project
            </a>
            <a href="/contact" className="btn-secondary">
              Consult Us
            </a>
          </div>
        </div>

        <div className="image-placeholder large">
          <span>💻</span>
          <p>Website Design Image</p>
          <small>Replace with real image</small>
        </div>
      </section>

      <section className="page-section">
        <div className="section-heading center">
          <p className="eyebrow">Website Experience</p>
          <h2>Superior, Faster and Affordable</h2>
          <p>
            A successful website should be visually attractive, easy to use,
            fast, and built around your business goals.
          </p>
        </div>

        <div className="cards-grid four">
          <div className="service-card">
            <span>🎯</span>
            <h3>Customized Design</h3>
            <p>
              We create unique website designs that help your business stand out
              from competitors.
            </p>
          </div>

          <div className="service-card">
            <span>📱</span>
            <h3>Responsive Pages</h3>
            <p>
              We build responsive layouts that work smoothly on desktop, tablet,
              and mobile.
            </p>
          </div>

          <div className="service-card">
            <span>🧭</span>
            <h3>Effective Navigation</h3>
            <p>
              We structure your website so visitors can move naturally through
              your content.
            </p>
          </div>

          <div className="service-card">
            <span>📝</span>
            <h3>Attractive Content</h3>
            <p>
              We help present your message clearly so your website communicates
              your value.
            </p>
          </div>
        </div>
      </section>

      <Stats />

      <section className="split-section page-section">
        <div className="image-placeholder">
          <span>🌐</span>
          <p>Website preview image</p>
        </div>

        <div>
          <p className="eyebrow">Why Website Matters</p>
          <h2>Why Do You Need A Website?</h2>
          <p>
            Your website should represent your company’s vision, personality,
            and professionalism. It is more than an online brochure. It is a
            digital space where customers learn who you are, what you offer, and
            why they should trust you.
          </p>
          <p>
            Your website works even when you are offline. It can attract
            customers, answer questions, showcase services, and support sales 24
            hours a day.
          </p>
        </div>
      </section>

      <section id="website-services" className="page-section">
        <div className="section-heading center">
          <p className="eyebrow">Our Services</p>
          <h2>What We Can Do For Your Website</h2>
          <p>
            We offer complete website design, development, and optimization
            solutions.
          </p>
        </div>

        <div className="cards-grid three">
          <div className="service-card">
            <span>💎</span>
            <h3>Branding</h3>
            <p>
              We make sure your website reflects your brand identity, mission,
              and visual style.
            </p>
          </div>

          <div className="service-card">
            <span>🛒</span>
            <h3>E-commerce</h3>
            <p>
              We design online stores that are easy to browse, manage, and use.
            </p>
          </div>

          <div className="service-card">
            <span>🎞</span>
            <h3>Web Animation</h3>
            <p>
              We use animation to make your website more dynamic and engaging.
            </p>
          </div>

          <div className="service-card">
            <span>⚡</span>
            <h3>Performance Testing</h3>
            <p>
              We test speed, responsiveness, and stability to improve user
              experience.
            </p>
          </div>

          <div className="service-card">
            <span>☁</span>
            <h3>Web Hosting</h3>
            <p>
              We help your website stay accessible, protected, and ready for
              visitors.
            </p>
          </div>

          <div className="service-card">
            <span>📊</span>
            <h3>Web Analysis</h3>
            <p>
              We help you understand visitor behavior and recommend improvements.
            </p>
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}

export default WebsiteDesign;