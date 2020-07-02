import React, { useContext } from "react";
import { IntersectContext } from "../contexts/intersect-context";

import styles from "./burger.module.css";

export default ({ open, setOpen }) => {
  const { intersect } = useContext(IntersectContext);

  return (
    <div className={styles.styledBurger} onClick={() => setOpen(!open)}>
      <div
        className={open ? styles.openedUpperLine : styles.upperLine}
        style={{ backgroundColor: intersect && !open ? "black" : "white" }}
      />
      <div
        className={open ? styles.openedLowerLine : styles.lowerLine}
        style={{ backgroundColor: intersect && !open ? "black" : "white" }}
      />
    </div>
  );
};
