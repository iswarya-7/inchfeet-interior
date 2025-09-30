// FilterableImageGrid.jsx
import React, { useState, useMemo } from "react";
import "../assets/styles/DesignGallery.css";

// --- Images (Imports remain correct) ---
import Bed1 from "../assets/images/bedroom.webp";
import Bed2 from "../assets/images/bedroom2.webp";
import Bed3 from "../assets/images/bedroom3.webp";
import Bed4 from "../assets/images/bedroom4.webp";
import Bed5 from "../assets/images/bedroom5.webp";
import Bed6 from "../assets/images/bedroom6.webp";
import Bed7 from "../assets/images/bedroom7.webp";

// Kitchen
import Kitchen1 from "../assets/images/kitchen.jpg";
import Kitchen2 from "../assets/images/kitchen2.webp";
import Kitchen3 from "../assets/images/kitchen3.webp";
import Kitchen4 from "../assets/images/kitchen4.webp";

// Living Room
import Living1 from "../assets/images/livingroom.webp";
import Living2 from "../assets/images/livingrrom2.webp";
import Living3 from "../assets/images/livingroom3.webp";
import Living4 from "../assets/images/livingroom4.webp";
import Living5 from "../assets/images/livingroom5.webp";

// Wardrobe
import Wardrobe1 from "../assets/images/dinninghall.webp";
import Wardrobe2 from "../assets/images/room4.jpg";

// kids room
import KidsBed1 from "../assets/images/kidsRoom/kids.jpeg";
import KidsBed2 from "../assets/images/kidsRoom/kids2.jpeg";
import KidsBed3 from "../assets/images/kidsRoom/kids3.jpeg";
import KidsBed4 from "../assets/images/kidsRoom/kids4.jpeg";
import KidsBed5 from "../assets/images/kidsRoom/kids5.jpeg";
import KidsBed6 from "../assets/images/kidsRoom/kids6.jpeg";

// pooja room
import PoojaSelf1 from "../assets/images/poojaRoom/pooja-room.jpeg";
import PoojaSelf2 from "../assets/images/poojaRoom/pooja-room2.jpeg";
import PoojaSelf3 from "../assets/images/poojaRoom/pooja-room3.jpeg";
import PoojaSelf4 from "../assets/images/poojaRoom/pooja-room4.jpeg";
import PoojaSelf5 from "../assets/images/poojaRoom/pooja-room5.jpeg";
import PoojaSelf6 from "../assets/images/poojaRoom/pooja-room6.jpeg";
import PoojaSelf7 from "../assets/images/poojaRoom/pooja-room7.jpeg";

// --- Filter Categories (Unchanged) ---
const filterCategories = [
  "All",
  "Bedroom",
  "Kitchen",
  "Living Room",
  "Wardrobe",
  "Kids Room",
  "Pooja Room",
];

