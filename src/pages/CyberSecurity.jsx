import Stats from "../components/Stats";
import ContactSection from "../components/ContactSection";

function CyberSecurity() {
  return (
    <>
      <section className="inner-hero page-section">
        <div>
          <p className="eyebrow">Cyber Security</p>
          <h1>The Solution To Your Security Issues</h1>
          <h3>Protect your business, systems, data, and digital assets.</h3>
          <p>
            Cybersecurity is no longer optional. We help businesses identify
            risks, strengthen defenses, and protect their operations from modern
            digital threats through practical and professional security
            solutions.
          </p>

          <div className="button-row">
            <a href="#security-services" className="btn-primary">
              Consult Now
            </a>
            <a href="/contact" className="btn-secondary">
              Contact Us
            </a>
          </div>
        </div>

        <div className="image-placeholder large">
          <span>🛡️</span>
          <p>Cyber Security Image</p>
          <small>Replace with real image</small>
        </div>
      </section>

      <section className="split-section page-section">
        <div className="image-placeholder">
          <span>🔐</span>
          <p>Security consulting image</p>
        </div>

        <div>
          <p className="eyebrow">Our Services</p>
          <h2>We provide digital security solutions.</h2>
          <p>
            We provide digital security solutions designed to protect your
            business, customers, data, and infrastructure. Our services combine
            technical expertise, strategic planning, and practical
            recommendations that fit your business needs.
          </p>
        </div>
      </section>

      <Stats />

      <section id="security-services" className="page-section">
        <div className="section-heading center">
          <p className="eyebrow">Security Services</p>
          <h2>Cyber Security Services</h2>
          <p>
            Our services help businesses understand risks, prevent incidents,
            and improve cyber resilience.
          </p>
        </div>

        <div className="cards-grid three">
          <div className="service-card">
            <span>🧑‍💼</span>
            <h3>Cybersecurity Consulting</h3>
            <p>
              Get expert cybersecurity guidance without hiring a full internal
              team.
            </p>
          </div>

          <div className="service-card">
            <span>🧪</span>
            <h3>Penetration Testing</h3>
            <p>
              We test networks, applications, and systems to identify weaknesses
              before attackers can exploit them.
            </p>
          </div>

          <div className="service-card">
            <span>📡</span>
            <h3>Network Security Monitoring</h3>
            <p>
              We help reduce the risk of intrusions, downtime, and suspicious
              activity.
            </p>
          </div>

          <div className="service-card">
            <span>🧠</span>
            <h3>Virtual CISO</h3>
            <p>
              Get strategic cybersecurity leadership at a more flexible cost.
            </p>
          </div>

          <div className="service-card">
            <span>👁</span>
            <h3>Cyber Threat Intelligence</h3>
            <p>
              We help your team understand threats and improve detection and
              response processes.
            </p>
          </div>

          <div className="service-card">
            <span>🎓</span>
            <h3>Cyber Security Training</h3>
            <p>
              We train employees and IT teams to reduce human-related security
              risks.
            </p>
          </div>
        </div>
      </section>

      <section className="split-section page-section">
        <div>
          <p className="eyebrow">Why It Matters</p>
          <h2>Why is cyber security important for your business?</h2>
          <p>
            For many businesses, a cyberattack is not a matter of if, but when.
            Without the right security infrastructure, companies risk data loss,
            downtime, financial damage, and loss of customer trust.
          </p>
        </div>

        <div className="image-placeholder">
          <span>🧬</span>
          <p>Security protection image</p>
        </div>
      </section>

      <section className="page-section">
        <div className="section-heading center">
          <p className="eyebrow">Why Choose Us</p>
          <h2>Secure, Flexible, and Transparent</h2>
        </div>

        <div className="cards-grid three">
          <div className="service-card">
            <span>🔍</span>
            <h3>Transparent Service</h3>
            <p>
              We provide clear assessments, practical advice, and strategic
              recommendations.
            </p>
          </div>

          <div className="service-card">
            <span>🧑‍💻</span>
            <h3>Excellent Technical Expertise</h3>
            <p>
              We help design, implement, manage, and improve cybersecurity
              operations.
            </p>
          </div>

          <div className="service-card">
            <span>⚙</span>
            <h3>Flexible Solutions</h3>
            <p>
              We create cost-effective security solutions that reduce risk and
              follow best practices.
            </p>
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}

export default CyberSecurity;