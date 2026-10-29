
import { useState } from "react";

const packages = {
  web: {
    title: "Web Application Packages",
    plans: [
      {
        name: "Basic",
        price: "$100",
        features: [
          "Up to 3 core features",
          "Responsive design",
        ],
      },
      {
        name: "Standard",
        price: "$150",
        features: [
          "Up to 4 core features",
          "Basic database integration",
          "Authentication and admin panel",
        ],
      },
      {
        name: "Premium",
        price: "$200",
        features: [
          "Up to 6 core features",
          "User login and authentication",
          "Database and API integration",
          "Admin dashboard",
        ],
      },
    ],
  },

  marketing: {
    title: "Marketing Packages",
    plans: [
      {
        name: "Basic",
        price: "$50/mo",
        features: [
          "2 social media platforms",
          "8 posts per month",
          "Monthly report",
        ],
      },
      {
        name: "Standard",
        price: "$100/mo",
        features: [
          "3 social media platforms",
          "12 posts per month",
          "Basic SEO optimization",
          "Monthly report",
        ],
      },
      {
        name: "Premium",
        price: "$200/mo",
        features: [
          "4 social media platforms",
          "20 posts per month",
          "Advanced content strategy",
          "SEO & ad management",
        ],
      },
    ],
  },

  ai: {
    title: "AI Solutions Packages",
    plans: [
      {
        name: "Basic",
        price: "$75",
        features: [
          "Custom AI automation with 1 workflow",
          "Website integration and basic setup",
        ],
      },
      {
        name: "Standard",
        price: "$150",
        features: [
          "Custom AI automation",
          "Up to 3 workflows",
          "API or CRM integration",
          "Custom responses and testing",
        ],
      },
      {
        name: "Premium",
        price: "$300",
        features: [
          "Advanced AI agents & automation",
          "Multiple system integrations",
          "AI knowledge base integration",
          "Up to 5 automated workflows",
        ],
      },
    ],
  },
};

export default function PricingSection() {
  const [selected, setSelected] = useState("web");
  const [showPackages, setShowPackages] = useState(false);

  const current = packages[selected];

  return (
    <section className="sp-pricing" id="pricing">
      <span className="sp-pricing-eyebrow">
        OUR PRICING
      </span>

      <h2>Explore Our Packages</h2>

      <p className="sp-pricing-intro">
        Explore our flexible solutions, compare packages,
        and find the right fit for your business.
      </p>

      <div className="sp-pricing-actions">
        <button
          type="button"
          className="sp-pricing-primary"
          onClick={() => setShowPackages(!showPackages)}
        >
          {showPackages ? "Hide Packages" : "View Packages"}
        </button>

        <a
          href="/SolutionsPlus-Pricing.pdf"
          download="SolutionsPlus-Pricing.pdf"
          className="sp-pricing-secondary"
        >
          ↓ Download Brochure
        </a>
      </div>

      {showPackages && (
        <div className="sp-pricing-content">
          <div className="sp-pricing-tabs">
            <button
              type="button"
              className={selected === "web" ? "active" : ""}
              onClick={() => setSelected("web")}
            >
              Web Applications
            </button>

            <button
              type="button"
              className={selected === "marketing" ? "active" : ""}
              onClick={() => setSelected("marketing")}
            >
              Marketing
            </button>

            <button
              type="button"
              className={selected === "ai" ? "active" : ""}
              onClick={() => setSelected("ai")}
            >
              AI Solutions
            </button>
          </div>

          <h3>{current.title}</h3>

          <div className="sp-pricing-grid">
            {current.plans.map((plan) => (
              <div className="sp-pricing-card" key={plan.name}>
                <h3>{plan.name}</h3>

                <div className="sp-pricing-price">
                  {plan.price}
                </div>

                <ul>
                  {plan.features.map((feature) => (
                    <li key={feature}>
                      <span>✓</span> {feature}
                    </li>
                  ))}
                </ul>

                <a href="/contact">
                  Get Started
                </a>
              </div>
            ))}
          </div>

          <p className="sp-pricing-note">
            Custom requirements, external subscriptions,
            hosting, and advertising budgets are quoted
            separately.
          </p>
        </div>
      )}
    </section>
  );
}
