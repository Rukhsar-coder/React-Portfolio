/* eslint-disable react/prop-types */
import { getImgUrl } from "../../utils";
import styles from "./ProjectCard.module.css";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source },
}) => {
  return (
    <div className={styles.container}>
      <img
        src={getImgUrl(imageSrc)}
        alt={`image of ${title}`}
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
        <a href={demo} target="_blank" rel="noopener noreferrer">
          <img src={getImgUrl("contact/demo1.png")} alt={`Demo of ${title}`} />
        </a>
        <a href={source} target="_blank" rel="noopener noreferrer">
          <img src={getImgUrl("contact/git.png")} alt={`Source of ${title}`} />
        </a>
      </div>
    </div>
  );
};
export default ProjectCard;
