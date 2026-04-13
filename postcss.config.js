const postcssImport = require(`postcss-import`);
const postcssPresetEnv = require(`postcss-preset-env`);
const postcssBrowserReporter = require(`postcss-browser-reporter`);
const postcssReporter = require(`postcss-reporter`);

module.exports = () => ({
  plugins: [
    postcssImport(),
    postcssPresetEnv({
      stage: 2,
      features: {
        "custom-properties": true,
        "custom-media-queries": true,
        "nesting-rules": true,
      },
    }),
    postcssBrowserReporter(),
    postcssReporter(),
  ],
});
