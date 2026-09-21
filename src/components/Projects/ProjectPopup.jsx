import PropTypes from "prop-types";
import { useEffect } from "react";
import { getImageUrl } from "../../utils";
import styles from "./ProjectPopup.module.css";

export const ProjectPopup = ({ project, onClose }) => {
  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose]);

  return (
    <div className={styles.overlay} onClick={onClose} role="presentation">
      <div
        className={styles.popup}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-dialog-title"
      >
        <button type="button" className={styles.closeButton} onClick={onClose} aria-label="Close project details">
          ×
        </button>
        <h2 id="project-dialog-title" className={styles.title}>{project.title}</h2>
        <div className={styles.content}>
          <div className={styles.description}>
            <h3>Description</h3>
            <p>{project.largeDescription}</p>
            <div className={styles.skills}>
              <h3>Technologies used</h3>
              <ul>
                {project.skills.map((skill, id) => (
                  <li key={id}>{skill}</li>
                ))}
              </ul>
            </div>
          </div>
          {project.videoUrl && (
            <div className={styles.video}>
              <h3>Demo video</h3>
              <video
                src={getImageUrl(project.videoUrl)}
                controls
                className={styles.videoPlayer}
                title={`${project.title} demo video`}
              >
                Your browser does not support the video tag.
              </video>
            </div>
          )}
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
    videoUrl: PropTypes.string,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};
