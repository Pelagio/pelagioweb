import React, { useContext } from "react";
import { IntersectContext } from "../contexts/intersect-context";

import * as styles from "./burger.module.css";

export default ({ open, setOpen }) => {
  const { intersect } = useContext(IntersectContext);

  return (
    <button
      type="button"
      className={styles.styledBurger}
      onClick={() => setOpen(!open)}
      aria-label={open ? "Close menu" : "Open menu"}
      aria-expanded={open}
    >
      <div
        className={open ? styles.openedUpperLine : styles.upperLine}
        style={{ backgroundColor: intersect && !open ? "black" : "white" }}
      />
      <div
        className={open ? styles.openedLowerLine : styles.lowerLine}
        style={{ backgroundColor: intersect && !open ? "black" : "white" }}
      />
    </button>
  );
};
