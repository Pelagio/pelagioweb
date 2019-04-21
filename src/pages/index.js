import React from "react";
import get from "lodash/get";
import Helmet from "react-helmet";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import PageSection from "../components/page-section";
import TitleSection from "../components/title-section";

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, "props.data.site.siteMetadata.title");
    const sections = get(this, "props.data.allContentfulPageSection.edges");

    const people = get(this, "props.data.allContentfulPerson.edges");
    return (
      <Layout location={this.props.location} children={this.props.children}>
        <div style={{ background: "#fff" }}>
          <Helmet title={siteTitle} />
          <div className="wrapper">
            <h2 className="section-headline">Recent articles</h2>
            <ul className="section-list">
              {sections.map(({ node }) => {
                let component = null;
                switch (node.sectionType) {
                  case "title":
                    component = <TitleSection section={node} />;
                    break;
                  case "people":
                    component = <PageSection section={node} people={people} />;
                    break;
                  default:
                    component = <PageSection section={node} />;
                }
                return <li key={node.id}>{component}</li>;
              })}
            </ul>
          </div>
        </div>
      </Layout>
    );
  }
}

export default RootIndex;

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulPageSection(sort: { fields: [sectionIndex], order: ASC }) {
      edges {
        node {
          id
          title
          sectionType
          content {
            id
            content
          }
          background {
            sizes(
              maxWidth: 1180
              maxHeight: 480
              resizingBehavior: PAD
              background: "rgb:000000"
            ) {
              ...GatsbyContentfulSizes_withWebp
            }
          }
          anchor
        }
      }
    }
    allContentfulPerson(sort: { fields: [name], order: ASC }) {
      edges {
        node {
          id
          name
          title
          email
          phone
          image {
            sizes(
              maxWidth: 1180
              maxHeight: 480
              resizingBehavior: PAD
              background: "rgb:000000"
            ) {
              ...GatsbyContentfulSizes_withWebp
            }
          }
        }
      }
    }
  }
`;
