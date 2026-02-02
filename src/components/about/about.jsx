import styles from "./About.module.css";

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <div className="container">
        <div className={styles.wrapper}>

          {/* Left */}
          <div className={styles.content}>
            <h2>
              About <span>  Me</span>
            </h2>

            <p>
              I’m <strong>Ayush Shukla</strong>, an undergraduate Electronics &
              Communication student with a strong creative and technical
              foundation.
            </p>

            <p>
              I work at the intersection of design and development — creating
              visually appealing, user-focused digital experiences. My
              background includes graphic design, photography, videography,
              and frontend web development.
            </p>

            <p>
              I’ve contributed to institutional projects, college events, and
              national-level competitions, including being a finalist team at
              IIT Bombay’s  for the National entrepreneur g Challenge. Currently, I’m
              focused on sharpening my frontend skills and building real-world
              products.
            </p>
          </div>

          <div className={styles.cards}>
  <div className={styles.card}>
    <h3>Problem Solver</h3>
    <span>Turning complex ideas into usable interfaces</span>
  </div>

  <div className={styles.card}>
    <h3>Frontend Focused</h3>
    <span>React • UI Engineering • Performance</span>
  </div>

  <div className={styles.card}>
    <h3>Design + Tech</h3>
    <span>Visual thinking backed by engineering</span>
  </div>

  <div className={styles.card}>
    <h3>creative  Mindset</h3>
    <span>Pitch Deck Design,
Startup Presentations,
Brand Storytelling,
</span>
  
  </div>
</div>

        </div>
      </div>
    </section>
  );
};

export default About;
