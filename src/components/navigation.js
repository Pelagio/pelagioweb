import React from "react";
import { motion } from "framer-motion";
import * as styles from "./navigation.module.css";
import { StaticQuery, graphql } from "gatsby";
import { anchorScroll } from "../helpers/anchor-scroll";

export default ({ open, closeMenu }) => (
  <StaticQuery
    query={graphql`
      query NavigationQuery {
        allContentfulPageSection(sort: { sectionIndex: ASC }) {
          edges {
            node {
              id
              title
              anchor
              showInMenu
            }
          }
        }
      }
    `}
    render={({ allContentfulPageSection }) => {
      const contentfulItems = allContentfulPageSection.edges
        .map((edge) => edge.node)
        .filter((item) => item.showInMenu);

      // Hardcoded sections that aren't in Contentful
      const extraItems = [
        { anchor: "services", title: "services" },
        { anchor: "clients", title: "clients" },
      ];

      // Insert after the first Contentful item (the tagline section)
      const data = [
        ...contentfulItems.slice(0, 1),
        ...extraItems,
        ...contentfulItems.slice(1),
      ];

      return (
        <NavigationComponent items={data} open={open} closeMenu={closeMenu} />
      );
    }}
  />
);

// Short menu labels keyed by anchor slug (more reliable than title matching)
const menuLabels = {
  contact: "Get in touch",
};

// Fast ease-out curve — starts at full velocity so the menu feels instant.
const FAST_EASE = [0.16, 1, 0.3, 1];

const navVariants = {
  open: {
    opacity: 1,
    pointerEvents: "auto",
    transition: {
      duration: 0.2,
      ease: FAST_EASE,
      staggerChildren: 0.05,
      delayChildren: 0.05,
    },
  },
  closed: {
    opacity: 0,
    pointerEvents: "none",
    transition: {
      duration: 0.15,
      ease: "easeOut",
      when: "afterChildren",
      staggerChildren: 0.02,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  open: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.25, ease: FAST_EASE },
  },
  closed: {
    x: 20,
    opacity: 0,
    transition: { duration: 0.15, ease: "easeOut" },
  },
};

const NavigationComponent = ({ open, items, closeMenu }) => {
  return (
    <motion.nav
      role="navigation"
      className={styles.navigationMenu}
      onClick={closeMenu}
      initial={false}
      animate={open ? "open" : "closed"}
      variants={navVariants}
      aria-hidden={!open}
    >
      {items.map((item) => (
        <motion.a
          key={item.anchor}
          className={styles.navigationItem}
          href={`#${item.anchor}`}
          variants={itemVariants}
          onClick={(e) => {
            closeMenu();
            anchorScroll(e, 100);
          }}
        >
          {menuLabels[item.anchor] || item.title || item.anchor}
        </motion.a>
      ))}
    </motion.nav>
  );
};
