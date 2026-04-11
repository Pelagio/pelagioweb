import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";

import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from "body-scroll-lock";

import Layout from "../components/layout";
import PageSection from "../components/page-section";
import TitleSection from "../components/title-section";
import LogoSection from "../components/logo-section";
import ContactSection from "../components/contact-section";
import ServicesSection from "../components/services-section";
import ClientsSection from "../components/clients-section";
import { Footer } from "../components/footer";
import { Waves } from "../components/waves";
import Burger from "../components/burger";
import Navigation from "../components/navigation";
import { SmoothScroll } from "@pelagio/motion";
import { IntersectProvider } from "../contexts/intersect-context";

const structuredData = {
  "@context": "https://schema.org",
  "@type": ["ProfessionalService", "Organization"],
  "@id": "https://pelag.io/#organization",
  name: "Pelagio",
  legalName: "Pelagio Development AB",
  url: "https://pelag.io",
  logo: "https://pelag.io/img/logo-no-text.png",
  image: "https://pelag.io/img/logo-no-text.png",
  description:
    "Pelagio is a collective of senior developers in Gothenburg. We join your team, build together, and stay for the long run — web, mobile, cloud, and everything in between.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Skanstorget 5",
    addressLocality: "Gothenburg",
    addressRegion: "Vastra Gotaland",
    postalCode: "411 22",
    addressCountry: "SE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 57.6987,
    longitude: 11.9688,
  },
  contactPoint: {
    "@type": "ContactPoint",
    email: "hello@pelag.io",
    contactType: "sales",
    availableLanguage: ["English", "Swedish"],
  },
  priceRange: "$$$$",
  knowsAbout: [
    "Software Development",
    "Web Development",
    "React",
    "React Native",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "NestJS",
    "Express",
    "C#",
    ".NET",
    "Cloud Architecture",
    "AWS",
    "Azure",
    "Kubernetes",
    "Docker",
    "Mobile App Development",
    "iOS Development",
    "Android Development",
    "UX Design",
    "Technical Consulting",
    "Agile Development",
    "DevOps",
    "CI/CD",
    "Three.js",
    "WebGL",
    "GSAP",
    "Framer Motion",
    "Rive",
    "Motion Design",
    "Animation Engineering",
    "Gatsby",
    "Vite",
    "PostgreSQL",
    "GraphQL",
  ],
  slogan: "Senior developers. Real ownership. Quality delivery.",
  foundingLocation: "Gothenburg, Sweden",
  areaServed: ["Sweden", "Europe", "Worldwide"],
  client: [
    {
      "@type": "Organization",
      name: "Volvo Cars",
      url: "https://www.volvocars.com",
    },
    { "@type": "Organization", name: "Telia", url: "https://www.telia.se" },
    {
      "@type": "Organization",
      name: "Stena Line",
      url: "https://www.stenaline.se",
    },
    { "@type": "Organization", name: "Swegon", url: "https://www.swegon.com" },
    {
      "@type": "Organization",
      name: "Generasjonsfondet",
      url: "https://www.generasjonsfondet.no",
    },
    { "@type": "Organization", name: "DEFA", url: "https://www.defa.com" },
    { "@type": "Organization", name: "Cloud Charge" },
    { "@type": "Organization", name: "Ourcal", url: "https://ourcal.com" },
    {
      "@type": "Organization",
      name: "Wiberger",
      url: "https://www.wiberger.se",
    },
  ],
};

