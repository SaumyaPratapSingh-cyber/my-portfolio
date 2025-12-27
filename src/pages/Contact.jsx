import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import "./pages.scss";

const Contact = () => {
  const formRef = useRef();
  const [formState, setFormState] = useState({ error: false, success: false, message: "" });

  const sendEmail = (e) => {
    e.preventDefault();
    setFormState({ ...formState, message: "Sending..." });

    emailjs
      .sendForm(
        'service_c1yph4c',      // User's Service ID
        'template_r06h1yg',     // User's Template ID
        formRef.current,
        'Sajj7qcM_shfupHcY'       // User's Public Key
      )
      .then(
        (result) => {
          setFormState({ error: false, success: true, message: "Message sent successfully!" });
          formRef.current.reset(); // Clear the form after sending
        },
        (error) => {
          setFormState({ error: true, success: false, message: "Failed to send message. Please try again." });
        }
      );
  };

  return (
    <div className="contact-modern-page" id="contact">
      <motion.div
        className="contact-modern-card"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* --- LEFT SIDE: IMAGE --- */}
        <div className="contact-image-side">
          <div className="image-wrapper">
            <img src="/vector-1.png" alt="Contact Illustration" />
            <div className="glow-effect"></div>
          </div>
        </div>

        {/* --- RIGHT SIDE: FORM --- */}
        <div className="contact-form-side">
          <div className="contact-header">
            <h1>Let's <span className="highlight">Connect</span></h1>
            <p>Ready to start your next project? Drop me a line.</p>
          </div>

          <form ref={formRef} onSubmit={sendEmail} className="modern-form">
            <div className="input-group">
              <input type="text" name="from_name" placeholder="Name" required />
            </div>
            <div className="input-group">
              <input type="email" name="from_email" placeholder="Email Address" required />
            </div>
            <div className="input-group">
              <textarea name="message" rows="5" placeholder="Project Details..." required></textarea>
            </div>

            <button type="submit" className="submit-btn">
              <span>Send Message</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
            </button>

            {formState.message && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className={`status-message ${formState.error ? "error" : "success"}`}
              >
                {formState.message}
              </motion.div>
            )}
          </form>

          <div className="contact-socials-mini">
            <p className="email-link">saumyrajpoot666@gmail.com</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;