import React from "react";
import { Stagger, StaggerItem, Pressable } from "@pelagio/motion";
import * as styles from "./services-section.module.css";

const services = [
  {
    title: "Web Applications",
    description:
      "Full-stack web applications from frontend to backend. React and Next.js are our go-to, but we work across the entire stack.",
  },
  {
    title: "Mobile Development",
    description: "Native and cross-platform apps for iOS and Android.",
  },
  {
    title: "Cloud & DevOps",
    description: "Scalable architecture, CI/CD pipelines, and infrastructure.",
  },
  {
    title: "Technical Consulting",
    description: "Architecture reviews, tech strategy, and team augmentation.",
  },
  {
    title: "UX & Product Design",
    description: "User research, prototyping, and product strategy.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className={styles.root}>
      <div className={styles.content}>
        <h2>What we do</h2>
        <Stagger as="ul" from="bottom" className={styles.list}>
          {services.map((service, i) => (
            <StaggerItem as="li" key={service.title} className={styles.item}>
              <Pressable
                hover="subtle"
                style={{
                  display: "flex",
                  width: "100%",
                  gap: "24px",
                  alignItems: "baseline",
                }}
              >
                <span className={styles.index}>0{i + 1}</span>
                <div className={styles.itemContent}>
                  <h3 className={styles.itemTitle}>{service.title}</h3>
                  <p className={styles.itemDescription}>
                    {service.description}
                  </p>
                </div>
              </Pressable>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
