import { useState } from "react";
import { Link } from "react-scroll";
import styles from "./navbar.module.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to close the menu when a link is clicked (useful for mobile)
  const handleToggle = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={styles.navbar}>
      <div className="container">
        <div className={styles.navContent}>

          {/* Logo */}
          <h2 className={styles.logo}>Ayush</h2>

          {/* Desktop & Mobile Menu */}
          <ul className={`${styles.navLinks} ${menuOpen ? styles.active : ""}`}>
            <li>
              <Link to="hero" spy={true} smooth={true} duration={300} offset={-70} onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to="about" spy={true} smooth={true} duration={300} offset={-70} onClick={closeMenu}>
                About
              </Link>
            </li>
            <li>
              <Link to="skills" spy={true} smooth={true} duration={300} offset={-70} onClick={closeMenu}>
                Skills
              </Link>
            </li>
            <li>
              <Link to="projects" spy={true} smooth={true} duration={300} offset={-70} onClick={closeMenu}>
                Projects
              </Link>
            </li>
            <li>
              <Link to="gallery" spy={true} smooth={true} duration={300} offset={-70} onClick={closeMenu}>
                Gallery
              </Link>
            </li>
            <li>
              <Link to="contact" spy={true} smooth={true} duration={300} offset={-70} onClick={closeMenu}>
                Contact
              </Link>
            </li>
          </ul>

          {/* Hamburger Menu Icon */}
          <div className={styles.hamburger} onClick={handleToggle}>
            <span className={menuOpen ? styles.bar1 : ""}></span>
            <span className={menuOpen ? styles.bar2 : ""}></span>
            <span className={menuOpen ? styles.bar3 : ""}></span>
          </div>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;