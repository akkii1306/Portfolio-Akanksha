import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import NProgress from "nprogress";
import "nprogress/nprogress.css"; // Import the progress bar CSS

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import ScrollToTopButton from "./components/ScrollToTopButton";

// Component to watch route changes and show loader
const RouteChangeLoader = () => {
  const location = useLocation();

  useEffect(() => {
    NProgress.start();
    NProgress.done();
  }, [location.pathname]);

  return null;
};

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <RouteChangeLoader /> {/* 👈 This triggers NProgress on route change */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <ScrollToTopButton />
    </BrowserRouter>
  );
}
