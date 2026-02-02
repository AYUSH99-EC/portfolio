import { Link } from "react-scroll";
import styles from "./Hero.module.css";
import heroImage from "../../assets/images/hero-photo.png";

function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.container}>

        {/* Left Text */}
        <div className={styles.content}>
          <h1>Hi, I'm Ayush Shukla</h1>
          <p class="hero-text">
            I merge clean UI, code, and visual storytelling<br />
            to build memorable web experiences.
          </p>

          <div className={styles.buttons}>
            <Link to="projects" smooth={true} duration={500} className={styles.primaryBtn}>
              View Projects
            </Link>
            <Link to="contact" smooth={true} duration={500} className={styles.secondaryBtn}>
              Contact Me
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className={styles.image}>
          <img src={heroImage} alt="Ayush Shukla" />
        </div>

      </div>
    </section>
  );
}

export default Hero;
