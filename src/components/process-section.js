import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import * as styles from "./process-section.module.css";

const phases = [
  {
    number: "01",
    title: "Discover",
    description:
      "We start by understanding your business, users, and constraints. Workshops, stakeholder interviews, and a written brief before any code is written.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "Architecture, data models, and UX prototypes. We design the system on paper before we build it in code — so the hard decisions happen early.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Iterative development with weekly demos. Production-quality code from day one. You see progress, not promises.",
  },
  {
    number: "04",
    title: "Ship",
    description:
      "Deploy, monitor, and hand off. We don't disappear after launch — we make sure your team can run, extend, and scale what we built.",
  },
];

export default function ProcessSection() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;

    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    // The track is N viewport widths wide. We translate it left by
    // (N - 1) * viewportWidth as the user scrolls vertically.
    const totalScroll = window.innerWidth * (phases.length - 1);

    const ctx = gsap.context(() => {
      gsap.to(track, {
        x: -totalScroll,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${totalScroll}`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const idx = Math.min(
              phases.length - 1,
              Math.round(self.progress * (phases.length - 1)),
            );
            setActiveIndex(idx);
          },
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="process"
      className={styles.section}
      aria-label="Our process"
    >
      <div className={styles.header}>
        <h2 className={styles.heading}>How we work</h2>
        <div className={styles.tracker} role="presentation">
          {phases.map((phase, i) => (
            <span
              key={phase.number}
              className={`${styles.dot} ${
                i === activeIndex ? styles.dotActive : ""
              }`}
            />
          ))}
        </div>
      </div>
      <div className={styles.trackWrapper}>
        <div ref={trackRef} className={styles.track}>
          {phases.map((phase) => (
            <div key={phase.number} className={styles.phase}>
              <div className={styles.phaseNumber}>{phase.number}</div>
              <h3 className={styles.phaseTitle}>{phase.title}</h3>
              <p className={styles.phaseDescription}>{phase.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