const servicesData = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Pelagio Services",
  itemListElement: [
    {
      "@type": "Service",
      name: "Web Application Development",
      provider: { "@id": "https://pelag.io/#organization" },
      description:
        "Full-stack web applications from frontend to backend. React and Next.js are our go-to, but we work across the entire stack.",
    },
    {
      "@type": "Service",
      name: "Mobile App Development",
      provider: { "@id": "https://pelag.io/#organization" },
      description:
        "Cross-platform and native mobile applications for iOS and Android.",
    },
    {
      "@type": "Service",
      name: "Cloud & DevOps",
      provider: { "@id": "https://pelag.io/#organization" },
      description:
        "Cloud architecture, infrastructure setup, CI/CD pipelines, and scalable deployments.",
    },
    {
      "@type": "Service",
      name: "Technical Consulting",
      provider: { "@id": "https://pelag.io/#organization" },
      description:
        "Expert technical advisory, architecture reviews, and technology strategy.",
    },
    {
      "@type": "Service",
      name: "UX & Product Design",
      provider: { "@id": "https://pelag.io/#organization" },
      description:
        "User experience design, prototyping, and product strategy for digital products.",
    },
  ],
};

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What does Pelagio do?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We're a collective of senior developers in Gothenburg, Sweden. We join your product team and work alongside you on web apps, mobile, and cloud. Think of us as the experienced teammates you wish you could hire — React, React Native, Next.js, Node.js, C#/.NET, and more.",
      },
    },
    {
      "@type": "Question",
      name: "Where is Pelagio located?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We're based in Gothenburg, Sweden, but work with teams across Sweden, Europe, and worldwide. On-site, remote, or a mix — whatever works best for the project.",
      },
    },
    {
      "@type": "Question",
      name: "Which companies has Pelagio worked with?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We've been part of teams at Volvo Cars (car configurator), Telia (device shop), Stena Line (iOS travel app), Swegon (product selector), Generasjonsfondet (brand experience), DEFA (EV charging app), Cloud Charge (charging portal), Ourcal (calendar app), and Wiberger (e-commerce). Some of these are ongoing — we don't just deliver and disappear.",
      },
    },
    {
      "@type": "Question",
      name: "What technologies does Pelagio use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our go-to stack is React, React Native, Next.js, and Node.js (NestJS, Express). We also work with C#/.NET, Three.js, and tools like GSAP and Framer Motion for motion-heavy projects. On the infrastructure side: AWS, Azure, Kubernetes, and whatever CI/CD setup makes sense for your team.",
      },
    },
    {
      "@type": "Question",
      name: "How does Pelagio's engagement model work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We join your team directly — not as outside contractors, but as teammates who care about the outcome. We're there from architecture through launch and beyond. Weekly demos, shared codebase, real accountability. We don't hand things off and move on.",
      },
    },
    {
      "@type": "Question",
      name: "Does Pelagio build mobile apps?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. React Native is one of our strengths. We've built the Stena Line My Trips iOS app, the DEFA Power App for EV charging, and the Ourcal calendar app. Happy to chat about what you're building.",
      },
    },
  ],
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
      "Pelagio | Senior Software Development Partner - Gothenburg, Sweden";
    const metaDescription =
      "Senior developers in Gothenburg who become part of your team. We work with companies like Volvo Cars, Telia, and Stena Line on web, mobile, and cloud — and we stick around.";
    const metaUrl = "https://pelag.io/";
    const imageUrl = "https://pelag.io/img/logo-no-text.png";
    const favicoUrl = "/img/favicon.png";
    return (
      <Layout location={location} children={children}>
        <SmoothScroll>
          <IntersectProvider>
            <div>
              <Helmet title={metaTitle}>
                <html lang="en" />
                <title>{metaTitle}</title>
                <meta
                  name="viewport"
                  content="width=device-width, initial-scale=1"
                />
                <meta name="title" content={metaTitle} />
                <meta name="description" content={metaDescription} />
                <link rel="canonical" href={metaUrl} />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                  rel="preconnect"
                  href="https://fonts.gstatic.com"
                  crossOrigin="anonymous"
                />
                <link
                  href="https://fonts.googleapis.com/css?family=Lato:100,300,400,700,900|Montserrat:300,400,700,900&display=swap"
                  rel="stylesheet"
                />
                <link rel="icon" href={favicoUrl} type="image/png" />
                <link rel="alternate" hreflang="en" href="https://pelag.io/" />
                <link
                  rel="alternate"
                  hreflang="x-default"
                  href="https://pelag.io/"
                />

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
                  content="software development partner, technical partner Gothenburg, React developers Sweden, mobile app development, cloud architecture, senior developers, embedded development team, long-term technical partner, web development Sweden"
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
                <script type="application/ld+json">
                  {JSON.stringify(faqData)}
                </script>
              </Helmet>
              <main>
                <div className="wrapper" ref={this.scrollRef}>
                  <Navigation
                    open={this.state.open}
                    closeMenu={() => {
                      this.setMenuState(false);
                    }}
                  />
                  <Burger open={this.state.open} setOpen={this.setMenuState} />

                  <ul className="section-list">
                    <li className="wave-wrapper">
                      <LogoSection />
                      <Waves />
                    </li>
                    {sections.map(({ node }) => {
                      let component = null;
                      switch (node.sectionType) {
                        case "title":
                          component = <TitleSection section={node} />;
                          break;
                        case "people":
                          component = (
                            <>
                              <ServicesSection />
                              <ClientsSection />
                              <PageSection section={node} people={people} />
                            </>
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
              </main>
            </div>
          </IntersectProvider>
        </SmoothScroll>
      </Layout>
    );
  }
}

export default RootIndex;

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulPageSection(sort: { sectionIndex: ASC }) {
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
            gatsbyImageData(
              width: 1500
              quality: 90
              layout: CONSTRAINED
              placeholder: BLURRED
            )
          }
          anchor
        }
      }
    }
    allContentfulPerson(sort: { name: ASC }) {
      edges {
        node {
          id
          name
          title
          email
          phone
          image {
            mobile: gatsbyImageData(
              aspectRatio: 0.815
              layout: FULL_WIDTH
              placeholder: BLURRED
              quality: 85
            )
            desktop: gatsbyImageData(
              aspectRatio: 1
              layout: FULL_WIDTH
              placeholder: BLURRED
              quality: 85
            )
          }
          distanceImage {
            gatsbyImageData(
              aspectRatio: 2
              layout: FULL_WIDTH
              placeholder: BLURRED
              quality: 85
            )
          }
        }
      }
    }
  }
`;
