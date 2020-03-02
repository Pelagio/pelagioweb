import React from "react";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import Img from "gatsby-image";
import { window } from "browser-monads";

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
        <div className={styles.headShot}>
          <Img
            className={styles.headShotImage}
            alt={person.name}
            fluid={{
              ...person.image.fluid,
              aspectRatio: window.matchMedia(
                "@media only screen and (max-width: 700px)"
              )
                ? 0.815
                : 1
            }}
          />
          <ContactInfo person={person} />
        </div>
      )}
      {person.distanceImage && (
        <div className={styles.distanceShot}>
          <Img
            className={styles.distanceShotImage}
            alt={person.name}
            fluid={{ ...person.distanceImage.fluid, aspectRatio: 2 }}
          />
          <div className={styles.distanceShotOverlay}>
            <ContactInfo person={person} />
          </div>
        </div>
      )}
    </div>
  );
};

const ContactInfo = ({ person }) => {
  return (
    <div className={styles.contactInfo}>
      <h4 className={styles.contactName}>{person.name}</h4>
      <p className={styles.contactInfoText}>
        <FaPhone /> {person.phone}
      </p>
      <p className={styles.contactInfoText}>
        <FaEnvelope /> {person.email}
      </p>
    </div>
  );
};
