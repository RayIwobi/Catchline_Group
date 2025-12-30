// App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from './ScrollToTop';
import ScrollUpButton from './ScrollUpButton';
import Home from "./components/Home";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";

function App() {

  return (
    <Router>
      <ScrollToTop/>
      <ScrollUpButton/>
      <Navigation/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
