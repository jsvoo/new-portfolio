import "./styles.css";
import "./components/styles/media-query.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import HomePage from "./components/pages/HomePage";
import Navigation from "./components/pages/Navigation";
// import Contact from "./components/pages/Contact";
// import Portfolio from "./components/pages/Portfolio";
// import About from "./components/pages/About";
import PortfolioContext from "./components/context/PortfolioContext";

export default function App() {
  return (
    <PortfolioContext>
      <BrowserRouter>
        <Navigation />
        <Routes>
          {/* Took out manual routes to switch components with state and ternary operators instaed  */}
          {/* <Route element={<HomePage />} path="/home" />
          <Route element={<Navigation />} path="nav" />
          <Route element={<Contact />} path="contact" />
          <Route element={<Portfolio />} path="portfolio" />
          <Route element={<About />} path="about" /> */}
        </Routes>
      </BrowserRouter>
    </PortfolioContext>
  );
}
