import React, { useState } from "react";
import "../assets/styles/OffersPage.css";
import { FaShieldAlt, FaWarehouse, FaCalendarCheck } from "react-icons/fa";
import { FaRegCircle, FaRegCheckCircle } from "react-icons/fa";

const packageData = [
  {
    id: "essenza",
    name: "The Essenza",
    tagline: "Ideal for single-room makeovers & budget-conscious clients.",
    isFeatured: false,
    price: "₹ 4,99,000",
    originalPrice: "₹ 6,50,000",
    description:
      "Covers the core design and fittings for a stylish, functional space.",
    features: [
      {
        id: 1,
        text: "Foyer: Shoe rack with cabinets and shutters",
        icon: FaRegCheckCircle,
        included: true,
      },
      {
        id: 2,
        text: "Living: Premium TV display unit with aluminium profile",
        icon: FaRegCheckCircle,
        included: true,
      },
      {
        id: 3,
        text: "Dining: Medley black finish 6-seater dining table",
        icon: FaRegCheckCircle,
        included: true,
      },
      {
        id: 4,
        text: "Master Bedroom: Soft close 3-door hinged wardrobe",
        icon: FaRegCheckCircle,
        included: true,
      },
      {
        id: 5,
        text: "Kids Room: Custom-made study unit",
        icon: FaRegCircle,
        included: false,
        excludeReason: "Not included",
      },
      {
        id: 6,
        text: "Kitchen: Hettich (German Made - 15 years warranty) Accessories",
        icon: FaRegCircle,
        included: false,
        excludeReason: "Standard fittings only",
      },
      {
        id: 7,
        text: "Warranty: Standard 5-Year Structural Warranty",
        icon: FaRegCheckCircle,
        included: true,
      },
    ],
  },
  {
    id: "elevare",
    name: "The Elevare",
    tagline: "The complete, full-service package for 2/3 BHK homes.",
    isFeatured: true, // This one is highlighted
    price: "₹ 11,41,000",
    originalPrice: "₹ 15,84,000",
    description:
      "Our most popular choice. Everything from 3D design to dedicated execution management.",
    features: [
      {
        id: 1,
        text: "Foyer: Shoe rack & ledges, Round mirror, Cement wall texture",
        icon: FaRegCheckCircle,
        included: true,
      },
      {
        id: 2,
        text: "Living: Premium TV unit, Curtain lining, Sofa set (4-seater)",
        icon: FaRegCheckCircle,
        included: true,
      },
      {
        id: 3,
        text: "Dining: Medley black finish 6-seater dining table + 3-seater bench",
        icon: FaRegCheckCircle,
        included: true,
      },
      {
        id: 4,
        text: "Master Bedroom: King size bed, Dressing unit, Soft close hinged wardrobe",
        icon: FaRegCheckCircle,
        included: true,
      },
      {
        id: 5,
        text: "Kids Room: Custom-made study unit, Queen size bed",
        icon: FaRegCheckCircle,
        included: true,
      },
      {
        id: 6,
        text: "Kitchen: Hettich (German Made - 15 years warranty) Accessories",
        icon: FaRegCheckCircle,
        included: true,
      },
      {
        id: 7,
        text: "Warranty: Premium 10-Year Structural Warranty",
        icon: FaRegCheckCircle,
        included: true,
      },
    ],
  },
  {
    id: "signature",
    name: "The Signature",
    tagline:
      "Luxury, end-to-end design for large villas and personalized projects.",
    isFeatured: false,
    price: "Contact Us", // Custom price for premium service
    originalPrice: "Premium Tier",
    description:
      "The ultimate concierge service: Unlimited customization and white-glove execution.",
    features: [
      {
        id: 1,
        text: "Foyer: Custom-designed entry with imported finishes",
        icon: FaRegCheckCircle,
        included: true,
      },
      {
        id: 2,
        text: "Living: Full-scale modular partition, Custom-made sofa set (4-seater)",
        icon: FaRegCheckCircle,
        included: true,
      },
      {
        id: 3,
        text: "Dining: Full-set dining with custom lighting and seating",
        icon: FaRegCheckCircle,
        included: true,
      },
      {
        id: 4,
        text: "Master Bedroom: Complete set with all accessories and premium bed setting",
        icon: FaRegCheckCircle,
        included: true,
      },
      {
        id: 5,
        text: "Kids Room: Complete set with all accessories and premium bed setting",
        icon: FaRegCheckCircle,
        included: true,
      },
      {
        id: 6,
        text: "Kitchen: All German-made accessories, Hood and Hob - Faber (Premium Model)",
        icon: FaRegCheckCircle,
        included: true,
      },
      {
        id: 7,
        text: "Warranty: Extended 15-Year Structural + Priority Support",
        icon: FaRegCheckCircle,
        included: true,
      },
    ],
  },
];
const Package = () => {
  const [expanded, setExpanded] = useState({}); // track expanded cards

  const toggleExpand = (id) => {
    setExpanded((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section className="offers-page-sections" id="offers">
      <div className="offers-header-containers">
        <h1>Unlock Your Dream Home: Exclusive Design Packages</h1>
        <p className="subtitless">
          Simplified pricing with transparent deliverables for every project
          size. Get started today!
        </p>

        <div className="trust-badgess">
          <div>
            <FaShieldAlt /> 10-Year Warranty
          </div>
          <div>
            <FaWarehouse /> Factory-Built Quality
          </div>
          <div>
            <FaCalendarCheck /> On-Time Guarantee
          </div>
        </div>
      </div>

      <div className="packages-grids">
        {packageData.map((pkg) => {
          const isExpanded = expanded[pkg.id] || false;

          return (
            <div
              key={pkg.id}
              className={`package-cards ${pkg.isFeatured ? "featureds" : ""}`}
            >
              {pkg.isFeatured && (
                <div className="featured-badges">MOST POPULAR</div>
              )}

              <div className="package-headers">
                <h3>{pkg.name}</h3>
                <p className="taglines">{pkg.tagline}</p>
              </div>

              <div className="price-blocks">
                <span className="original-prices">{pkg.originalPrice}</span>
                <span className="offer-prices">{pkg.price}</span>
                <p className="price-notes">
                  *Estimated starting price. Final cost based on customization.
                </p>
              </div>

              {/* Features - only show on desktop OR if expanded */}
              <div className={`features-lists ${isExpanded ? "show" : "hide"}`}>
                {/* Description */}
                <p className="descriptions">{pkg.description}</p>
                <ul>
                  {pkg.features.map((feature) => (
                    <li
                      key={feature.id}
                      className={feature.included ? "includeds" : "excludeds"}
                    >
                      <feature.icon className="feature-icons" />
                      {feature.text}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Toggle Button (only visible on mobile) */}
              <button
                className="toggle-btn"
                onClick={() => toggleExpand(pkg.id)}
              >
                {isExpanded ? "View Less" : "View More"}
              </button>

              <a
                href="#contacts"
                onClick={(e) => {
                  e.preventDefault();
                  const section = document.getElementById("contacts");
                  if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="contact-buttons"
              >
                {pkg.id === "signature"
                  ? "REQUEST QUOTE"
                  : "BOOK FREE CONSULTATION"}
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Package;
