import React from "react";
import styles from "./services-section.module.css";

const services = [
  {
    title: "Web Applications",
    description:
      "Modern, performant web apps using the right tools for the job. React and Next.js are our go-to, but we work across the stack."
  },
  {
    title: "Mobile Development",
    description: "Native and cross-platform apps for iOS and Android."
  },
  {
    title: "Cloud & DevOps",
    description: "Scalable architecture, CI/CD pipelines, and infrastructure."
  },
  {
    title: "Technical Consulting",
    description: "Architecture reviews, tech strategy, and team augmentation."
  },
  {
    title: "UX & Product Design",
    description: "User research, prototyping, and product strategy."
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className={styles.root}>
      <div className={styles.content}>
        <h2>What we do</h2>
        <ul className={styles.list}>
          {services.map((service, i) => (
            <li key={service.title} className={styles.item}>
              <span className={styles.index}>0{i + 1}</span>
              <div className={styles.itemContent}>
                <h3 className={styles.itemTitle}>{service.title}</h3>
                <p className={styles.itemDescription}>{service.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
