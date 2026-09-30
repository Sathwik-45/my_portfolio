import React, { useState, useEffect } from "react";

function LoadingScreen({ onComplete }) {
  const [count, setCount] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsFading(true);
          setTimeout(onComplete, 1000); // 1-second fade out
          return 100;
        }
        const increment = Math.floor(Math.random() * 3) + 1;
        return Math.min(prev + increment, 100);
      });
    }, 30);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className={`loading-screen-container ${isFading ? "fade-out" : ""}`}>
      <div className="loading-number">{count}%</div>
      <br/>
      <div className="loading">TRAINED</div>
      <div className="fade-overlay"></div>
    </div>
  );
}

export default LoadingScreen;
