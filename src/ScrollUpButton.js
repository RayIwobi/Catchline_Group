import { useEffect, useState } from "react";
import arrowup from './components/assets/arrowup.png'
import './app.css'

export default function ScrollUpButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!visible) return null;

  return (
    <img src={arrowup} alt="arrowup" className="scroller"
      onClick={scrollToTop}
      
      
    />
  );
}
