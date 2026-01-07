// App.js
import { Routes, Route } from "react-router-dom";
import ScrollToTop from './ScrollToTop';
import ScrollUpButton from './ScrollUpButton';
import Home from "./components/pages/Home";
import Footer from "./components/pages/Footer";
import Navigation from "./components/Navigation";
import About from "./components/pages/About";
import Services from "./components/pages/Services";
import Programmes from "./components/pages/Programmes";
import BusinessSchool from "./components/pages/BusinessSchool";
import Communities from "./components/pages/Communities";
import Insights from "./components/pages/Insights";
import Navbar from "./components/Navbar";
import Contact from "./components/pages/Contact";
import FAQ from "./components/pages/FAQ";


function App() {

  return (
    <>
      <ScrollToTop/>
      <ScrollUpButton/>
      <Navigation/>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/programmes" element={<Programmes />} />
        <Route path="/Business-school" element={<BusinessSchool />} />
        <Route path="/programmes" element={<Programmes />} />
        <Route path="/communities" element={<Communities />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
