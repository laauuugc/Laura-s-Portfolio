import { useState } from "react";

import PropTypes from "prop-types";
import { getImageUrl } from "../../utils";
import styles from "./ProjectCard.module.css";
import { ProjectPopup } from "./ProjectPopup";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, source, videoUrl },
}) => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      <div className={styles.container}>
        <img
          src={getImageUrl(imageSrc)}
          alt={`Image of ${title}`}
          className={styles.image}
        />
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <ul className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <li key={id} className={styles.skill}>
                {skill}
              </li>
            );
          })}
        </ul>
        <div className={styles.links}>
          <button onClick={() => setShowPopup(true)} className={styles.link}>
            Demo
          </button>
          <a href={source} className={styles.link}>
            Source
          </a>
        </div>
      </div>
      {showPopup && (
        <ProjectPopup
          project={{ title, description, skills, videoUrl }}
          onClose={() => setShowPopup(false)}
        />
      )}
    </>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    skills: PropTypes.arrayOf(PropTypes.string).isRequired,
    demo: PropTypes.string,
    source: PropTypes.string.isRequired,
    videoUrl: PropTypes.string,
  }).isRequired,
};