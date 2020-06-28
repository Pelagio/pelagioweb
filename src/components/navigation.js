import React from "react";
import styles from "./navigation.module.css";
import { StaticQuery, graphql } from "gatsby";
import { anchorScroll } from "../helpers/anchor-scroll";

export default ({ open }) => (
  <StaticQuery
    query={graphql`
      query NavigationQuery {
        allContentfulPageSection(sort: { fields: [sectionIndex], order: ASC }) {
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
      const data = allContentfulPageSection.edges
        .map(edge => edge.node)
        .filter(item => item.showInMenu);
      return <NavigationComponent items={data} open={open} />;
    }}
  />
);

class NavigationComponent extends React.Component {
  render() {
    const { open, items } = this.props;
    console.log(open);
    return (
      <nav
        role="navigation"
        className={styles.navigationMenu}
        style={!open ? { display: "none" } : { display: "flex" }}
        aria-hidden="false"
      >
        <a
          href="/"
          className={styles.navigationItem}
          style={!open ? { display: "none" } : { display: "flex" }}
          tabIndex={1}
        >
          <span aria-hidden="true">💁🏻‍♂️</span>
          About us
        </a>
        <a
          href="/"
          className={styles.navigationItem}
          style={!open ? { display: "none" } : { display: "flex" }}
          tabIndex={2}
        >
          <span aria-hidden="true">💸</span>
          Pricing
        </a>
        <a
          href="/"
          className={styles.navigationItem}
          style={!open ? { display: "none" } : { display: "flex" }}
          tabIndex={3}
        >
          <span aria-hidden="true">📩</span>
          Contact
        </a>
        {/* <div className={styles.headerMenuSpacer} />
        <a className={styles.headerMenuCenter} href="/" />
        <menu className={styles.headerMenu}>
          {items.map((item) => (
            <a
              key={item.anchor}
              className={styles.menuItem}
              onClick={anchorScroll}
              href={`#${item.anchor}`}
            >
              {item.anchor}
            </a>
          ))}
        </menu> */}
      </nav>
    );
  }
}
