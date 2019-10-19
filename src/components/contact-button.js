import React, { useState } from "react";

import styles from "./contact-button.module.css";
import { useInterval } from "../helpers/use-interval";
import { encode } from "../helpers/forms";
import { delay } from "q";

const thingsForFree = [
  { key: "beer", emoji: "🍺" },
  { key: "coffee", emoji: "☕️" },
  { key: "taco", emoji: "🌮" },
  { key: "ideas", emoji: "💡" },
  { key: "talk", emoji: "🗣" }
];

export const ContactButton = ({}) => {
  const [formState, setFormState] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [fullscreen, setFullsceen] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [thingsForFreeIndex, setThingsForFreeIndex] = useState(0);
  useInterval(() => {
    setThingsForFreeIndex((thingsForFreeIndex + 1) % thingsForFree.length);
  }, 1000);

  const thingForFree = thingsForFree[thingsForFreeIndex];

  const handleChange = e => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
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
          ...formState
        })
      });
      form.reset();
      toggleFullscreen();
      setFormSubmitted(true);
      await delay(1500);
      setFormSent(true);
    } catch (error) {
      alert(error);
    }
  };

  const toggleFullscreen = () => {
    setFullsceen(!fullscreen);
  };

  return (
    <div
      className={[
        styles.root,
        fullscreen ? styles.fullscreen : styles.small,
        formSent && styles.formSent
      ].join(" ")}
    >
      {fullscreen ? (
        <div>
          <button className={styles.closeButton} onClick={toggleFullscreen}>
            X
          </button>
          <form
            className={styles.form}
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
              onChange={handleChange}
            />
            <button className={styles.submitButton} type="submit">
              send
            </button>
          </form>
        </div>
      ) : (
        <button
          onClick={toggleFullscreen}
          className={[styles.button].join(" ")}
        >
          <span className={styles.ctaText}>
            {formSubmitted ? "thanks" : "free"}
          </span>
          <div className={styles.emoji}>
            {formSubmitted ? "💌" : thingForFree.emoji}
          </div>
        </button>
      )}
    </div>
  );
};
