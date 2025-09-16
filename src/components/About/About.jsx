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
            alt="Me eating popcorn"
            className={styles.aboutImage}
            />
            <ul className={styles.aboutItems}>
            {[
          { icon: "about/cursorIcon.png", title: "Chapter 1", 
            text: "Hey, I'm Laura. I'm a software engineer living in cloudy, too cloudy, Dublin. I could say coding is my passion but that's too cringe and I can only be so many cliches (guess whether I wear glasses or not)." },
          { icon: "about/serverIcon.png", title: "Chapter 2", 
            text: "Despite the accent, colours and illustrations, I promise I'm serious. I've held jobs at different university organisations as well as being self-employed. At the same time, I've created several projects and participated in hackathons." },
          { icon: "about/uiIcon.png", title: "Chapter 3", 
            text: "I'm always on a quest to learn new tech. When I'm not on a laptop, you can find me painting whatever is in my mind, reading depressing books or cuddling my cat(Asia) while listening to Taylor Swift and drinking matcha." },
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
