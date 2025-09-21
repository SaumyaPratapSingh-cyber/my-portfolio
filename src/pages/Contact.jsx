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
        'service_c1yph4c',      // Paste your Service ID here
        'template_r06h1yg',     // Paste your Template ID here
        formRef.current,
        'Sajj7qcM_shfupHcY'       // Paste your Public Key here
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
    <motion.div 
      className="page contact-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="wrapper">
        <motion.div 
          className="text-content"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
        >
          <h1>Get in <span>Touch</span></h1>
          <p>I'm currently open to new opportunities and collaborations. My inbox is always open, so feel free to reach out!</p>
          <div className="contact-details">
            <p><strong>Email:</strong> <span>saumyrajpoot666@gmail.com</span></p>
            <p><strong>Location:</strong> <span>Prayagraj, Uttar Pradesh, India</span></p>
          </div>
        </motion.div>
        <motion.form 
          ref={formRef}
          onSubmit={sendEmail}
          className="contact-form"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <input type="text" placeholder="Your Name" required name="from_name" />
          <input type="email" placeholder="Your Email" required name="from_email" />
          <textarea placeholder="Your Message" rows="6" required name="message"></textarea>
          <button type="submit" className="primary">Send Message</button>
          {formState.message && (
            <span className={formState.error ? "error-message" : "success-message"}>
              {formState.message}
            </span>
          )}
        </motion.form>
      </div>
    </motion.div>
  );
};

export default Contact;