import React from "react";
import Img from "gatsby-image";

import styles from "./people-section.module.css";

export default ({ people }) => {
  return (
    <div className={styles.whoContainer}>
      {people.map(({ node }, index) => {
        return <Person person={node} key={node.id} index={index} />;
      })}
    </div>
  );
};

const Person = ({ person, index }) => {
  const isEven = index % 2 === 0;
  return (
    <div className={`${styles.whoPerson} ${isEven ? styles.even : styles.odd}`}>
      {person.image && (
        <div className={styles.photoWrap}>
          <Img
            className={styles.photo}
            alt={person.name}
            fluid={{
              ...person.image.fluid,
              aspectRatio: 1
            }}
          />
        </div>
      )}
      <div className={styles.info}>
        <h4 className={styles.name}>{person.name}</h4>
        {person.title && <p className={styles.title}>{person.title}</p>}
        <div className={styles.contact}>
          <span>{person.phone}</span>
          <span>{person.email}</span>
        </div>
      </div>
    </div>
  );
};
