let contentfulConfig;

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
    process.env.CONTENTFUL_ACCESS_TOKEN
};

const { spaceId, accessToken } = contentfulConfig;

if (!spaceId || !accessToken) {
  throw new Error(
    "Contentful spaceId and the delivery token need to be provided."
  );
}

module.exports = {
  siteMetadata: {
    title: "Pelagio | Software Development Agency",
    description:
      "Pelagio is a senior software development agency in Stockholm. We build web apps, mobile solutions, and cloud architecture.",
    siteUrl: "https://pelag.io"
  },
  pathPrefix: "/gatsby-contentful-starter",
  plugins: [
    "gatsby-transformer-sharp",
    "gatsby-plugin-postcss",
    "gatsby-transformer-remark",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-contentful",
      options: contentfulConfig
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        output: "/sitemap.xml"
      }
    }
  ]
};
