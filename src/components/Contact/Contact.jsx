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
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:laauuugc@gmail.com">laauuugc@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/laura-gonzález-calleja-6445222a4/">Linkedin</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/laauuugc">Github</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/cvIcon.png")} alt="CV icon" />
          <a href={getImageUrl("contact/LAURA_GONZALEZ_CV.pdf")} download="LAURA_GONZALEZ_CV.pdf">My CV</a>
        </li>
      </ul>
    </footer>
  );
};