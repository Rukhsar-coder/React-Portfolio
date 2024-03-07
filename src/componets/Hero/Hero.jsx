// import React from "react";
import { getImgUrl } from "../../utils";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I’m Rukhsar</h1>
        <p className={styles.description}>
          I’m a full-stack developer with 5 years of experience using React and
          NodeJS. Reach out if you’d like to learn more!{" "}
        </p>
        <a href="mailto:rukshar_malik@yahoo.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImgUrl("hero/heroImage1.png")}
        alt="Hero Image"
        className={styles.heroImg}
      />
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>
  );
};

export default Hero;
