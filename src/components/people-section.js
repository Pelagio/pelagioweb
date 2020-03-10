import React from "react";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import Img from "gatsby-image";
import { window } from "browser-monads";

import styles from "./people-section.module.css";

export default ({ people }) => {
  const { matches: isMobile } = window.matchMedia(
    "only screen and (max-width: 420px)"
  );

  return (
    <div className={styles.whoContainer}>
      {people.map(({ node }, index) => {
        return (
          <Person
            person={node}
            key={node.id}
            index={index}
            isMobile={isMobile}
          />
        );
      })}
    </div>
  );
};

const Person = ({ person, index, isMobile }) => {
  return (
    <div className={styles.whoPerson}>
      {person.image && (
        <div className={styles.headShot}>
          <Img
            className={styles.headShotImage}
            alt={person.name}
            style={isMobile ? null : { display: "none" }}
            fluid={{
              ...person.image.fluid,
              aspectRatio: 0.815
            }}
          />
          <Img
            className={styles.headShotImage}
            alt={person.name}
            style={isMobile ? { display: "none" } : null}
            fluid={{
              ...person.image.fluid,
              aspectRatio: 1
            }}
          />
        </div>
      )}
      {person.distanceImage && (
        <div className={styles.distanceShot}>
          <Img
            className={styles.distanceShotImage}
            alt={person.name}
            fluid={{ ...person.distanceImage.fluid, aspectRatio: 2 }}
          />
          <div className={styles.distanceShotOverlay} />
        </div>
      )}
      <div className={styles.contactInfoWrapper}>
        <div className={styles.contactInfoSpacer} />
        <ContactInfo person={person} />
      </div>
    </div>
  );
};

const ContactInfo = ({ person }) => {
  return (
    <div className={styles.contactInfoContainer}>
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
  );
};
