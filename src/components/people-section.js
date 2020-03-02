import React from "react";
import { FaPhone, FaEnvelope } from "react-icons/fa";
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
  return (
    <div className={styles.whoPerson}>
      {person.image && (
        <Img
          className={styles.headShot}
          alt={person.name}
          fluid={{ ...person.image.fluid, aspectRatio: 1 }}
        />
      )}
      {person.distanceImage && (
        <div style={{ position: "relative", flex: 2 }}>
          <Img
            className={styles.distanceShot}
            alt={person.name}
            fluid={{ ...person.distanceImage.fluid, aspectRatio: 2 }}
          />
          <div className={styles.distanceShotOverlay}>
            <div className={styles.contactInfo}>
              <h4 className={styles.contactName}>{person.name}</h4>
              <p className={styles.contactInfoText}>
                <FaPhone /> {person.phone}
              </p>
              <p className={styles.contactInfoText}>
                <FaEnvelope /> {person.email}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
