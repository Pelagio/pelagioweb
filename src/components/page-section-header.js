import React from "react";

import styles from "./page-section-header.module.css";

export default ({ children }) => {
  return <h2 className={styles.sectionHeader}>{children}</h2>;
};
