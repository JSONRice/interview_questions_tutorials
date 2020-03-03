// next.config.js
const withSourceMaps = require("@zeit/next-source-maps")();
module.exports = withSourceMaps({
  webpack(config, options) {
    options.node = {
      fs: "empty",
      module: "empty"
    };
    return config;
  }
});
