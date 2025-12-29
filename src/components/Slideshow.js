import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./slideshow.css";
// import img1 from './assets/slides/img1.jpg'
// import img2 from './assets/slides/img2.jpg'
// import img3 from './assets/slides/img3.jpg'
// import img4 from './assets/slides/img4.jpg'
// import img5 from './assets/slides/img5.jpg'
// import img6 from './assets/slides/img6.jpg'
// import img7 from './assets/slides/img7.jpg'
// import img8 from './assets/slides/img8.jpg'
// import img9 from './assets/slides/img9.jpg'

// ANIMATED TEXT


// const slides = [
//   {img8, text: "Innovative Metering Solutions for Accurate Data, Delivering precision metering systems that optimize efficiency and reliability."}, 
//   {img1, text: "Innovative Metering Solutions for Accurate Data, Delivering precision metering systems that optimize efficiency and reliability."}, 
//   {img2, text: "Innovative Metering Solutions for Accurate Data, Delivering precision metering systems that optimize efficiency and reliability."}, 
//   img3, 
//   img4, 
//   img5, 
//   img6, 
//   img7, 
//   img9
// ];

const mediaFiles = [
  { type: "image", src: "/media/images/img1.jpg", text: "Innovative Metering Solutions for Accurate Data, Delivering precision metering systems that optimize efficiency and reliability." },
  { type: "image", src: "/media/images/img2.jpg", text: "Telecommunication Systems You Can Trust. Empowering connectivity through cutting-edge telecom infrastructure." },
  { type: "image", src: "/media/images/img3.jpg", text: "Building Tomorrow’s Infrastructure Today. From design to execution, delivering excellence in construction." },
  { type: "image", src: "/media/images/img4.jpg", text: "Advanced Networking for a Connected Future. Seamless, secure, and scalable networking solutions." },
  { type: "image", src: "/media/images/img5.jpg", text: "Civil Infrastructure That Stands the Test of Time. Durable, high-quality engineering for lasting impact." },
  { type: "image", src: "/media/images/img6.jpg", text: "Smart Metering for Smarter Operations. Integrating technology to improve accuracy and reduce costs" },
  { type: "image", src: "/media/images/img7.jpg", text: "Telecom Infrastructure That Bridges Communities. Strengthening communication networks across regions." },
  { type: "image", src: "/media/images/img8.jpg", text: "Engineering Excellence in Every Project. Combining innovation, quality, and safety in all our work." },
  { type: "image", src: "/media/images/img9.jpg", text: "Networking Solutions Tailored to Your Needs. Custom-designed systems to keep your business connected." },
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

