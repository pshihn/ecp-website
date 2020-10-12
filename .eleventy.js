const syntaxHighlightPlugin = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function (eleventyConfig) {
  // syntax highlighting plugin
  eleventyConfig.addPlugin(syntaxHighlightPlugin, {
    templateFormats: 'md'
  });

  eleventyConfig.addPassthroughCopy('images');
  eleventyConfig.addPassthroughCopy('css');
};