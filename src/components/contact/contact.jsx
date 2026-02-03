import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styles from "./Contact.module.css";

function Contact() {
  const form = useRef();
  const myEmail = "ayushshukla47019@gmail.com";

  const sendEmail = (e) => {
    e.preventDefault();

    // Your actual IDs are now fully integrated:
    emailjs.sendForm(
      'service_1tovk28', 
      'template_bnx8oyc', 
      form.current, 
      'iQcTs1eutvK9jaGcI'
    )
    .then((result) => {
        console.log(result.text);
        alert("Success! Ayush, you have received a new message in your inbox.");
        e.target.reset(); // Clears the form after success
    }, (error) => {
        console.log(error.text);
        alert("Something went wrong. Please check your internet or try again.");
    });
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.contactContainer}>

        {/* Left Side: Direct Contact */}
        <div className={styles.contactInfo}>
          <h2>Let's <span>Talk</span></h2>
          <p>
            I'm currently looking for new opportunities. My inbox is always open.
            Whether you have a question or just want to say hi, I’ll get back to you!
          </p>
          
          <div className={styles.emailCard}>
            <span className={styles.emailLabel}> Email: </span>
            <a href={`mailto:${myEmail}`} className={styles.emailLink}>
              {myEmail}
            </a>
          </div>

          <div className={styles.socialLinks}>
            <a href="https://www.linkedin.com/in/ayush-shukla-675a48319" target="_blank" rel="noreferrer" className={styles.socialIcon} title="LinkedIn">
              LinkedIn
            </a>
            <a href="https://github.com/AYUSH99-EC" target="_blank" rel="noreferrer" className={styles.socialIcon} title="GitHub">
              Github
            </a>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <form ref={form} className={styles.contactForm} onSubmit={sendEmail}>
          <div className={styles.inputGroup}>
            {/* These 'name' attributes match the {{variables}} in your EmailJS Template */}
            <input type="text" name="from_name" placeholder="Your Name" required />
          </div>
          <div className={styles.inputGroup}>
            <input type="email" name="from_email" placeholder="Your Email" required />
          </div>
          <div className={styles.inputGroup}>
            <textarea name="message" placeholder="Your Message" rows="4" required></textarea>
          </div>
          <button type="submit" className={styles.submitBtn}>
            Send Message
          </button>
        </form>

      </div>
    </section>
  );
}

export default Contact;