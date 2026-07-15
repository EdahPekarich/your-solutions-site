import ContactSection from "../components/ContactSection";
import contact from "../assets/contact.jpg";

function Contact() {
  return (
    <>
      <section className="inner-hero page-section contact-hero">
        <div>
          <p className="eyebrow">Contact Us</p>
          <h1>Let’s Start Your Project</h1>
          <h3>Tell us what you need and we’ll help you find the right solution.</h3>
          <p>
            Whether you need marketing, website design, cybersecurity, strategic
            planning, or creative design, our team is ready to help.
          </p>
        </div>

       <div className="image-placeholder large">
       <img
         src={contact}
         alt="Contact"
         className="hero-image"
       />
     </div>
      </section>

      <ContactSection />
    </>
  );
}

export default Contact;