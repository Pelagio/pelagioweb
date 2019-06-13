import React from "react";
import styles from "./navigation.module.css";
import { StaticQuery, graphql } from "gatsby";
import { anchorScroll } from "../helpers/anchor-scroll";

export default () => (
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
      return <NavigationComponent items={data} />;
    }}
  />
);

class NavigationComponent extends React.Component {
  state = {
    expanded: true
  };
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = event => {
    this.setState({
      expanded: !!(window.scrollY < 100)
    });
  };

  render() {
    const { expanded } = this.state;
    return (
      <nav
        role="navigation"
        className={expanded ? styles.titleHeader : styles.titleHeaderSmall}
      >
        {expanded && <div className={styles.headerMenuSpacer} />}
        <a
          className={
            expanded ? styles.headerMenuCenter : styles.headerMenuCenterSmall
          }
          href="/"
        />
        <menu className={expanded ? styles.headerMenu : styles.headerMenuSmall}>
          {this.props.items.map(item => (
            <a
              key={item.anchor}
              className={styles.menuItem}
              onClick={anchorScroll}
              href={`#${item.anchor}`}
            >
              {item.anchor}
            </a>
          ))}
        </menu>
      </nav>
    );
  }
}
