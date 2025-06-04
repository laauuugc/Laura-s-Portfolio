import styles from "./LinkedInPosts.module.css";

const getImageUrl = (path) => `/assets/${path}`;

export const LinkedInPosts = () => {
  return (
    <section className={styles.container} id="linkedin">
      <h2 className={styles.title}>Latest LinkedIn Posts</h2>
      <div className={styles.postsContainer}>
        <div className={styles.post}>
          <div className={styles.postHeader}>
            <img src={getImageUrl("contact/linkedin.png")} 
                alt="Laura González Calleja" 
                className={styles.profilePic}
                />
            <div className={styles.postInfo}>
              <h3>Laura González</h3>
              <p>Software Developer</p>
            </div>
          </div>
          <div className={styles.postContent}>
            <p>Follow me on LinkedIn to see my latest posts about software development, tech insights, and my journey as a developer!</p>
          </div>
          <a
            href="https://www.linkedin.com/in/laura-gonzalez-calleja"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.linkedinButton}
          >
            View My LinkedIn Profile
          </a>
        </div>
      </div>
    </section>
  );
}; 