import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container} id="about">
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <img 
            src={getImageUrl("about/aboutImage.png")} 
            alt="Me sitting with a laptop"
            className={styles.aboutImage}
            />
            <ul className={styles.aboutItems}>
            {[
          { icon: "about/cursorIcon.png", title: "Frontend Developer", text: "I'm a Frontend Developer experienced in developing responsive and optimized websites." },
          { icon: "about/serverIcon.png", title: "Backend Developer", text: "I'm a Backend Developer experienced in developing fast and efficient systems." },
          { icon: "about/uiIcon.png", title: "UI Designer", text: "I have designed multiple professional websites and digital illustrations." },
        ].map((item, index) => (
          <li className={styles.aboutItem} key={index}>
            <img src={getImageUrl(item.icon)} alt={`${item.title} icon`} />
            <div className={styles.aboutItemText}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          </li>
        ))}
            </ul>
        </div>
    </section>
    );
  };
