import React from "react";

import styles from "./page-section.module.css";

export const ContactSection = ({ section }) => {
  return (
    <section id={section.anchor} className={styles.sectionBlock}>
      <div
        className={styles.parallax}
        style={{
          backgroundImage: `url(${section.background.fluid.src})`
        }}
      />
      <div className={styles.sectionContent}>
        <h2>{section.title}</h2>
        <form
          name="contact"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          {/* You still need to add the hidden input with the form name to your JSX form */}
          <input type="hidden" name="form-name" value="contact" />
          <input type="email" name="email" placeholder="enter your email" />
          <button type="submit" />
        </form>
        <div
          dangerouslySetInnerHTML={{
            __html: section.content.content
          }}
        />
      </div>
    </section>
  );
};
