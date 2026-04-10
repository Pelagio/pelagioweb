import React, { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { Stagger, StaggerItem } from "@pelagio/motion";

import * as styles from "./clients-section.module.css";

import logoVolvo from "../../static/img/clients/volvo-cars.svg";
import logoTelia from "../../static/img/clients/telia.svg";
import logoStenaLine from "../../static/img/clients/stena-line.svg";
import logoSwegon from "../../static/img/clients/swegon.svg";
import logoCloudCharge from "../../static/img/clients/cloudcharge.png";
import logoOurcal from "../../static/img/clients/ourcal.svg";
import logoWiberger from "../../static/img/clients/wiberger.svg";
import logoDefa from "../../static/img/clients/defa.svg";

const clients = [
  {
    name: "Volvo Cars",
    project: "Car Configurator",
    url: "https://www.volvocars.com/se/build/ex60-electric",
    logo: logoVolvo,
  },
  {
    name: "Telia",
    project: "Device Shop",
    url: "https://www.telia.se/mobiltelefoner",
    logo: logoTelia,
    noInvert: true,
  },
  {
    name: "Stena Line",
    project: "My Trips — iOS App",
    url: "https://apps.apple.com/se/app/stena-line-my-trips/id6449490375",
    logo: logoStenaLine,
  },
  {
    name: "Swegon",
    project: "Product Selector",
    url: "https://spc.rud.swegon.com/product-selector",
    logo: logoSwegon,
  },
  {
    name: "Generasjonsfondet",
    project: "Brand Experience",
    url: "https://www.generasjonsfondet.no/",
    logo: null,
  },
  {
    name: "Wiberger",
    project: "E-commerce",
    url: "https://www.wiberger.se/",
    logo: logoWiberger,
    noInvert: true,
  },
  {
    name: "DEFA",
    project: "Power App — EV Charging",
    url: "https://www.defa.com/defapowerapp/",
    logo: logoDefa,
  },
  {
    name: "Cloud Charge",
    project: "Charging Portal",
    logo: logoCloudCharge,
  },
  {
    name: "Ourcal",
    project: "Calendar Platform",
    url: "https://ourcal.com/",
    logo: logoOurcal,
    noInvert: true,
  },
];

/**
 * 3D perspective tilt card. Follows the cursor with spring-damped
 * rotateX/rotateY. Returns to flat on mouse leave.
 */
const TiltCard = ({ children, className }) => {
  const ref = useRef(null);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springConfig = { stiffness: 300, damping: 20 };
  const sRotateX = useSpring(rotateX, springConfig);
  const sRotateY = useSpring(rotateY, springConfig);

  const handleMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    rotateY.set(x * 14);
    rotateX.set(-y * 14);
  };

  const handleLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{
        rotateX: sRotateX,
        rotateY: sRotateY,
        transformPerspective: 800,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      {children}
    </motion.div>
  );
};

export default function ClientsSection() {
  return (
    <section id="clients" className={styles.root}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Selected work</h2>
        <Stagger as="ul" from="bottom" delay={0.08} className={styles.grid}>
          {clients.map((client) => {
            const content = (
              <TiltCard className={styles.cardInner}>
                {client.logo ? (
                  <div className={styles.logoWrap}>
                    <img
                      src={client.logo}
                      alt={`${client.name} logo — Pelagio client`}
                      width="160"
                      height="56"
                      className={
                        client.logo.endsWith(".svg") && !client.noInvert
                          ? styles.logoSvg
                          : styles.logoRaster
                      }
                    />
                  </div>
                ) : (
                  <span className={styles.name}>{client.name}</span>
                )}
                <span className={styles.project}>{client.project}</span>
              </TiltCard>
            );

            return (
              <StaggerItem as="li" key={client.name} className={styles.card}>
                {client.url ? (
                  <a
                    href={client.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.link}
                  >
                    {content}
                  </a>
                ) : (
                  <div className={styles.link}>{content}</div>
                )}
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
