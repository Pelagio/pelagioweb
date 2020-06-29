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
  return (
    <div className={styles.whoPerson}>
      {person.image && (
        <div className={styles.headShot}>
          <Img
            className={styles.mobileHeadShotImage}
            alt={person.name}
            fluid={{
              ...person.image.fluid,
              aspectRatio: 0.815
            }}
          />
          <Img
            className={styles.headShotImage}
            alt={person.name}
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
        <p className={styles.contactInfoText}>{person.phone}</p>
        <p className={styles.contactInfoText}>{person.email}</p>
      </div>
    </div>
  );
};
