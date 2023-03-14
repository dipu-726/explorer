const path = require("path");

module.exports = {
  webpack: {
    alias: {
      '@components': path.resolve(__dirname, 'src', 'components'),
      '@reducer': path.resolve(__dirname, 'src', 'reducer'),
      '@utils': path.resolve(__dirname, 'src', 'utils'),
    }
  }
};
