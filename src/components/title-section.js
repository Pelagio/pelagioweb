import React from "react";
import { AnimateInView } from "@pelagio/motion";

import * as sectionStyles from "./page-section.module.css";
import * as styles from "./title-section.module.css";

export default ({ section }) => {
  return (
    <section
      id="title"
      className={`${sectionStyles.sectionBlock} ${styles.root}`}
    >
      <div className={`${sectionStyles.sectionContent} ${styles.content}`}>
        <AnimateInView>
          <h1 className={styles.h1}>
            {section.title}
            <strong>.</strong>
          </h1>
        </AnimateInView>
      </div>
    </section>
  );
};
