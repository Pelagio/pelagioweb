import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";

import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks
} from "body-scroll-lock";

import Layout from "../components/layout";
import PageSection from "../components/page-section";
import TitleSection from "../components/title-section";
import LogoSection from "../components/logo-section";
import ContactSection from "../components/contact-section";
import { Footer } from "../components/footer";
import { Waves } from "../components/waves";
import Burger from "../components/burger";
import Navigation from "../components/navigation";
import { IntersectProvider } from "../contexts/intersect-context";

class RootIndex extends React.Component {
  constructor() {
    super();
    this.state = { open: false };
    this.setMenuState = this.setMenuState.bind(this);
  }

  scrollRef = React.createRef();
  scrollElement = null;

  componentDidMount() {
    this.scrollElement = this.scrollRef.current;
  }

  componentWillUnmount() {
    clearAllBodyScrollLocks();
  }

  setMenuState(open) {
    open
      ? disableBodyScroll(this.scrollElement)
      : enableBodyScroll(this.scrollElement);
    this.setState({ open });
  }

  render() {
    const { site, data, location, children } = this.props;
    const siteTitle = site && site.siteMetadata.title;
    const sections = data.allContentfulPageSection.edges;

    const people = data.allContentfulPerson.edges;

    const metaTitle = "Pelagio";
    const metaDescription = "A transparent developer & freelancer agency.";
    const metaUrl = "https://pelag.io/";
    const imageUrl = "/img/logo-no-text.png";
    const favicoUrl = "/img/favicon.png";
    return (
      <Layout location={location} children={children}>
        <IntersectProvider>
          <div>
            <Helmet title={siteTitle}>
              <title>{metaTitle}</title>
              <meta name="title" content={metaTitle} />
              <meta name="description" content={metaDescription} />
              <link
                href="https://fonts.googleapis.com/css?family=Lato:100,300,400,700,900|Montserrat:300,400,700,900&display=swap"
                rel="stylesheet"
              />
              <link
                rel="shortcut icon"
                href="favicon.ico"
                type="image/x-icon"
              />
              <link rel="shortcut icon" href={favicoUrl} type="image/x-icon" />
              <meta property="og:type" content="website" />
              <meta property="og:url" content={metaUrl} />
              <meta property="og:title" content={metaTitle} />
              <meta property="og:description" content={metaDescription} />
              <meta property="og:image:url" content={imageUrl} />
              <meta property="og:image:secure_url" content={imageUrl} />
              <meta property="og:image:type" content={"image/png"} />
              <meta property="og:image" content={imageUrl} />
              <meta property="og:image:width" content="400" />
              <meta property="og:image:height" content="400" />

              <meta property="twitter:card" content="summary_large_image" />
              <meta property="twitter:url" content={metaUrl} />
              <meta property="twitter:title" content={metaTitle} />
              <meta property="twitter:description" content={metaDescription} />
              <meta property="twitter:image" content={imageUrl} />
            </Helmet>
            <div className="wrapper" ref={this.scrollRef}>
              <Navigation
                open={this.state.open}
                closeMenu={() => {
                  this.setMenuState(false);
                }}
              />
              <Burger open={this.state.open} setOpen={this.setMenuState} />

              <ul className="section-list">
                <div className="wave-wrapper">
                  <LogoSection />
                  <Waves />
                </div>
                {sections.map(({ node }) => {
                  let component = null;
                  switch (node.sectionType) {
                    case "title":
                      component = <TitleSection section={node} />;
                      break;
                    case "people":
                      component = (
                        <PageSection section={node} people={people} />
                      );
                      break;
                    case "contact":
                      component = <ContactSection section={node} />;
                      break;
                    default:
                      component = <PageSection section={node} />;
                  }
                  return <li key={node.id}>{component}</li>;
                })}
              </ul>
            </div>
            <Footer />
          </div>
        </IntersectProvider>
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
              aspectRatio
            }
          }
          distanceImage {
            fluid(maxWidth: 1500) {
              sizes
              src
              srcSet
              aspectRatio
            }
          }
        }
      }
    }
  }
`;
