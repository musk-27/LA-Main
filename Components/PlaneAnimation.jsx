import React from "react";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const PlaneAnimation = () => {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;

    const updatePosition = () => {
      const scrollY = window.scrollY;
      const yPos = scrollY * 0.1; // Adjust the range and speed of the vertical movement

      element.style.transform = `translateY(${yPos}px)`;
    };

    updatePosition();

    const handleScroll = () => {
      requestAnimationFrame(updatePosition);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      className={`animation ${ref.current && "animate"}`}
      ref={ref}
      style={{ position: "relative" }}
    >
      <motion.img
        className="paper-plane"
        src="https://i.postimg.cc/W1w9dT1x/paper.png"
        alt="Paper Plane"
        initial={{ opacity: 0 }} // Add initial state to make the image visible
        style={{ opacity: 1 }} // Add inline style for opacity
      />
    </section>
  );
};

export default PlaneAnimation;
