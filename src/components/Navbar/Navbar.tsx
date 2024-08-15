import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";

export default function Navbar() {
  // State to manage the menu open/close state
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu open/close statE28-
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to close the menu
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Effect to handle window resize and close the menu on larger screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        closeMenu;
      }
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup function to remove event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (window.innerWidth <= 1200) {
      closeMenu;
    }
  }, []);

  // Class for the menu based on the state
  // const menuClass = isMenuOpen ? "block" : "hidden";

  return (
    <nav className={`navbar ${isMenuOpen ? "active" : ""}`}>
      <div className="logo">
        <img src="" className="red-ghost-log" alt="RedGhost" />
      </div>
      <a
        className={`nav_hamburger ${isMenuOpen ? "active" : ""}`}
        onDoubleClick={toggleMenu}
      >
        {" "}
        <span className="nav_hamburger_line"></span>
        <span className="nav_hamburger_line"></span>
        <span className="nav_hamburger_line"></span>
      </a>
      <div className={`nav_menu ${isMenuOpen ? "active" : ""}`}>
        <ul>
          <li>
            <Link
              onClick={closeMenu}
              // This sets a class name (navbar--active-content) that will be applied to the link when the target section it scrolls to is in view.
              // This is often used to style the active link differently from the others, indicating which section of the page is currently being viewed.
              activeClass="navbar--active-content"
              // The spy prop is a boolean that, when set to true, makes the <Link> component “spy” on the scroll position
              spy={true}
              // The smooth prop, when set to true, enables smooth scrolling when the link is clicked
              smooth={true}
              // The offset prop allows you to adjust the final scroll position
              offset={-70}
              // The duration prop sets the time it takes to scroll to the target section in milliseconds.
              duration={500}
              // The to prop specifies the ID of the section the link should scroll to
              to="heroSection"
              className="navbar--content"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              activeClass=""
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="aboutSection"
              className="navbar--content"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              activeClass=""
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="skillSection"
              className="navbar--content"
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              activeClass=""
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="projectsSection"
              className="navbar--content"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              activeClass=""
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="projectsSection"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              activeClass=""
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="projectsSection"
              className="navbar--content"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
