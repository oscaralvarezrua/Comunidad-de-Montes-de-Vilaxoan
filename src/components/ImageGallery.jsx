import React, { useState } from "react";

const images = [
  { src: "/imagenes/monte-lobeira.jpg", alt: "Monte Lobeira" },
  { src: "/imagenes/vista-aerea.jpg", alt: "Vista aérea de Vilaxoán" },
];

function ImageGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToImage = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="carousel-container">
      <div className="carousel">
        <button className="carousel-button prev" onClick={prevImage}>
          ‹
        </button>

        <div className="carousel-image-container">
          <img src={images[currentIndex].src} alt={images[currentIndex].alt} className="carousel-image" />
        </div>

        <button className="carousel-button next" onClick={nextImage}>
          ›
        </button>
      </div>

      <div className="carousel-indicators">
        {images.map((_, index) => (
          <button key={index} className={`indicator ${index === currentIndex ? "active" : ""}`} onClick={() => goToImage(index)} />
        ))}
      </div>
    </div>
  );
}

export default ImageGallery;
