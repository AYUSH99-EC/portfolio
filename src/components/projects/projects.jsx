import { useState } from "react";
import styles from "./Projects.module.css";

// Import your design assets
import brochureImg from "../../assets/images/brochure.png";
import logoImg from "../../assets/images/logo.png";
import visitingCardImg from "../../assets/images/visitng card.png";
import multiverse from "../../assets/images/multiverse.png";
import landingpage from "../../assets/images/landingpage.png";
import nav from "../../assets/images/nav.jpg";
import navratri from "../../assets/images/navratri.jpg";
import project from "../../assets/images/project.png";
import edit from "../../assets/images/edit.png";
function Projects() {
  const [currentView, setCurrentView] = useState("list");
  const [selectedImg, setSelectedImg] = useState(null); // Track image for Lightbox

  const projectData = [
    {
      title: "MentorMatch Platform",
      description: "A platform that connects students with mentors using modern UI and authentication.it created by using ai tools.",
      tech: ["React", "Supabase", "Vercel", "lovable ai"],
      link: "https://mentormatch-connect.vercel.app/"
    },
    {
      title: "Portfolio Website",
      description: "My personal portfolio built using React showcasing skills, projects and photography.",
      tech: ["React", "CSS Modules"],
      link: "https://portfolio-two-tau-60.vercel.app/"
    },
    {
      title: "UI Design & Social Media Creatives",
      description: "Designed posts, UI layouts and visual content using Figma and Adobe tools.",
      tech: ["Figma", "CANVA"],
      isDesignCard: true
    }
  ];

  const designAssets = [
    { src: brochureImg, label: "Official Brochure" },
    { src: logoImg, label: "Brand Logo" },
    { src: visitingCardImg, label: "Business Card" },
    { src: multiverse, label: "Multiverse website" },
    { src: nav, label: "post" },
    { src: landingpage, label: "Landing Page" },
    { src: navratri, label: "Navratri post" },
    { src: project, label: " hindi divas" },
    { src: edit, label: "navratri post (1)" },
  ];

  // Render the Gallery View
  if (currentView === "gallery") {
    return (
      <section className={styles.projectSection}>
        <div className="container">
          <button className={styles.backBtn} onClick={() => setCurrentView("list")}>
            ← Back to Projects
          </button>
          <h2 className={styles.heading}>Design <span>  </span></h2>

          <div className={styles.galleryGrid}>
            {designAssets.map((asset, index) => (
              <div
                key={index}
                className={styles.galleryCard}
                onClick={() => setSelectedImg(asset)} // Open Lightbox
              >
                <img src={asset.src} alt={asset.label} />
                <div className={styles.assetLabel}>{asset.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* --- LIGHTBOX MODAL --- */}
        {selectedImg && (
          <div className={styles.lightboxOverlay} onClick={() => setSelectedImg(null)}>
            <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
              <button className={styles.closeBtn} onClick={() => setSelectedImg(null)}>&times;</button>
              <img src={selectedImg.src} alt={selectedImg.label} />
              <p className={styles.lightboxLabel}>{selectedImg.label}</p>
            </div>
          </div>
        )}
      </section>
    );
  }

  // Render the Standard Project List
  return (
    <section id="projects" className={styles.projectSection}>
      <div className="container">
        <h2 className={styles.heading}>My Projects</h2>
        <div className={styles.projectGrid}>
          {projectData.map((project, index) => (
            <div
              key={index}
              className={styles.card}
              onClick={() => project.isDesignCard && setCurrentView("gallery")}
              style={project.isDesignCard ? { cursor: "pointer" } : {}}
            >
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className={styles.tech}>
                {project.tech.map((t, i) => <span key={i}>{t}</span>)}
              </div>
              {project.isDesignCard ? (
                <span className={styles.galleryLink}>Open Gallery →</span>
              ) : (
                <a href={project.link} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()}>
                  View Project →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;