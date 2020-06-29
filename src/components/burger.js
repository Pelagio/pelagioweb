import React from "react";

import styles from "./burger.module.css";

export default ({ open, setOpen }) => {
  return (
    <div className={styles.styledBurger} onClick={() => setOpen(!open)}>
      <div className={open ? styles.openedUpperLine : styles.upperLine} />
      <div className={open ? styles.openedLowerLine : styles.lowerLine} />
    </div>
  );
};
