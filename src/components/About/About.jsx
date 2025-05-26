import React from "react";
import styles from "./About.module.css";
import skills from "../../data/skills.json"; // Importing skills.json
import { getImageUrl } from "../../utils"; // Assuming getImageUrl is a function

// Access the frontend array from the skills object
const frontendSkills = skills.frontend;
const backendSkills = skills.backend;
const databaseSkills = skills.database;
const cloudSkills = skills.cloud
// const devopsSkills = skills.devops;

export const About = () => {
  return (
    <section className={styles.container} id="skills">
      <h2 className={styles.title}>Skills</h2>
      <div className={styles.content}>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("skills/frontend.png")} alt="Frontend" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <div className={styles.skillsIcon}>
                {frontendSkills.map((skill, id) => (
                  <div key={id} className={styles.skill}>
                    <div className={styles.skillImageContainer}>
                      <img
                        src={getImageUrl(skill.imageSrc)}
                        alt={skill.title}
                      />
                    </div>
                    <p>{skill.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("skills/backend.png")} alt="Backend" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <div className={styles.skillsIcon}>
                {backendSkills.map((skill, id) => (
                  <div key={id} className={styles.skill}>
                    <div className={styles.skillImageContainer}>
                      <img
                        src={getImageUrl(skill.imageSrc)}
                        alt={skill.title}
                      />
                    </div>
                    <p>{skill.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("skills/database.png")} alt="Database" />
            <div className={styles.aboutItemText}>
              <h3>Database Management</h3>
              <div className={styles.skillsIcon}>
                {databaseSkills.map((skill, id) => (
                  <div key={id} className={styles.skill}>
                    <div className={styles.skillImageContainer}>
                      <img
                        src={getImageUrl(skill.imageSrc)}
                        alt={skill.title}
                      />
                    </div>
                    <p>{skill.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("skills/aws.svg")} alt="Database" />
            <div className={styles.aboutItemText}>
              <h3>Cloud Certification</h3>
              <div className={styles.skillsIcon}>
                {cloudSkills.map((skill, id) => (
                  <div key={id} className={styles.skill}>
                    <div className={styles.skillImageContainer}>
                      <img
                        src={getImageUrl(skill.imageSrc)}
                        alt={skill.title}
                      />
                    </div>
                    <p>{skill.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </li>

        </ul>
      </div>
    </section>
  );
};
