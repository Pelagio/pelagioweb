import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import * as styles from "./logo-section.module.css";

import logo from "../../static/img/logo-outset-white.svg";

export default ({ section }) => {
  const sectionRef = useRef(null);
  const logoRef = useRef(null);
  const bgRef = useRef(null);
  const indicatorRef = useRef(null);

  useEffect(() => {
    if (!gsap || !ScrollTrigger) return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=60%",
          pin: true,
          scrub: 0.8,
          anticipatePin: 1,
        },
      });

      // Logo: zoom toward viewer + 3D tilt + blur + fade
      tl.to(
        logoRef.current,
        {
          scale: 3,
          rotateX: -25,
          filter: "blur(24px)",
          opacity: 0,
          ease: "power3.in",
          duration: 1,
        },
        0,
      );

      // Gradient: dramatic diagonal shift
      tl.to(
        bgRef.current,
        {
          backgroundPosition: "100% 0%",
          ease: "power1.inOut",
          duration: 1,
        },
        0,
      );

      // Scroll indicator: fade + drop early
      tl.to(
        indicatorRef.current,
        { opacity: 0, y: 30, ease: "power1.in", duration: 0.25 },
        0,
      );
    }, sectionRef.current);

    return () => ctx.revert();
  }, []);

  return (
    <section id="hero" ref={sectionRef}>
      <div
        className={styles.sectionContent}
        ref={bgRef}
        style={{ perspective: "800px" }}
      >
        <div className={styles.logoWrapper} ref={logoRef}>
          <img
            src={logo}
            alt="Pelagio - Senior Software Development Partner"
            width="380"
            height="380"
            className={styles.logoFloat}
          />
        </div>
        <div
          className={styles.scrollIndicator}
          ref={indicatorRef}
          aria-hidden="true"
        >
          <span>Scroll</span>
          <div className={styles.scrollArrow} />
        </div>
      </div>
    </section>
  );
};
