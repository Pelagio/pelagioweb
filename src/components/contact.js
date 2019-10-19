import React from "react";

import styles from "./page-section.module.css";

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export const ContactSection = ({ section }) => {
  const [state, setState] = React.useState({});

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const form = e.target;
    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": form.getAttribute("name"),
          ...state
        })
      });
      // PROB DO THINGS
    } catch (error) {
      alert(error);
    }
  };

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
          onSubmit={handleSubmit}
        >
          {/* You still need to add the hidden input with the form name to your JSX form */}
          <input type="hidden" name="form-name" value="contact" />
          <input
            type="email"
            name="email"
            placeholder="enter your email"
            handleChange={handleChange}
          />
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
