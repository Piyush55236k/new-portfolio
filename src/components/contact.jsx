import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import emailjs from "@emailjs/browser";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const container = useRef();
  const form = useRef();
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  useGSAP(() => {
    gsap.from(".divider span", {
      scaleX: 0,
      transformOrigin: "center",
      duration: 1,
      scrollTrigger: {
        trigger: ".divider",
        start: "top 85%",
      },
    });

    gsap.from(".input-group", {
      y: 40,
      opacity: 0,
      stagger: 0.15,
      scrollTrigger: {
        trigger: ".contact-section",
        start: "top 75%",
      },
    });
  }, { scope: container });

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          setLoading(false);
          form.current.reset();
        },
        (error) => {
          console.error(error);
          setStatus("Failed to send message.");
          setLoading(false);
        }
      );
  };

  return (
    <section ref={container} className="contact-section">
      <div className="contact-header">
        <h1>CONTACT</h1>

        <div className="divider">
          <span></span>
          <span className="diamond">w</span>
          <span></span>
        </div>
      </div>

      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <div className="input-group">
          <input
            type="text"
            name="user_name"
            placeholder="ENTER YOUR NAME"
            required
          />
        </div>

        <div className="input-group">
          <input
            type="email"
            name="user_email"
            placeholder="ENTER YOUR EMAIL"
            required
          />
        </div>

        <div className="input-group">
          <input
            type="text"
            name="phone"
            placeholder="PHONE NUMBER"
          />
        </div>

        <div className="input-group textarea">
          <textarea
            name="message"
            placeholder="YOUR MESSAGE"
            required
          ></textarea>
        </div>

        <button type="submit" className="submit-btn" disabled={loading}>
          <span></span>
          {loading ? "SENDING..." : "SUBMIT"}
          <span></span>
        </button>

        {status && <p className="form-status">{status}</p>}
      </form>
    </section>
  );
};

export default Contact;