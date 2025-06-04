import PropTypes from "prop-types";
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
            <p>{project.description}</p>
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
            <iframe
              src={project.videoUrl}
              title={`${project.title} demo video`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}; 

ProjectPopup.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    skills: PropTypes.arrayOf(PropTypes.string).isRequired,
    videoUrl: PropTypes.string.isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};