// 🚨 3. REVISED Data Structure: Hardcoded Designs with UNIQUE IDs
const galleryData = {
  // --- Bedroom Designs ---
  Bedroom: [
    // IDs now run sequentially from 1 to 7
    {
      id: "bedroom-1",
      category: "Bedroom",
      type: "Residential",
      title: "Master Suite Serenity",
      image: Bed1,
    },
    {
      id: "bedroom-2",
      category: "Bedroom",
      type: "Residential",
      title: "Contemporary Bedroom 1",
      image: Bed2,
    },
    {
      id: "bedroom-3",
      category: "Bedroom",
      type: "Residential",
      title: "Contemporary Bedroom 2",
      image: Bed3,
    },
    {
      id: "bedroom-4",
      category: "Bedroom",
      type: "Commercial",
      title: "Luxury Hotel Room 1",
      image: Bed4,
    },
    {
      id: "bedroom-5",
      category: "Bedroom",
      type: "Residential",
      title: "Contemporary Bedroom 3",
      image: Bed5,
    },
    {
      id: "bedroom-6",
      category: "Bedroom",
      type: "Commercial",
      title: "Luxury Hotel Room 2",
      image: Bed6,
    },
    {
      id: "bedroom-7",
      category: "Bedroom",
      type: "Commercial",
      title: "Luxury Hotel Room 3",
      image: Bed7,
    },
  ],
  // --- Kitchen Designs ---
  Kitchen: [
    // IDs now run sequentially from 1 to 4
    {
      id: "kitchen-1",
      category: "Kitchen",
      type: "Residential",
      title: "Modular Kitchen Design 1",
      image: Kitchen1,
    },
    {
      id: "kitchen-2",
      category: "Kitchen",
      type: "Residential",
      title: "Italian Open Kitchen",
      image: Kitchen2,
    },
    {
      id: "kitchen-3",
      category: "Kitchen",
      type: "Commercial",
      title: "Cafe Counter Design 1",
      image: Kitchen3,
    },
    {
      id: "kitchen-4",
      category: "Kitchen",
      type: "Commercial",
      title: "Cafe Counter Design 2",
      image: Kitchen4,
    },
  ],
  // --- Living Room Designs ---
  "Living Room": [
    // IDs now run sequentially from 1 to 5
    {
      id: "living-1",
      category: "Living Room",
      type: "Residential",
      title: "Modern Living Space 1",
      image: Living1,
    },
    {
      id: "living-2",
      category: "Living Room",
      type: "Residential",
      title: "Minimalist Lounge 1",
      image: Living2,
    },
    {
      id: "living-3",
      category: "Living Room",
      type: "Residential",
      title: "Modern Living Space 2",
      image: Living3,
    },
    {
      id: "living-4",
      category: "Living Room",
      type: "Residential",
      title: "Minimalist Lounge 2",
      image: Living4,
    },
    {
      id: "living-5",
      category: "Living Room",
      type: "Residential",
      title: "Minimalist Lounge 3",
      image: Living5,
    },
  ],
  // --- Wardrobe Designs ---
  Wardrobe: [
    {
      id: "wardrobe-1",
      category: "Wardrobe",
      type: "Residential",
      title: "Sliding Door Wardrobe",
      image: Wardrobe1,
    },
    {
      id: "wardrobe-2",
      category: "Wardrobe",
      type: "Residential",
      title: "Walk-in Closet",
      image: Wardrobe2,
    },
  ],
  // --- Placeholder (empty) categories ---
  "Kids Room": [
    {
      id: "kids-1",
      category: "Bedding",
      type: "Residential",
      title: "Adventure Loft Bunk Bed",
      image: KidsBed1,
    },
    {
      id: "kids-2",
      category: "Storage",
      type: "Residential",
      title: "Cloud-Shaped Toy Organizer",
      image: KidsBed2,
    },
    {
      id: "kids-3",
      category: "Desk",
      type: "Residential",
      title: "Adjustable Height Study Desk",
      image: KidsBed3,
    },
    {
      id: "kids-4",
      category: "Seating",
      type: "Residential",
      title: "Cozy Reading Nook Chair",
      image: KidsBed4,
    },
    {
      id: "kids-5",
      category: "Wardrobe",
      type: "Residential",
      title: "Custom Two-Tone Kids Wardrobe",
      image: KidsBed5,
    },
    {
      id: "kids-6",
      category: "Decor",
      type: "Residential",
      title: "Glow-in-the-Dark Wall Mural",
      image: KidsBed6,
    },
  ],
  "Pooja Room": [
    {
      id: "pooja-1",
      category: "Mandir Unit",
      type: "Residential",
      title: "Teak Wood Pooja Cabinet with Storage",
      image: PoojaSelf1,
    },
    {
      id: "pooja-2",
      category: "Lighting",
      type: "Residential",
      title: "Intricate Brass Diya Stand",
      image: PoojaSelf4,
    },
    {
      id: "pooja-3",
      category: "Seating",
      type: "Residential",
      title: "Small Padded Meditation Stool",
      image: PoojaSelf3,
    },
    {
      id: "pooja-4",
      category: "Wall Decor",
      type: "Residential",
      title: "Laser-Cut Wooden Jaali Partition",
      image: PoojaSelf2,
    },
    {
      id: "pooja-5",
      category: "Storage",
      type: "Residential",
      title: "Drawer Unit for Pooja Accessories",
      image: PoojaSelf5,
    },
    {
      id: "pooja-6",
      category: "Flooring/Base",
      type: "Residential",
      title: "Marble Finished Altar Slab",
      image: PoojaSelf6,
    },
    {
      id: "pooja-7",
      category: "Mandir Unit",
      type: "Residential",
      title: "Modern Wall-Mounted Pooja Shelf",
      image: PoojaSelf7,
    },
  ],
};

// 4. The 'All' filter uses the first few designs from each category
const allDesigns = [
  ...galleryData["Bedroom"].slice(0, 2),
  ...galleryData["Kitchen"].slice(0, 2),
  ...galleryData["Living Room"].slice(0, 2),
  ...galleryData["Wardrobe"].slice(0, 2),
].filter(Boolean);

// --- 5. Main Component (Unchanged) ---
const DesignGallery = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredDesigns = useMemo(() => {
    if (activeFilter === "All") {
      return allDesigns;
    }
    return galleryData[activeFilter] || [];
  }, [activeFilter]);

  return (
    <section className="gallery-section" id="design">
      <h2 className="gallery-heading">Ideas for Home Interior Designs</h2>
      <p className="gallery-subtitle">
        Transform your home with these personalized interior design ideas,
        crafted just for you.
      </p>

      {/* --- Filter Bar --- */}
      <div className="filter-bar">
        {filterCategories.map((category) => (
          <button
            key={category}
            className={`filter-button ${
              activeFilter === category ? "active" : ""
            }`}
            onClick={() => setActiveFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* --- Image Grid --- */}
      <div className="image-grid-container">
        {filteredDesigns.length > 0 ? (
          <div className="image-grid">
            {filteredDesigns.map((design) => (
              <div key={design.id} className="gallery-card">
                {" "}
                {/* key={design.id} must use a unique ID */}
                <img
                  src={design.image}
                  alt={design.title}
                  className="gallery-image"
                />
                <span
                  className={`type-tag ${design.type
                    .toLowerCase()
                    .replace(/\s/g, "-")}`}
                >
                  {design.type}
                </span>
                <div className="card-info-overlay">
                  <h4 className="card-title-overlay">{design.title}</h4>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="no-results">No designs found for this category.</p>
        )}
      </div>
    </section>
  );
};

export default DesignGallery;
