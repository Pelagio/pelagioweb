import React from "react";

import sectionStyles from "./page-section.module.css";

export default ({ section }) => {
  return (
    <section id="title" className={sectionStyles.sectionBlock}>
      <div
        className={sectionStyles.parallax}
        style={{
          backgroundImage: `url(${section.background.fluid.src})`
        }}
      />
      <div className={sectionStyles.sectionContent}>
        <h1 style={{ textAlign: "center" }}>{section.title}</h1>
      </div>
    </section>
  );
};
