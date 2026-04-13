import React from "react";

import * as styles from "./burger.module.css";

export default ({ open, setOpen }) => {
  return (
    <button
      type="button"
      className={styles.styledBurger}
      onClick={() => setOpen(!open)}
      aria-label={open ? "Close menu" : "Open menu"}
      aria-expanded={open}
    >
      <div className={open ? styles.openedUpperLine : styles.upperLine} />
      <div className={open ? styles.openedLowerLine : styles.lowerLine} />
    </button>
  );
};
