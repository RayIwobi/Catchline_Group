// App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./app.css";
import Home from "./components/Home";
import IdeaVault from './components/projectPages/IdeaVault'
import Ecommerce from "./components/projectPages/Ecommerce";
import Amazonscraper from "./components/projectPages/Amazonscraper";
import Authentication from "./components/projectPages/Authentication";
import Metering from "./components/projectPages/Metering";
import Quizapp from "./components/projectPages/Quizapp";
import Yarnix from "./components/projectPages/Yarnix";
import Movieapp from "./components/projectPages/Movieapp";
import ScrollToTop from './ScrollToTop'

function App() {

  return (
    <Router>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='ideavault' element={<IdeaVault />} />
        <Route path='ecommerce' element={<Ecommerce />} />
        <Route path='amazonscraper' element={<Amazonscraper />} />
        <Route path='authentication' element={<Authentication />} />
        <Route path='metering' element={<Metering />} />
        <Route path='quizapp' element={<Quizapp />} />
        <Route path='movieapp' element={<Movieapp />} />
        <Route path='yarnix' element={<Yarnix />} />
      </Routes>
    </Router>
  );
}

export default App;
