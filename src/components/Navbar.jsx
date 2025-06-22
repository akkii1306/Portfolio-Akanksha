import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinkStyle = ({ isActive }) =>
    isActive
      ? "text-[#810CA8] font-semibold"
      : "text-[#2D033B] dark:text-[#EDE9F9]";

  return (
   <nav className="bg-[#E5B8F4] dark:bg-[#1A103D] text-[#2D033B] dark:text-[#EDE9F9] fixed w-full z-50 transition-colors duration-300">
  <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
    <Link to="/" className="text-2xl font-bold text-[#810CA8]">Akanksha</Link>

    <div className="hidden md:flex items-center space-x-6">
      <NavLink to="/" className={navLinkStyle}>Home</NavLink>
      <NavLink to="/about" className={navLinkStyle}>About</NavLink>
      <NavLink to="/projects" className={navLinkStyle}>Projects</NavLink>
      <NavLink to="/contact" className={navLinkStyle}>Contact</NavLink>
      <ThemeToggle />
    </div>

    <button className="md:hidden text-2xl" onClick={toggleMenu}>
      {isOpen ? <FaTimes /> : <FaBars />}
    </button>
    <a
  href="/resume.pdf"
  download
  className="bg-[#810CA8] hover:bg-[#C147E9] text-white px-5 py-2 rounded font-medium transition"
>
  Download Resume
</a>

  </div>

  {isOpen && (
    <div className="md:hidden bg-[#E5B8F4] dark:bg-[#1A103D] px-6 py-4 space-y-4">
      <NavLink to="/" onClick={toggleMenu} className={navLinkStyle}>Home</NavLink>
      <NavLink to="/about" onClick={toggleMenu} className={navLinkStyle}>About</NavLink>
      <NavLink to="/projects" onClick={toggleMenu} className={navLinkStyle}>Projects</NavLink>
      <NavLink to="/contact" onClick={toggleMenu} className={navLinkStyle}>Contact</NavLink>
      
      <ThemeToggle />
      
    </div>
  )}
  
</nav>

  );
};

export default Navbar;
