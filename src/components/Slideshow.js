import { useEffect, useState } from "react";
import "./slideshow.css";
import img1 from './assets/slides/img1.jpg'
import img2 from './assets/slides/img2.jpg'
import img3 from './assets/slides/img3.jpg'
import img4 from './assets/slides/img4.jpg'
import img5 from './assets/slides/img5.jpg'
import img6 from './assets/slides/img6.jpg'
import img7 from './assets/slides/img7.jpg'
import img8 from './assets/slides/img8.jpg'
import img9 from './assets/slides/img9.jpg'

const slides = [img8, img1, img2, img3, img4, img5, img6, img7, img9];

export default function Slideshow() {
  const [current, setCurrent] = useState(0);

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [current]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  return (
    <div>
    <div className="slideshow">
      {slides.map((slide, index) => (
        <img
          key={index}
          src={slide}
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
    </div>
  );
}
