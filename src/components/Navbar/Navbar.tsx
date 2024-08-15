import { useState, useEffect } from "react";
import { Link } from "react-scroll";

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
      <ul className={`nav_menu ${isMenuOpen ? "active" : ""}`}>
        <li>
          <Link onClick={closeMenu}>Home</Link>
        </li>
        <li>
          <Link onClick={closeMenu}>About</Link>
        </li>
        <li>
          <Link onClick={closeMenu}>Skills</Link>
        </li>
        <li>
          <Link onClick={closeMenu}>Projects</Link>
        </li>
        <li>
          <Link onClick={closeMenu}>Blog</Link>
        </li>
        <li>
          <Link onClick={closeMenu}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
