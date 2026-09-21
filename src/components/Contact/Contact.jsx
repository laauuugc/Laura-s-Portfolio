import React from "react";

import { getImageUrl } from "../../utils";
import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="" />
          <a href="mailto:laauuugc@gmail.com">laauuugc@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt=""
          />
          <a href="https://www.linkedin.com/in/laura-gonzalez-calleja/" target="_blank" rel="noreferrer">LinkedIn</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="" />
          <a href="https://github.com/laauuugc" target="_blank" rel="noreferrer">GitHub</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/cvIcon.png")} alt="" />
          <a href={getImageUrl("contact/LAURA_GONZALEZ_CV.pdf")} download="LAURA_GONZALEZ_CV.pdf">My CV</a>
        </li>
      </ul>
    </footer>
  );
};
