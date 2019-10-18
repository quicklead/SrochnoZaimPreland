const postcssPresetEnv = require('postcss-preset-env');
const postcssApply = require('postcss-apply');
const postcssImport = require('postcss-import');

module.exports = {
  plugins: [
    postcssImport(),
    postcssPresetEnv({
      autoprefixer: {
        grid: true
      }
    }),
    postcssApply()
  ]
};
