import PropTypes from "prop-types";
import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./ProjectPopup.module.css";

export const ProjectPopup = ({ project, onClose }) => {
  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.popup} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>×</button>
        <h2 className={styles.title}>{project.title}</h2>
        <div className={styles.content}>
          <div className={styles.description}>
            <h3>Description</h3>
            <p>{project.largeDescription}</p>
            <div className={styles.skills}>
              <h3>Technologies Used</h3>
              <ul>
                {project.skills.map((skill, id) => (
                  <li key={id}>{skill}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className={styles.video}>
            <h3>Demo Video</h3>
            <video
              src={getImageUrl(project.videoUrl)}
              controls
              className={styles.videoPlayer}
              title={`${project.title} demo video`}
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}; 

ProjectPopup.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    largeDescription: PropTypes.string.isRequired,
    skills: PropTypes.arrayOf(PropTypes.string).isRequired,
    videoUrl: PropTypes.string.isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};