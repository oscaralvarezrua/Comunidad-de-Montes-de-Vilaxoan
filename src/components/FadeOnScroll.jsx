import React, { useEffect, useState, useRef } from "react";

const FadeOnScroll = ({ children, className = "" }) => {
  const [opacity, setOpacity] = useState(1);
  const elementRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!elementRef.current) return;

      const rect = elementRef.current.getBoundingClientRect();
      const headerHeight = 120;

      // Calcular la distancia desde el centro de la sección hasta el header
      const sectionCenter = rect.top + rect.height / 2;
      const distanceFromHeader = sectionCenter - headerHeight;

      // La sección se desvanece antes de sobrepasar el header
      const fadeStart = 250; // Comienza a desvanecerse 300px antes del header
      const fadeEnd = 200; // Completamente desvanecida 200px antes del header

      let newOpacity = 1;

      if (distanceFromHeader < fadeEnd) {
        newOpacity = 0;
      } else if (distanceFromHeader < fadeStart) {
        // Interpolación lineal entre fadeStart y fadeEnd
        newOpacity = 1 - (fadeStart - distanceFromHeader) / (fadeStart - fadeEnd);
      }

      // Debug: verificar que use el centro
      const sectionId = elementRef.current.querySelector("section")?.id || "unknown";
      console.log(`Section ${sectionId}:`, {
        rectTop: rect.top,
        rectHeight: rect.height,
        sectionCenter,
        distanceFromHeader,
        fadeStart,
        fadeEnd,
        newOpacity,
      });

      setOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={elementRef}
      className={className}
      style={{
        opacity: opacity,
        transition: "opacity 0.09s ease-out",
        transform: `translateY(${opacity < 0.5 ? -20 * (1 - opacity) : 0}px)`,
      }}
    >
      {children}
    </div>
  );
};

export default FadeOnScroll;
