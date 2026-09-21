import React from "react";

import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container} aria-label="Introduction">
      <div className={styles.content}>
        <p className={styles.kicker}>Software engineer</p>
        <h1 className="srOnly">Laura González</h1>
        <img
          src={getImageUrl("hero/name.png")}
          alt="Laura González"
          className={styles.heroImg}
        />
        <p className={styles.subtitle}>
          Building thoughtful software from too-cloudy Dublin — with a sketchbook, a cat, and a matcha nearby.
        </p>
        <div className={styles.actions}>
          <a href="#projects" className={styles.primary}>View projects</a>
          <a href="#contact" className={styles.secondary}>Get in touch</a>
        </div>
      </div>
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
