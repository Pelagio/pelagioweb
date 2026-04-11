let contentfulConfig = {};

try {
  // Load the Contentful config from the .contentful.json
  contentfulConfig = require("./.contentful");
} catch (_) {}

// Use .contentful.json values, falling back to environment variables
contentfulConfig = {
  spaceId: contentfulConfig.spaceId || process.env.CONTENTFUL_SPACE_ID,
  accessToken:
    contentfulConfig.accessToken ||
    process.env.CONTENTFUL_DELIVERY_TOKEN ||
    process.env.CONTENTFUL_ACCESS_TOKEN,
};

const { spaceId, accessToken } = contentfulConfig;

if (!spaceId || !accessToken) {
  throw new Error(
    "Contentful spaceId and the delivery token need to be provided.",
  );
}

module.exports = {
  siteMetadata: {
    title: "Pelagio | Senior Software Development Partner",
    description:
      "Senior developers in Gothenburg who become part of your team. Web, mobile, cloud — we join, we build, we stay.",
    siteUrl: "https://pelag.io",
  },
  pathPrefix: "/",
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-postcss",
    "gatsby-transformer-remark",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-contentful",
      options: contentfulConfig,
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        output: "/sitemap.xml",
        excludes: ["/dev-404-page", "/404", "/404.html"],
      },
    },
  ],
};
