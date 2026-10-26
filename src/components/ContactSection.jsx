
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function ContactSection() {
  const form = useRef(null);
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState("");
  const [success, setSuccess] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();

    if (sending) return;

    setSending(true);
    setStatus("");

    try {
      await emailjs.sendForm(
        import.meta.env.LA_EMAILJS_SERVICE_ID,
        import.meta.env.LA_EMAILJS_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.LA_EMAILJS_PUBLIC_KEY,
        }
      );

      setSuccess(true);
      setStatus("Your message has been sent successfully!");
      form.current.reset();

    } catch (error) {
      console.error("EmailJS Error:", error);
      setSuccess(false);
      setStatus("Something went wrong. Please try again.");

    } finally {
      setSending(false);
    }
  };

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

      <form
        ref={form}
        className="contact-form"
        onSubmit={sendEmail}
      >
        <div className="form-row">
          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            name="from_email"
            placeholder="Your Email"
            required
          />
        </div>

        <input
          type="text"
          name="subject"
          placeholder="Your Subject"
          required
        />

        <textarea
          name="message"
          placeholder="Your Message"
          required
        ></textarea>

        <button type="submit" disabled={sending}>
          {sending ? "Sending..." : "Send Message →"}
        </button>

        {status && (
          <p
            role="status"
            style={{
              color: success ? "#16a34a" : "#dc2626",
              marginTop: "12px",
            }}
          >
            {status}
          </p>
        )}
      </form>
    </section>
  );
}

export default ContactSection;
