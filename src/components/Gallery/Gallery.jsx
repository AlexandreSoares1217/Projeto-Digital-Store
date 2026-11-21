import { useState } from "react";
import arrowLeft from "../../assets/arrow-left.svg";
import arrowRight from "../../assets/arrow-right.svg";
import "./Gallery.css";

function Gallery({ className = "", images, width, height, radius, showThumbs }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images?.length) return null;

  const isFirst = currentIndex === 0;
  const isLast = currentIndex === images.length - 1;

  const goLeft = () => setCurrentIndex((index) => Math.max(index - 1, 0));
  const goRight = () =>
    setCurrentIndex((index) => Math.min(index + 1, images.length - 1));

  return (
    <div className={`gallery ${className}`.trim()}>
      <div
        className="gallery__main"
        style={{ width: width, height: height ?? "auto" }}
      >
        <div
          className="gallery__track"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <img
              key={image.src || index}
              className="gallery__slide"
              src={image.src}
              alt={image.alt || `Slide ${index + 1} de ${images.length}`}
              style={{ borderRadius: radius }}
              loading={index === 0 ? "eager" : "lazy"}
              draggable="false"
            />
          ))}
        </div>

        <button
          type="button"
          className="gallery__arrow gallery__arrow--left"
          onClick={goLeft}
          disabled={isFirst}
          aria-label="Imagem anterior"
        >
          <img src={arrowLeft} alt="" />
        </button>

        <button
          type="button"
          className="gallery__arrow gallery__arrow--right"
          onClick={goRight}
          disabled={isLast}
          aria-label="Próxima imagem"
        >
          <img src={arrowRight} alt="" />
        </button>
      </div>

      {showThumbs && (
        <div className="gallery__thumbs">
          {images.map((image, index) => (
            <button
              key={image.src || index}
              type="button"
              className={
                index === currentIndex
                  ? "gallery__thumb gallery__thumb--active"
                  : "gallery__thumb"
              }
              aria-label={`Ir para imagem ${index + 1}`}
              aria-current={index === currentIndex}
              onClick={() => setCurrentIndex(index)}
            >
              <img src={image.src} alt="" style={{ borderRadius: radius }} />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default Gallery;
