import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import "../assets/styles/Footer.css";

export function Footer() {
  const year = new Date().getFullYear();

  const socialLinks = [
    { icon: FaFacebookF, href: "#", label: "Facebook" },
    {
      icon: FaInstagram,
      href: "https://www.instagram.com/inchfeetinterior/",
      label: "Instagram",
    },
    { icon: FaTwitter, href: "#", label: "Twitter" },
    { icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
  ];

  const companyLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Featured Products", href: "#products" },
    { name: "Offers", href: "#offers" },
    { name: "Process", href: "#process" },
    { name: "Contact", href: "#contacts" },
  ];

  const serviceLinks = [
    { name: "Residential Design", href: "#services" },
    { name: "Commercial Projects", href: "#services" },
    { name: "Lighting Designs", href: "#services" },
    { name: "Design Packages", href: "#offers" },
  ];



  

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content grid-layout">
          {/* Left side */}
          <div className="footer-brand">
            <h3 className="footer-title">INCHFEET</h3>
            <p className="footer-subtitle">Interior and Projects</p>
            <p className="footer-description">
              Transforming spaces with innovative interior design solutions for
              residential and commercial projects. Creating beautiful,
              functional environments that inspire.
            </p>
          </div>

          {/* Right side */}
          <div className="footer-links-section">
            <div>
              <h4 className="footer-heading">Company</h4>
              <ul className="footer-links-list">
                {companyLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="footer-link">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="footer-heading">Services</h4>
              <ul className="footer-links-list">
                {serviceLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="footer-link">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p className="copyright">
            © {year} INCHFEET Interior and Projects. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="social-links">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                aria-label={social.label}
                className="social-link"
              >
                <social.icon className="social-icon" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
