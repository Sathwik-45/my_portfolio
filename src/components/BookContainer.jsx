import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen, faVolumeUp, faVolumeMute } from "@fortawesome/free-solid-svg-icons";
import { playRapidPageFlipSound } from "../utils/audioFX";
import { PageCover } from "./BookPages";

export default function BookContainer({ onBookOpened }) {
  const [isMuted, setIsMuted] = useState(false);
  const [isOpening, setIsOpening] = useState(false);
  const bookRef = useRef(null);

  // Orbit dust particles around the book
  const particles = Array.from({ length: 18 }, (_, i) => ({
    id: i,
    angle: (i / 18) * 360,
    distance: 220 + Math.sin(i * 1.1) * 60,
    size: Math.random() * 3 + 1,
    speed: 0.3 + Math.random() * 0.4,
    opacity: 0.3 + Math.random() * 0.5,
  }));

  const handleBookClick = () => {
    if (isOpening) return;
    setIsOpening(true);
    playRapidPageFlipSound(isMuted);

    // After sound + open animation completes (~1.4s), transition to portfolio
    setTimeout(() => {
      onBookOpened();
    }, 1400);
  };

  return (
    <div className="space-landing-scene">
      {/* Mute toggle */}
      <button
        className="space-mute-btn"
        onClick={() => setIsMuted((m) => !m)}
        title={isMuted ? "Enable Sounds" : "Mute Sounds"}
      >
        <FontAwesomeIcon icon={isMuted ? faVolumeMute : faVolumeUp} />
        <span>{isMuted ? "Muted" : "Sound On"}</span>
      </button>

      {/* Orbit dust ring around book */}
      <div className="book-orbit-ring">
        {particles.map((p) => (
          <div
            key={p.id}
            className="orbit-particle"
            style={{
              "--angle": `${p.angle}deg`,
              "--dist": `${p.distance}px`,
              "--size": `${p.size}px`,
              "--speed": `${p.speed}s`,
              "--opacity": p.opacity,
            }}
          />
        ))}
      </div>

      {/* The floating 3D book */}
      <div className={`space-book-wrapper ${isOpening ? "book-opening" : ""}`}>
        <div className="space-floating-book" ref={bookRef}>
          <PageCover onOpenBook={handleBookClick} />
        </div>
      </div>

      {/* "Click to Open" CTA */}
      {!isOpening && (
        <div className="space-cta-area">
          <div className="cta-glow-ring" />
          <p className="space-cta-text">
            <FontAwesomeIcon icon={faBookOpen} className="me-2 gold-icon" />
            Click the book to explore
          </p>
          <div className="cta-dots">
            <span /><span /><span />
          </div>
        </div>
      )}

      {/* Opening flash overlay */}
      {isOpening && (
        <div className="book-open-flash">
          <div className="flash-pages">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="flash-page" style={{ "--i": i }} />
            ))}
          </div>
          <div className="flash-burst" />
        </div>
      )}
    </div>
  );
}
