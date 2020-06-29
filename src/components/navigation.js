import React from "react";
import styles from "./navigation.module.css";
import { StaticQuery, graphql } from "gatsby";
import { anchorScroll } from "../helpers/anchor-scroll";

export default ({ open, setOpen, closeMenu }) => (
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
        <NavigationComponent
          items={data}
          open={open}
          setOpen={setOpen}
          closeMenu={closeMenu}
        />
      );
    }}
  />
);

class NavigationComponent extends React.Component {
  render() {
    const { open, setOpen, items, closeMenu } = this.props;
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
              setOpen();
              anchorScroll(e);
            }}
            href={`#${item.anchor}`}
          >
            {item.anchor}
          </a>
        ))}
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
