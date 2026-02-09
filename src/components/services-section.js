import React from "react";
import styles from "./services-section.module.css";

const services = [
  {
    icon: "{ }",
    title: "Web Applications",
    description:
      "Modern, performant web apps built with React, Next.js, and Node.js."
  },
  {
    icon: "\u25B3",
    title: "Mobile Development",
    description: "Native and cross-platform apps for iOS and Android."
  },
  {
    icon: "\u2601",
    title: "Cloud & DevOps",
    description: "Scalable architecture, CI/CD pipelines, and infrastructure."
  },
  {
    icon: "\u2192",
    title: "Technical Consulting",
    description: "Architecture reviews, tech strategy, and team augmentation."
  },
  {
    icon: "\u25CE",
    title: "UX & Product Design",
    description: "User research, prototyping, and product strategy."
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className={styles.root}>
      <div className={styles.content}>
        <h2>What we do</h2>
        <div className={styles.grid}>
          {services.map(service => (
            <div key={service.title} className={styles.card}>
              <div className={styles.icon}>{service.icon}</div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDescription}>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
