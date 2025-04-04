import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import "../styles/Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdowns, setDropdowns] = useState({
    photography: false,
  });
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleWhatsAppClick = () => {
    const phoneNumber = "+918957582590";
    const message = encodeURIComponent("Hello! I'm interested in your photography services.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  const toggleDropdown = (menu) => {
    setDropdowns((prevState) => ({
      ...prevState,
      [menu]: !prevState[menu],
    }));
  };

  const toggleMobileDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className={`navbar ${sticky ? "sticky" : ""}`}>
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img
              alt="Photography Studio Logo"
              className="logo-img"
              onError={(e) => (e.target.src = "/fallback-logo.png")}
            />
          </Link>
        </div>

        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li><Link to="/" className="nav-item">Home</Link></li>
          <li><Link to="/about" className="nav-item">About</Link></li>
          
          <li className="dropdown">
            <span className="nav-item" onClick={() => toggleDropdown("photography")}>
              Photography <FiChevronDown />
            </span>
            {dropdowns.photography && (
              <ul className="dropdown-menu">
                <li><Link to="/photography/pre-wedding">Pre-Wedding</Link></li>
                <li><Link to="/photography/wedding">Wedding</Link></li>
                <li><Link to="/photography/destination">Destination</Link></li>
                <li><Link to="/photography/kids">Kids</Link></li>
                <li><Link to="/photography/film-documentary">Film & Documentary</Link></li>
              </ul>
            )}
          </li>
          <li><Link to="/services" className="nav-item">Services</Link></li>
          <li><Link to="/contact" className="nav-item">Contact</Link></li>
        </ul>

       

        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mobile-menu active">
          <ul className="mobile-nav">
            <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
            <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
            
            {/* Mobile Dropdown */}
            <li className={`mobile-dropdown ${dropdownOpen ? "active" : ""}`}>
              <span onClick={toggleMobileDropdown}>
                Photography <FiChevronDown className={dropdownOpen ? "rotate" : ""} />
              </span>
              {dropdownOpen && (
                <ul className="dropdown-menu">
                  <li><Link to="/photography/pre-wedding" onClick={() => setMenuOpen(false)}>Pre-Wedding</Link></li>
                  <li><Link to="/photography/wedding" onClick={() => setMenuOpen(false)}>Wedding</Link></li>
                  <li><Link to="/photography/destination" onClick={() => setMenuOpen(false)}>Destination</Link></li>
                  <li><Link to="/photography/kids" onClick={() => setMenuOpen(false)}>Kids</Link></li>
                  <li><Link to="/photography/film-documentary" onClick={() => setMenuOpen(false)}>Film & Documentary</Link></li>
                </ul>
              )}
            </li>

            <li><Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link></li>
            <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
          </ul>
          
        </div>
      )}
    </nav>
  );
};

export default Navbar;



