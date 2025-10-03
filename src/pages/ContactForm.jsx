// ContactForm.jsx
import React from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa"; // Removed social icons
import "../assets/styles/ContactForm.css";

import Contact from "../assets/images/poster2.png";
const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Project Inquiry Sent! We'll be in touch soon.");
  };

  return (
    <section id="contacts" className="contact-section">
      <div className="contact-header">
        <h2 className="section-titles">Ready to Start Your Project?</h2>
        <p className="section-subtitles">
          Tell us about your design vision and we'll be in touch within 24 hours
          to schedule a consultation.
        </p>
      </div>

      <div className="contact-grid">
        {/* LEFT COLUMN: THE CONTACT FORM */}
        <div className="form-column">
          <form onSubmit={handleSubmit} className="contact-form">
            {/* Each input group now implicitly takes full width */}
            <div className="input-group full-width">
              {" "}
              {/* Added full-width for clarity, though it's default now */}
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" name="name" required />
            </div>

            <div className="input-group full-width">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" name="email" required />
            </div>

            <div className="input-group full-width">
              <label htmlFor="phone">Phone Number</label>
              <input type="tel" id="phone" name="phone" />
            </div>

            <div className="input-group full-width">
              <label htmlFor="projectDetails">
                Project Details & Requirements
              </label>
              <textarea
                id="projectDetails"
                name="projectDetails"
                rows="6"
                placeholder="e.g., 3BHK flat in Mumbai, focusing on modular kitchen and master bedroom..."
                required
              ></textarea>
            </div>

            <button type="submit" className="cta-button-contact">
              Send Project Inquiry
            </button>
          </form>
        </div>

        {/* RIGHT COLUMN: THE VISUAL BLOCK */}
        <div className="image-column">
          <img
            src={Contact}
            alt="Interior design consultant smiling"
            className="contact-visual-image"
          />
        </div>
      </div>

      {/* FOOTER DETAIL BAR - Social links removed */}
      <div className="contact-detail-bar">
        <div className="detail-item">
          <FaMapMarkerAlt />
          <p>18, Shantha Avenue, Nerkundram, Chennai-600107</p>
        </div>
        <div className="detail-item">
          <FaPhone />
          <p>+91 987 654 3210</p>
        </div>
        <div className="detail-item">
          <FaEnvelope />
          <p>
            {" "}
            <a
              href="mailto:projects@inchfeet.in"
              style={{
                textDecoration: "none",
                color: "#1c1c1c",
                cursor: "pointer",
              }}
            >
              projects@inchfeet.in
            </a>{" "}
          </p>
        </div>
        {/* Removed: <div className="social-links">...</div> */}
      </div>
    </section>
  );
};

export default ContactForm;
