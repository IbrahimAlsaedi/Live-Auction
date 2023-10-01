import React, { useState, useEffect } from 'react';
import { SectionWrapper } from "../hoc";

import image1 from "../assets/Img2.png";
import image2 from "../assets/Img1.png";
import image3 from "../assets/Img3.png";
import image4 from "../assets/Img4.png";

const Slider = () => {
  const images = [image1, image2, image3, image4]; // Array of imported images
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Auto-rotate images every 5 seconds (5000 milliseconds)
  useEffect(() => {
    const interval = setInterval(handleNext, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div className="flex items-center justify-center h-32 w-full pt-40 relative">
      <img
        src={images[currentIndex]}
        alt={`Image ${currentIndex + 1}`}
        className="w-full"
      />
      <button
        onClick={handlePrev}
        className="absolute left-0 top-1/2 top-40 transform -translate-y-1/2 bg-transparent hover:bg-gray-400 text-gray-800 font-bold rounded-l text-3xl"
      >
        &larr;
      </button>
      <button
        onClick={handleNext}
        className="absolute right-0 top-1/2 top-40 transform -translate-y-1/2 bg-transparent hover:bg-gray-400 text-gray-800 font-bold px-2 py-1 rounded-r text-3xl"
      >
        &rarr;
      </button>
    </div>
  );
  
};

export default SectionWrapper(Slider);
