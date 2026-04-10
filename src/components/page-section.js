import React, { useEffect, useContext } from "react";
import { AnimateInView, fadeLeft } from "@pelagio/motion";
import * as styles from "./page-section.module.css";
import PeopleSection from "./people-section";
import { useIntersect } from "../helpers/use-intersect";
import { IntersectContext } from "../contexts/intersect-context";

export default ({ section, people }) => {
  const { handleIntersect } = useContext(IntersectContext);

  const [ref, entry] = useIntersect({
    threshold: 0.9,
  });

  useEffect(() => {
    handleIntersect(entry);
  }, [entry]);

  return (
    <section ref={ref} id={section.anchor} className={styles.sectionBlock}>
      <AnimateInView variants={people ? undefined : fadeLeft}>
        {people ? (
          <div className={styles.sectionContent} style={{ padding: 0 }}>
            <h2>{section.title}</h2>
            <PeopleSection people={people} />
          </div>
        ) : (
          <div className={styles.sectionContent}>
            <h2>{section.title}</h2>
            <div
              className={styles.innerContent}
              dangerouslySetInnerHTML={{
                __html: section.content ? section.content.content : "",
              }}
            />
          </div>
        )}
      </AnimateInView>
    </section>
  );
};
