import { getImgUrl } from "../../utils";
import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImgUrl("about/aboutImage.png")}
          alt="Me setting with laptop"
          className={styles.aboutImage}
        />
        <ui className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img
              src={getImgUrl("about/cursorIcon.png")}
              alt="Cursor Icon"
              className="src"
            />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I’m a front-end developer with experience in building responsive
                and optimized sites
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img
              src={getImgUrl("about/serverIcon.png")}
              alt="Server Icon"
              className="src"
            />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I have experience developing fast and optimised back-end systems
                and APIs
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img
              src={getImgUrl("about/uiIcon.png")}
              alt="UI Icon"
              className="src"
            />
            <div className={styles.aboutItemText}>
              <h3>UI Designer</h3>
              <p>
                I have designed multiple landing pages and have created design
                systems as well
              </p>
            </div>
          </li>
        </ui>
      </div>
    </section>
  );
};

export default About;
