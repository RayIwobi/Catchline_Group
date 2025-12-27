// App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from './ScrollToTop';
import ScrollUpButton from './ScrollUpButton';
import Home from "./components/Home";
import Footer from "./components/Footer";

function App() {

  return (
    <Router>
      <ScrollToTop/>
      <ScrollUpButton/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
