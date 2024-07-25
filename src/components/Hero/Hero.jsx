import React from "react";

import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

export const Hero = () => {
  return <section className={styles.container}>
    <img src={getImageUrl("hero/name.png")} 
    alt="Hero image of me" 
    className={styles.heroImg}
    />
    <div className={styles.topBlur} />
    <div className={styles.bottomBlur} />
    </section>
}