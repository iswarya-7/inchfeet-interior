import React, { useState, useEffect } from "react";
// import { FaArrowUp } from "react-icons/fa";
import { HiMiniArrowTurnLeftUp } from "react-icons/hi2";

import "../assets/styles/Footer.css"; // or separate CSS

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      {visible && (
        <div className="scroll-to-top" onClick={scrollToTop}>
          <HiMiniArrowTurnLeftUp size={25} />
        </div>
      )}
    </>
  );
}
