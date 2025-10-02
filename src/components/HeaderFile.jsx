import React, { useState } from "react";
import "../assets/styles/headerFile.css";
// Using FaBars and FaTimes for cleaner icons
import { FaBars, FaTimes } from "react-icons/fa";

export default function HeaderFile() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Service", href: "#services" },
    { name: "Products", href: "#products" },
    { name: "Offers", href: "#offers" },
    { name: "Process", href: "#process" },
    { name: "Contact", href: "#contacts" },
  ];

  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="logo">
          <h1>INCHFEET</h1>
          {/* <img src="src/assets/images/logo/logo.jpg" /> */}
          <p>Interior and Projects</p>
        </div>

        {/* Desktop Navigation & Button */}
        <nav className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
          {/* Button is inside the nav for mobile, but styled separately for desktop */}
          {/* <button
            className="connect-btn"
            onClick={() => {
              setIsMenuOpen(false),
                document
                  .getElementById("contacts")
                  .scrollIntoView({ behavior: "smooth" });
            }}
          >
            Connect Now!
          </button> */}
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </header>
  );
}
