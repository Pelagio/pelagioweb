import React from "react";
import { Stagger, StaggerItem, Pressable } from "@pelagio/motion";
import * as styles from "./services-section.module.css";

const services = [
  {
    title: "Web Applications",
    description:
      "We work alongside your team to build and evolve web products. React and Next.js are our daily drivers, but we go where the project needs us.",
  },
  {
    title: "Mobile Development",
    description:
      "iOS and Android apps with React Native. We've shipped apps for Stena Line, DEFA, and Ourcal — and we stay involved after launch.",
  },
  {
    title: "Cloud & DevOps",
    description:
      "Infrastructure that grows with you. AWS, Azure, Kubernetes, CI/CD — we set it up and help your team run it.",
  },
  {
    title: "Technical Strategy",
    description:
      "Architecture guidance, technology decisions, and hands-on technical leadership. Not slide decks — real work in the codebase.",
  },
  {
    title: "UX & Product Design",
    description:
      "User research, prototyping, and product thinking. We help you figure out what to build, not just how to build it.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className={styles.root}>
      <div className={styles.content}>
        <h2>How we work with you</h2>
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
