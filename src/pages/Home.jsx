import { Link } from "react-router-dom";
import Stats from "../components/Stats";
import ContactSection from "../components/ContactSection";
import main2 from "../assets/main2.jpg";
import main1 from "../assets/main1.jpg";
import brandCampaignImage from "../assets/brand.png";
import websiteProjectImage from "../assets/rolls.png";
import securityImage from "../assets/aiba.png";
import creativeIdentityImage from "../assets/logo.png";
const portfolioProjects = [
  {
    icon: "📣",
    title: "Brand Campaign",
    category: "Marketing",
    image: brandCampaignImage,
    description:
      "Creative marketing campaigns designed to improve brand visibility, engagement, and customer growth.",
  },
  {
    icon: "💻",
    title: "Corporate Website",
    category: "Web Development",
    image: websiteProjectImage,
    description:
      "Modern, responsive websites created to provide a professional and seamless digital experience.",
  },
  {
    icon: "🛡️",
    title: "Security Consulting",
    category: "Cyber Security",
    image: securityImage,
    description:
      "Professional cybersecurity assessments and solutions designed to protect systems, data, and operations.",
  },
  {
    icon: "🎨",
    title: "Creative Identity",
    category: "Design",
    image: creativeIdentityImage,
    description:
      "Distinctive branding, logo design, and visual assets that create a memorable company identity.",
  },
];
const homeServices = [
  {
    icon: "🚀",
    title: "Digital Marketing",
    text: "Grow your brand, reach more customers, and turn attention into real business results.",
    link: "/services/digital_marketing",
  },
  {
    icon: "💻",
    title: "Website Design & Development",
    text: "Modern, responsive, fast websites built to represent your business professionally.",
    link: "/services/website_design",
  },
  {
    icon: "🛡️",
    title: "Cyber Security",
    text: "Protect your business, systems, data, and customers from digital threats.",
    link: "/services/security",
  },
  {
    icon: "📈",
    title: "Strategic Planning",
    text: "Smart business planning for long-term growth, clarity, and execution.",
    link: "/services/seo",
  },
  {
    icon: "🎨",
    title: "Creative Designs",
    text: "Brand visuals, graphics, and creative assets that make your company stand out.",
    link: "/services/creative_designs",
  },
];

function Home() {
  return (
    <>
      <section className="hero page-section">
        <div className="hero-text">
          <h1>
            We Create <span>Digital Experiences</span> That Drive Results
          </h1>

          <p>
            Simplify your problems with Solutions Plus. We help businesses grow
            through strategy, design, development, marketing, and cybersecurity.
          </p>

          <div className="button-row">
            <Link
              to="/services/digital_marketing"
              className="btn-primary"
            >
              Explore Services
            </Link>

            <Link to="/contact" className="btn-secondary">
              Consult Us
            </Link>
          </div>
        </div>

        <div className="responsive-image-frame hero-media">
          <img
            src={main1}
            alt="Digital marketing"
            className="responsive-image home-main-image"
          />
        </div>
      </section>

      <section className="page-section">
        <div className="section-heading center">
          <p className="eyebrow">What We Do</p>
          <h2>Our Services</h2>
          <p>
            We provide complete digital solutions designed to help your business
            grow, protect itself, and stand out.
          </p>
        </div>

        <div className="cards-grid five">
          {homeServices.map((service) => (
            <Link
              to={service.link}
              className="service-card"
              key={service.title}
            >
              <span>{service.icon}</span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </Link>
          ))}
        </div>
      </section>

      <Stats />

      <section className="split-section page-section">
        <div className="responsive-image-frame split-media">
          <img
            src={main2}
            alt="Solutions Plus digital services"
            className="responsive-image home-about-image"
          />
        </div>

        <div className="split-content">
          <p className="eyebrow">About Solutions Plus</p>

          <h2>We Build Smart Digital Solutions For Growing Businesses</h2>

          <p>
            Solutions Plus is a creative digital agency focused on helping
            businesses simplify challenges and turn ideas into polished,
            professional, and effective digital experiences.
          </p>

          <p>
            From strategy and branding to secure websites and marketing
            campaigns, we bring together creativity, technology, and business
            thinking.
          </p>

          <Link to="/about" className="btn-primary">
            Learn More
          </Link>
        </div>
      </section>

      <section className="page-section">
        <div className="section-heading center">
          <p className="eyebrow">Simple Steps. Perfect Results.</p>
          <h2>Our Work Process</h2>
        </div>

        <div className="process-grid">
          <div>
            <span>01</span>
            <h3>Discussion</h3>
            <p>We listen to your goals, problems, and business needs.</p>
          </div>

          <div>
            <span>02</span>
            <h3>Analysis</h3>
            <p>We analyze your requirements and identify the best solution.</p>
          </div>

          <div>
            <span>03</span>
            <h3>Proposal</h3>
            <p>We prepare a clear plan, timeline, and project direction.</p>
          </div>

          <div>
            <span>04</span>
            <h3>Execution</h3>
            <p>We build, refine, and deliver the final solution.</p>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="section-heading center">
          <p className="eyebrow">Portfolio</p>
          <h2>Our Recent Works</h2>
        </div>

       <div className="portfolio-grid">
  {portfolioProjects.map((project) => (
    <div
      className="portfolio-card portfolio-image-card"
      key={project.title}
    >
      <img
        src={project.image}
        alt={project.title}
        className="portfolio-background-image"
      />

      <div className="portfolio-image-overlay"></div>

      <div className="portfolio-card-content">
        <span className="portfolio-icon">{project.icon}</span>

        <div className="portfolio-card-info">
          <h3>{project.title}</h3>

          <p className="portfolio-category">
            {project.category}
          </p>

          <p className="portfolio-hover-description">
            {project.description}
          </p>
        </div>
      </div>
    </div>
  ))}
</div>
      </section>

      <ContactSection />
    </>
  );
}

export default Home;