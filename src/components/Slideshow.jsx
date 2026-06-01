import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./slideshow.css";


const mediaFiles = [
  { type: "image", src: "/media/images/img1.jpg", text: "Helping organizations scale, adapt, and succeed with practical consulting solutions." },
  { type: "image", src: "/media/images/img2.jpg", text: "Improving operations, leadership, and performance for lasting success." },
  { type: "image", src: "/media/images/img3.jpg", text: "Empowering executives and teams with skills for effective leadership." },
  { type: "image", src: "/media/images/img4.jpg", text: "Practical programs designed to improve productivity and workforce efficiency." },
  { type: "image", src: "/media/images/img5.jpg", text: "Guiding professionals and entrepreneurs toward growth and excellence." },
  { type: "image", src: "/media/images/img6.jpg", text: "Helping businesses remain competitive in changing markets." },
  { type: "image", src: "/media/images/img7.jpg", text: "Delivering practical solutions that create measurable business impact." },
  { type: "image", src: "/media/images/img8.jpg", text: "Building confident, skilled, and high-performing organizations." },
  { type: "image", src: "/media/images/img9.jpg", text: "Providing expert guidance for growth, innovation, and transformation." },
];

export default function Slideshow() {
  const [current, setCurrent] = useState(0); 

  // Auto-slide 
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); 
    return () => clearInterval(interval);
  }, [current]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % mediaFiles.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? mediaFiles.length - 1 : prev - 1
    );
  };

  return (
    <div>
      <div className="slideshow">
        {mediaFiles.map((slide, index) => (
          <img
            key={index}
            src={slide.src}
            alt={`Slide ${index + 1}`}
            className={`slide ${index === current ? "active" : ""}`}
          />
        ))}

        <button className="nav left" onClick={prevSlide}>
          &#10094;
        </button>

        <button className="nav right" onClick={nextSlide}>
          &#10095;
        </button>
      </div>

      {/* Sliding Text Overlay */}
      <div
        className="textmode"

      >
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 100, opacity: 0 }}
            transition={{ duration: 0.8 }}
            className='backgroundcolor'
          >
            {mediaFiles[current].text}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

