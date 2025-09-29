import React, { useState } from "react";
import "../assets/styles/ProcessSection.css";

import consultation from "../assets/images/illustration/consultation.png";
import planning from "../assets/images/illustration/planning.png";
import visual from "../assets/images/illustration/3dvisual.png";
import material from "../assets/images/illustration/material.png";
import execution from "../assets/images/illustration/excution.png";
import handover from "../assets/images/illustration/handover.png";
const ProcessSection = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 6;

  const steps = [
    {
      title: "Design Consultation",
      description:
        "Share your ideas and floor plan to receive personalised 3D designs and an instant quote.",
      image: consultation,
    },
    {
      title: "3D Visualization",
      description: "Visualize your dream space with realistic 3D designs.",
      image: planning,
    },
    {
      title: "Design Finalization",
      description:
        "Review and approve final designs, materials, and project timeline with our experts.",
      image: visual,
    },
    {
      title: "Material Sourcing",
      description:
        "We handle all procurement of premium materials and furnishings for your project.",
      image: material,
    },
    {
      title: "Installation & Setup",
      description:
        "Professional installation team brings your design to life with precision and care.",
      image: execution,
    },
    {
      title: "Final Walkthrough",
      description:
        "Complete project handover with final inspection and move-in ready space.",
      image: handover,
    },
  ];

  const handleStepClick = (stepIndex) => setCurrentStep(stepIndex);
  const handlePrevStep = () =>
    currentStep > 1 && setCurrentStep(currentStep - 1);
  const handleNextStep = () =>
    currentStep < totalSteps && setCurrentStep(currentStep + 1);

  const currentStepData = steps[currentStep - 1];

  return (
    <section className="process-section" id="process">
      <div className="process-wrapper">
        <h2 className="section-title">From Design to Move-In</h2>

        {/* Progress Steps - Always Single Row */}
        <div className="progress-container">
          {steps.map((_, index) => (
            <React.Fragment key={index}>
              <div className="progress-step">
                <div
                  className={`step-circle ${
                    index + 1 === currentStep
                      ? "current"
                      : index + 1 < currentStep
                      ? "active"
                      : "inactive"
                  }`}
                  onClick={() => handleStepClick(index + 1)}
                >
                  <span className="step-number">{index + 1}</span>
                </div>
              </div>
              {index < totalSteps - 1 && (
                <div
                  className={`progress-line ${
                    index + 1 < currentStep ? "completed" : ""
                  }`}
                ></div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Content Area */}
        <div className="content-container">
          {/* Navigation Arrows */}
          <button
            className="nav-arrow nav-left"
            onClick={handlePrevStep}
            disabled={currentStep === 1}
          >
            ‹
          </button>
          <button
            className="nav-arrow nav-right"
            onClick={handleNextStep}
            disabled={currentStep === totalSteps}
          >
            ›
          </button>

          <div className="content-area">
            <div className="content-text">
              <h3 className="content-title">{currentStepData.title}</h3>
              <p className="content-description">
                {currentStepData.description}
              </p>
              <button className="cta-button">Book Free Design Session</button>
            </div>

            <div className="illustration-container">
              <img
                key={currentStep}
                src={currentStepData.image}
                alt={`${currentStepData.title} Illustration`}
                className="step-illustration"
                onError={(e) => {
                  e.target.src = `https://via.placeholder.com/500x400/f0f0f0/666?text=${encodeURIComponent(
                    currentStepData.title
                  )}`;
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
