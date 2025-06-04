import React, { useEffect, useState } from "react";
import { getImageUrl } from "../../utils";
import styles from "./Starter.module.css";

export const Starter = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setIsVisible(false);
        onComplete();
      }, 1000);
    }, 2000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div className={`${styles.starter} ${isAnimating ? styles.fadeOut : ""}`}>
      <div className={styles.content}>
        <img
          src={getImageUrl("nav/logoNBG.png")}
          alt="Logo"
          className={styles.logo}
        />
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Laura González</h1>
          <p className={styles.subtitle}>Software Developer</p>
        </div>
        <div className={styles.loadingBar}>
          <div className={styles.progress} />
        </div>
      </div>
    </div>
  );
}; 