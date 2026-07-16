function ContactSection() {
  return (
    <section className="contact-section">
      <div className="contact-left">
        <p className="eyebrow">Get in touch</p>
        <h2>Let’s Start Your Project</h2>
        <p>
          Have a project in mind? Send us a message and we will help you find the
          right solution.
        </p>

        <div className="contact-details">
          <div>
            <span>☎</span>
            <p>+41 78 301 55 42</p>
          </div>
          <div>
            <span>✉</span>
            <p>e.pekarich@gmail.com</p>
          </div>
          <div>
            <span>⌖</span>
            <p>Haldengasse 41, Eschen, Liechtenstein</p>
          </div>
        </div>
      </div>

      <form className="contact-form">
        <div className="form-row">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
        </div>
        <input type="text" placeholder="Your Subject" />
        <textarea placeholder="Your Message"></textarea>
        <button type="button">Send Message →</button>
      </form>
    </section>
  );
}

export default ContactSection;