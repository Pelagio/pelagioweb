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

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Pelagio",
  legalName: "Pelagio Development AB",
  url: "https://pelag.io",
  logo: "https://pelag.io/img/logo-no-text.png",
  description:
    "Pelagio is a Gothenburg-based software development agency specializing in web development, mobile apps, cloud solutions, and technical consulting. We deliver high-quality digital products through experienced senior developers.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Skanstorget",
    addressLocality: "Gothenburg",
    addressCountry: "SE"
  },
  contactPoint: {
    "@type": "ContactPoint",
    email: "hello@pelag.io",
    contactType: "sales"
  },
  knowsAbout: [
    "Software Development",
    "Web Development",
    "React",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "Cloud Architecture",
    "Mobile App Development",
    "UX Design",
    "Technical Consulting",
    "Agile Development",
    "DevOps"
  ],
  slogan: "Senior developers. Real ownership. Quality delivery.",
  foundingLocation: "Gothenburg, Sweden",
  areaServed: ["Sweden", "Europe", "Worldwide"]
};

const servicesData = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Pelagio Services",
  itemListElement: [
    {
      "@type": "Service",
      name: "Web Application Development",
      description:
        "Custom web applications built with modern frameworks like React, Next.js, and Node.js."
    },
    {
      "@type": "Service",
      name: "Mobile App Development",
      description:
        "Cross-platform and native mobile applications for iOS and Android."
    },
    {
      "@type": "Service",
      name: "Cloud & DevOps",
      description:
        "Cloud architecture, infrastructure setup, CI/CD pipelines, and scalable deployments."
    },
    {
      "@type": "Service",
      name: "Technical Consulting",
      description:
        "Expert technical advisory, architecture reviews, and technology strategy."
    },
    {
      "@type": "Service",
      name: "UX & Product Design",
      description:
        "User experience design, prototyping, and product strategy for digital products."
    }
  ]
};

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

    const metaTitle =
      "Pelagio | Software Development Agency - Gothenburg, Sweden";
    const metaDescription =
      "Pelagio is a senior software development agency in Gothenburg. We build web apps, mobile solutions, and cloud architecture. Experienced developers available for project work and consulting.";
    const metaUrl = "https://pelag.io/";
    const imageUrl = "https://pelag.io/img/logo-no-text.png";
    const favicoUrl = "/img/favicon.png";
    return (
      <Layout location={location} children={children}>
        <IntersectProvider>
          <div>
            <Helmet title={metaTitle}>
              <html lang="en" />
              <title>{metaTitle}</title>
              <meta name="title" content={metaTitle} />
              <meta name="description" content={metaDescription} />
              <link rel="canonical" href={metaUrl} />
              <link
                href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Lato:wght@100;300;400;700;900&display=swap"
                rel="stylesheet"
              />
              <link rel="preconnect" href="https://fonts.googleapis.com" />
              <link
                rel="preconnect"
                href="https://fonts.gstatic.com"
                crossOrigin="anonymous"
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
              <meta property="og:image" content={imageUrl} />
              <meta property="og:image:width" content="400" />
              <meta property="og:image:height" content="400" />
              <meta property="og:site_name" content="Pelagio" />
              <meta property="og:locale" content="en_US" />

              <meta name="twitter:card" content="summary_large_image" />
              <meta name="twitter:url" content={metaUrl} />
              <meta name="twitter:title" content={metaTitle} />
              <meta name="twitter:description" content={metaDescription} />
              <meta name="twitter:image" content={imageUrl} />

              <meta
                name="keywords"
                content="software development agency, web development Gothenburg, React developers, freelance developers Sweden, mobile app development, cloud architecture, technical consulting, senior developers, project-based development"
              />
              <meta name="robots" content="index, follow" />
              <meta name="author" content="Pelagio Development AB" />
              <meta name="geo.region" content="SE-O" />
              <meta name="geo.placename" content="Gothenburg" />

              <script type="application/ld+json">
                {JSON.stringify(structuredData)}
              </script>
              <script type="application/ld+json">
                {JSON.stringify(servicesData)}
              </script>
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
