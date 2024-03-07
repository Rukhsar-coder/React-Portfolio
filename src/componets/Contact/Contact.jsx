import { getImgUrl } from "../../utils";
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
          <img src={getImgUrl("contact/email.png")} alt="Email  icon" />
          <a href="mailto:rukshar_malik@yahoo.com">Rukshar_malik@yahoo.com</a>
        </li>
        <li className={styles.link}>
          <img src={getImgUrl("contact/LinkedIn.png")} alt="LinkedIn  icon" />
          <a
            href="https://www.linkedin.com/in/rukhsar-pathan"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/rukhsar-pathan
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImgUrl("contact/git.png")} alt="git  icon" />
          <a
            href="https://github.com/Rukhsar-coder"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/Rukhsar-coder
          </a>
        </li>
      </ul>
    </footer>
  );
};
export default Contact;
