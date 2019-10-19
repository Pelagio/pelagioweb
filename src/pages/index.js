import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import PageSection from "../components/page-section";
import TitleSection from "../components/title-section";
import { ContactButton } from "../components/contact-button";

class RootIndex extends React.Component {
  render() {
    const { site, data, location, children } = this.props;
    const siteTitle = site && site.siteMetadata.title;
    const sections = data.allContentfulPageSection.edges;

    const people = data.allContentfulPerson.edges;

    const metaTitle = "Pelagio";
    const metaDescription = "A transparent developer and freelancer agency";
    const metaUrl = "https://pelag.io/";
    return (
      <Layout location={location} children={children}>
        <div style={{ background: "#fff" }}>
          <Helmet title={siteTitle}>
            <title>{metaTitle}</title>
            <meta name="title" content={metaTitle} />
            <meta name="description" content={metaDescription} />

            <meta property="og:type" content="website" />
            <meta property="og:url" content={metaUrl} />
            <meta property="og:title" content={metaTitle} />
            <meta property="og:description" content={metaDescription} />
            <meta property="og:image" content={"../../static/img/logo.png"} />

            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={metaUrl} />
            <meta property="twitter:title" content={metaTitle} />
            <meta property="twitter:description" content={metaDescription} />
            <meta
              property="twitter:image"
              content={"../../static/img/logo.png"}
            />
          </Helmet>
          <div className="wrapper">
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
            <ContactButton />
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
            fluid(maxWidth: 1500, quality: 90) {
              sizes
              src
              srcSet
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
            fluid(maxWidth: 1500) {
              sizes
              src
              srcSet
            }
          }
        }
      }
    }
  }
`;
