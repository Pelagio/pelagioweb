import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Stagger, StaggerItem } from "@pelagio/motion";

import * as styles from "./people-section.module.css";

export default ({ people }) => {
  return (
    <Stagger from="bottom" className={styles.whoContainer}>
      {people.map(({ node }) => (
        <StaggerItem key={node.id} className={styles.whoPerson}>
          <PersonContent person={node} />
        </StaggerItem>
      ))}
    </Stagger>
  );
};

const PersonContent = ({ person }) => {
  const mobileImage = person.image && getImage(person.image.mobile);
  const desktopImage = person.image && getImage(person.image.desktop);
  const distanceImage = person.distanceImage && getImage(person.distanceImage);

  return (
    <>
      {person.image && (
        <div className={styles.headShot}>
          {mobileImage && (
            <GatsbyImage
              className={styles.mobileHeadShotImage}
              alt={person.name}
              image={mobileImage}
            />
          )}
          {desktopImage && (
            <GatsbyImage
              className={styles.headShotImage}
              alt={person.name}
              image={desktopImage}
            />
          )}
        </div>
      )}
      {person.distanceImage && distanceImage && (
        <div className={styles.distanceShot}>
          <GatsbyImage
            className={styles.distanceShotImage}
            alt={person.name}
            image={distanceImage}
          />
        </div>
      )}
      <div className={styles.contactInfoWrapper}>
        <div className={styles.contactInfoSpacer} />
        <ContactInfo person={person} />
      </div>
    </>
  );
};

const ContactInfo = ({ person }) => {
  return (
    <div className={styles.contactInfoContainer}>
      <div className={styles.contactInfo}>
        <h3 className={styles.contactName}>{person.name}</h3>
        {person.title && (
          <p className={styles.contactInfoText}>{person.title}</p>
        )}
        <p className={styles.contactInfoText}>{person.phone}</p>
        <p className={styles.contactInfoText}>{person.email}</p>
      </div>
    </div>
  );
};
