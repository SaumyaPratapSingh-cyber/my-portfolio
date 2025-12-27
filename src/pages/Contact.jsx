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
    <div className="contact-inverted-wrapper" id="contact">
      {/* LEFT SIDE: WHITE + IMAGE */}
      <div className="contact-left-white">
        <div className="image-container">
          <img src="/conpage.png" alt="Contact Illustration" />
        </div>
      </div>

      {/* RIGHT SIDE: BLACK + FORM */}
      <div className="contact-right-black">
        <div className="form-container">
          <h2>Message Us</h2>

          <form ref={formRef} onSubmit={sendEmail} className="inverted-form">
            <div className="input-group">
              <label>Name</label>
              <input type="text" name="from_name" required />
            </div>
            <div className="input-group">
              <label>Email</label>
              <input type="email" name="from_email" required />
            </div>
            <div className="input-group">
              <label>Message</label>
              <textarea name="message" rows="5" required></textarea>
            </div>

            <button type="submit" className="submit-btn-inverted">
              Submit
            </button>

            {formState.message && (
              <p className={`status-msg ${formState.error ? "error" : "success"}`}>
                {formState.message}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;