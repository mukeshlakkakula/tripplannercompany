import React, { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";
import "./index.css"; // Import the CSS file

export default function Navbar() {
  const [navbarState, setNavbarState] = useState(false);
  const [scroll, setScroll] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  const closeNavbar = () => {
    setNavbarState(false);
  };

  return (
    <>
      <nav className={`nav ${scroll ? "scroll" : ""}`}>
        <div className="brand">
          <div className="container">
            <span className="brand-text">Explorers</span>
            <span className="brand-text colorful-text">Company</span>
          </div>
          <div className="toggle">
            {navbarState ? (
              <VscChromeClose onClick={closeNavbar} />
            ) : (
              <GiHamburgerMenu onClick={() => setNavbarState(true)} />
            )}
          </div>
        </div>
        <ul className="desktop-nav">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#services">About</a>
          </li>
          <li>
            <a href="#recommend">Places</a>
          </li>
          <li>
            <a href="#testimonials">Testimonials</a>
          </li>
        </ul>
        <a href="#contactus" className="connect-btn">Connect</a>
      </nav>
      <div className={`responsive-nav ${navbarState ? "open" : ""}`}>
        <div className="close-btn" onClick={closeNavbar}>
          <VscChromeClose />
        </div>
        <ul>
          <li>
            <a href="#home" onClick={closeNavbar}>
              Home
            </a>
          </li>
          <li>
            <a href="#services" onClick={closeNavbar}>
              About
            </a>
          </li>
          <li>
            <a href="#recommend" onClick={closeNavbar}>
              Places
            </a>
          </li>
          <li>
            <a href="#testimonials" onClick={closeNavbar}>
              Testimonials
            </a>
          </li>
          <li>
          <a href="#contactus" className="connect-btn" onClick={closeNavbar}>
            Connect
          </a>
          </li>
        </ul>
      </div>
    </>
  );
}
