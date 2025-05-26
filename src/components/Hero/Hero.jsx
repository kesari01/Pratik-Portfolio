import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Pratik Kumar</h1>
        <p className={styles.description}>
          A full-stack dev by day, 
          bug-squashing wizard by night. I build bold, fast, 
          and scalable web apps with React, Node.js, and cloud 
          magic that actually make the internet a cooler place.
        </p>
        <div className={styles.HeroButtons}>
          <a
            href="resume.pdf"
            className={styles.contactBtn}
            download="resume.pdf"
          >
            Resume / CV
          </a>

          <a href="mailto:pratikkumar.p007@email.com" className={styles.contactBtn}>
            Contact Me
          </a>
        </div>
      </div>
      <img src="../../../assets/hero/photo.png" alt="Hero image of me" className={styles.heroImg} />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
