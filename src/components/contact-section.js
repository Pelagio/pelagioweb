import React from "react";
import { AnimateInView, scaleIn } from "@pelagio/motion";
import * as styles from "./contact-section.module.css";

export default ({ section }) => {
  return (
    <section id={section.anchor} className={styles.sectionBlock}>
      <AnimateInView variants={scaleIn}>
        <div className={styles.sectionContent}>
          <h2>{section.title}</h2>
          <div
            className={styles.innerContent}
            dangerouslySetInnerHTML={{
              __html: section.content ? section.content.content : "",
            }}
          />
        </div>
      </AnimateInView>
    </section>
  );
};
