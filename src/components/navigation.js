import React from "react";
import styles from "./navigation.module.css";
import { StaticQuery, graphql } from "gatsby";
import { anchorScroll } from "../helpers/anchor-scroll";

export default ({ open, closeMenu }) => (
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
      return (
        <NavigationComponent items={data} open={open} closeMenu={closeMenu} />
      );
    }}
  />
);

class NavigationComponent extends React.Component {
  render() {
    const { open, items, closeMenu } = this.props;
    return (
      <nav
        role="navigation"
        className={styles.navigationMenu}
        style={open ? { opacity: 0.8 } : { opacity: 0 }}
        aria-hidden={!open}
        onClick={closeMenu}
      >
        {items.map(item => (
          <a
            key={item.anchor}
            className={styles.navigationItem}
            onClick={e => {
              closeMenu();
              anchorScroll(e, 100);
            }}
            href={`#${item.anchor}`}
          >
            {item.anchor}
          </a>
        ))}
      </nav>
    );
  }
}
