const Promise = require("bluebird");
const path = require("path");

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
};

/**
 * gsap and lenis reference `window`/`document` at module evaluation time,
 * which crashes Gatsby's SSR HTML generation. We alias them to a stub module
 * (instead of null-loader) so that ESM default imports resolve correctly.
 * The real modules are bundled normally for the client.
 */
exports.onCreateWebpackConfig = ({ stage, actions }) => {
  if (stage === "build-html" || stage === "develop-html") {
    const stub = path.resolve(__dirname, "src/stubs/empty-module.js");
    actions.setWebpackConfig({
      resolve: {
        alias: {
          lenis$: stub,
          gsap$: stub,
          "gsap/ScrollTrigger$": stub,
        },
      },
    });
  }
};
