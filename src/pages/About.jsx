import React from "react";
import {
  FaPaintBrush,
  FaRulerCombined,
  FaDrawPolygon,
  FaBuilding,
} from "react-icons/fa";
import { FiHome } from "react-icons/fi";
import { LuBuilding2 } from "react-icons/lu";
import { IoBulbOutline } from "react-icons/io5";

import "../assets/styles/About.css";

import room3 from "../assets/images/room3.jpg";
import room4 from "../assets/images/room4.jpg";

const About = () => {
  return (
    <section id="about">
      <div className="about-us-container">
        <div className="about-us-images">
          <div className="main-image">
            {/* Replace with your image URL or local import */}
            <img src={room3} alt="Interior Design" />
          </div>
          <div className="sub-image">
            {/* Replace with your image URL or local import */}
            <img src={room4} alt="Interior Design Close-up" />
          </div>
        </div>
        <div className="about-us-content">
          {/* <p className="about-heading">About Us</p> */}
          <h2 className="main-title">
            Most Trusted & Creative Interior Design Company.
          </h2>
          <p className="description">
            With over 15 years of experience in transforming spaces, we
            specialize in creating stunning residential and commercial interiors
            that reflect your unique style and needs. Our team of expert
            designers combines creativity with functionality to deliver
            exceptional results.
          </p>
          <p className="description">
            From luxury homes to corporate offices, we handle every aspect of
            interior design with meticulous attention to detail and a commitment
            to excellence that has earned us recognition as industry leaders.
          </p>
          <div className="services-grid">
            <div className="service-item">
              <FiHome className="service-icon" />
              <p>Residential Design</p>
            </div>
            <div className="service-item">
              <IoBulbOutline className="service-icon" />
              <p>Lighting Design</p>
            </div>

            <div className="service-item">
              <LuBuilding2 className="service-icon" />
              <p>Commercial Design</p>
            </div>
            {/* <div className="service-item">
            <FaBuilding className="service-icon" />
            <p>Home Renovation</p>
          </div> */}
          </div>
          <button className="discover-button">Discover More</button>
        </div>
      </div>
    </section>
  );
};

export default About;
