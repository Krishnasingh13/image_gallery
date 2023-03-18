import React from "react";
import { useState, useEffect, useRef } from "react";
import "./App.css";

import images from "./images";

import { motion } from "framer-motion";

const App = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  const image = images.map((image) => {
    return (
      <motion.div className="item">
        <img src={image} alt="" />
      </motion.div>
    );
  });

  return (
    <div>
      <h1>Photo Collection</h1>
      <br />
      <motion.div
        ref={carousel}
        className="carousel"
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="inner-carousel"
        >
          {image}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default App;
