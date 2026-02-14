import styles from "./Gallery.module.css";

function Gallery() {
  const images = [
    "https://picsum.photos/400/300?1",
    "https://picsum.photos/400/300?2",
    "https://picsum.photos/400/300?3",
    "https://picsum.photos/400/300?4",
    "https://picsum.photos/400/300?5",
    "https://picsum.photos/400/300?6"
  ];

  return (
    <section id="gallery" className={styles.gallerySection}>
      <div className="container">
        <h2 className={styles.heading}>My Gallery</h2>

        <div className={styles.grid}>
          {images.map((img, index) => (
            <div key={index} className={styles.imageBox}>
              <img src={img} alt="gallery" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;

