import styles from "./Gallery.module.css";
import cer from "../../assets/images/gallery/photo/cer.jpeg";
import nec from "../../assets/images/gallery/photo/nec.jpeg";
import brain from "../../assets/images/brain.png";
import ganpati from "../../assets/images/ganpati.jpeg";
import { useState } from "react";

function Gallery() {
  const [selectedImg, setSelectedImg] = useState(null);

  const images = [
    { src: cer, label: "Gyanotsav 2025" },
    { src: nec, label: "NEC Certificate" },
    { src: brain, label: "Braihub Website" },
    { src: ganpati, label: "ganesh edit" },
  ];

  return (
    <section id="gallery" className={styles.gallerySection}>
      <div className="container">
        <h2 className={styles.heading}>My Gallery</h2>

        <div className={styles.grid}>
          {images.map((img, index) => (
            <div
              key={index}
              className={styles.imageBox}
              onClick={() => setSelectedImg(img)}
            >
              <img src={img.src} alt={img.label} />
            </div>
          ))}
        </div>

        {/* --- LIGHTBOX MODAL --- */}
        {selectedImg && (
          <div
            className={styles.lightboxOverlay}
            onClick={() => setSelectedImg(null)}
          >
            <div
              className={styles.lightboxContent}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className={styles.closeBtn}
                onClick={() => setSelectedImg(null)}
              >
                &times;
              </button>
              <img src={selectedImg.src} alt={selectedImg.label} />
              <p className={styles.lightboxLabel}>{selectedImg.label}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Gallery;

