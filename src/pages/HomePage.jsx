"use client";

import { useEffect, useState } from "react";
import "../assets/styles/HomePage.css";
// import room1 from "../assets/images/room.png";
import room2 from "../assets/images/room2.jpg";
import room3 from "../assets/images/room3.jpg";
import bg from '../assets/images/bg.webp';
import bg2 from '../assets/images/bg2.webp'

const images = [ room2, room3,bg,bg2];

const HomePage = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000); // change every 5 sec
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="homepage">
      <section
      id="home"
        className="hero"
        style={{
          backgroundImage: `linear-gradient(var(--overlay-dark), var(--overlay-dark)), url(${images[current]})`,
        }}
      >
        <div className="hero-overlay">
          <div className="hero-content fade-in">
            <h1 className="hero-title">
              We Create Amazing
              <br />
              Interior Designs
            </h1>
            <p className="hero-description">
              Transform your residential and commercial spaces with our expert
              interior design services. From concept to completion, we bring
              your vision to life.
            </p>
            <div className="hero-buttons">
              <button className="btn-primary">Start Your Project</button>
              <button className="btn-secondary">View Projects</button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
