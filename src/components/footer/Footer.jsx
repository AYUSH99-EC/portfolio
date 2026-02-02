import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        
        <h2 className={styles.logo}>Ayush</h2>

        <p className={styles.tagline}>
          Frontend Developer • UI/UX Designer • Creative Visual Storyteller
        </p>

        <div className={styles.socials}>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            LinkedIn
          </a>

          <a href="https://github.com" target="_blank" rel="noreferrer">
            GitHub
          </a>

          
        </div>

        <p className={styles.copy}>
          © {new Date().getFullYear()} Ayush. All rights reserved.
        </p>

      </div>
    </footer>
  );
}

export default Footer;
