import React from "react";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import Img from "gatsby-image";

import styles from "./people-section.module.css";

export default ({ people }) => {
  return (
    <div className={styles.whoContainer}>
      {people.map(({ node }) => {
        return <Person person={node} key={node.id} />;
      })}
    </div>
  );
};

const Person = ({ person }) => {
  return (
    <div className={styles.whoPerson}>
      {person.image && (
        <Img
          className={styles.headShot}
          alt={person.name}
          sizes={person.image.sizes}
        />
      )}
      <div className={styles.contactInfo}>
        <h4 className={styles.contactName}>
          {person.name} <br />
          {person.title}
        </h4>
        <p className={styles.contactInfoText}>
          <FaPhone /> {person.phone}
        </p>
        <p className={styles.contactInfoText}>
          <FaEnvelope /> {person.email}
        </p>
      </div>
    </div>
  );
};
