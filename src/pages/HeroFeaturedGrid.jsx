// HybridFeaturedSection.jsx
import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight, FaShoppingCart } from "react-icons/fa";
import "../assets/styles/HeroFeaturedGrid.css";

// images
// ḷight products
import light from "../assets/images/products/light.jpeg";
import light2 from "../assets/images/products/light2.jpeg";
import light3 from "../assets/images/products/light3.jpeg";
import light4 from "../assets/images/products/light4.jpeg";

// poster
import poster from "../assets/images/poster3.png";

// extra products
import product from "../assets/images/product.jpg";
import product2 from "../assets/images/product2.jpg";
import product3 from "../assets/images/product3.jpg";
import product4 from "../assets/images/product4.jpg";
import product5 from "../assets/images/product5.jpg";
import product6 from "../assets/images/product6.jpg";

// --- Data ---
const heroProduct = {
  title: "The Signature Design Package: Luxe Edition",
  description:
    "Experience end-to-end luxury with custom 3D renders, personalized material sourcing, and dedicated project management. Start your dream home today.",
  image: poster,
};

const secondaryProducts = [
  {
    id: 1,
    title: "Smart Home Integration",
    image: light,
    price: "2,500",
  },
  {
    id: 2,
    title: "Premium Lighting Kits",
    image: light2,
    price: "800",
  },
  {
    id: 3,
    title: "Exclusive Artwork Prints",
    image: light3,
    price: "450",
  },
  {
    id: 4,
    title: "Eco-Friendly Materials",
    image: light4,
    price: "3,200",
  },
];

// Additional products for the horizontal scroller
const extraProducts = [
  {
    id: 5,
    title: "Modernist Sofa Set",
    category: "Living Room",
    price: "$2,800",
    image: product,
  },
  {
    id: 6,
    title: "Luxe Master Bed",
    category: "Bedroom",
    price: "$4,500",
    image: product2,
  },
  {
    id: 7,
    title: "Modular Kitchen Unit",
    category: "Kitchen",
    price: "$7,200",
    image: product3,
  },
  {
    id: 8,
    title: "Minimalist Desk",
    category: "Office",
    price: "$950",
    image: product4,
  },
  {
    id: 9,
    title: "Geometric Lamp",
    category: "Accessories",
    price: "$350",
    image: product5,
  },
  {
    id: 10,
    title: "Custom Wardrobe",
    category: "Storage",
    price: "$3,100",
    image: product6,
  },
];

const HeroFeaturedGrid = () => {
  const scrollerRef = useRef(null);

  const scrollCarousel = (direction) => {
    const carouselElement = scrollerRef.current;
    if (carouselElement) {
      // Scroll by the width of 3 cards
      const scrollDistance = carouselElement.offsetWidth / 3;
      carouselElement.scrollBy({
        left: direction === "right" ? scrollDistance : -scrollDistance,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="products" className="featured-section">
      <h2 className="section-titlee">Our Premium Selections</h2>
      <p className="section-subtitlee">
        A curated collection of our best design packages and exclusive products.
      </p>

      {/* --- 1. TOP SECTION: HERO GRID --- */}
      <div className="hero-grid-containers">
        {/* Hero Product (Large Left Block) */}
        <div className="hero-product-cards">
          <div className="hero-contents">
            <h3 className="hero-titles">{heroProduct.title}</h3>
            <p className="hero-descriptions">{heroProduct.description}</p>
            <button
              className="hero-cta-buttons"
              onClick={(e) => {
                e.preventDefault(); // prevent page reload
                const section = document.getElementById("contacts");
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Book Free Consultation
            </button>
          </div>
          <img
            src={heroProduct.image}
            alt={heroProduct.title}
            className="hero-images"
          />
        </div>

        {/* Secondary Products (2x2 Grid on Right) - Titles and Prices added */}
        <div className="secondary-products-grid">
          {secondaryProducts.map((product) => (
            <div key={product.id} className="secondary-card">
              <img
                src={product.image}
                alt={product.title}
                className="secondary-image"
              />
              <div className="secondary-overlay">
                <h4 className="secondary-title">{product.title}</h4>
                <div className="secondary-actions">
                  <span className="secondary-price">₹{product.price}</span>
                  <button className="secondary-add-to-cart">
                    <FaShoppingCart />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- 2. BOTTOM SECTION: HORIZONTAL SCROLLER --- */}
      <div className="scroller-header">
        <h3>More Products You Might Like</h3>
      </div>
      <div className="scroller-wrapper">
        {/* Left Arrow */}
        <FaChevronLeft
          className="scroller-arrow left"
          onClick={() => scrollCarousel("left")}
        />

        <div className="product-scroller" ref={scrollerRef}>
          {extraProducts.map((product) => (
            <div key={product.id} className="scroller-product-card">
              <img src={product.image} alt={product.title} />
              <div className="scroller-details">
                <h4 className="scroller-title">{product.title}</h4>
                <div className="scroller-actions-row">
                  <span className="scroller-price">{product.price}</span>
                  <button className="scroller-add-to-cart">
                    <FaShoppingCart /> Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <FaChevronRight
          className="scroller-arrow right"
          onClick={() => scrollCarousel("right")}
        />
      </div>
    </section>
  );
};

export default HeroFeaturedGrid;
