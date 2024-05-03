/****************
 * Filters {{{1 *
 ****************/
// First create variables that require() any packages we need
// const plugin = require('some-eleventy-plugin-package');
const { DateTime } = require('luxon');
const w3DateFilter = require('./src/filters/w3-date-filter.js');
const yaml = require('js-yaml');
const nodePandoc = require('node-pandoc');
const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");
const fs = require("fs");
/********************************
 * eleventyConfig function {{{1 *
 ********************************/
// Use module.exports to export a configuration funcion.
// This is a standard function in Node.js projects
module.exports = function(eleventyConfig) {
  // Run any code needed including built-in 11ty methods
 /*************************
  * Passthrough copy {{{2 *
  *************************/
  // Copy assets/ to _site/assets
  eleventyConfig.addPassthroughCopy(".gitattributes");
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy({"node_modules/bootstrap-icons/icons": "assets/icons"});
  eleventyConfig.addPassthroughCopy({"node_modules/bootstrap-icons/bootstrap-icons.svg": "assets/bootstrap-icons.svg"});
  // emulate passthrough during --serve:
  eleventyConfig.setServerPassthroughCopyBehavior("passthrough");
 /*****************
  * Markdown {{{2 *
  *****************/
  async function convertMarkdownToHtml(markdown, args) {
    return new Promise((resolve, reject) => {
      nodePandoc(markdown, '-d _data/defaults.yml', (err, result) => {
        if (err) {
          console.error(`Pandoc error: ${err.message}`);
          resolve(result);
        } else {
          resolve(result);
        }
      });
    });
  }
  eleventyConfig.setLibrary("md", {
    render: async function(content) {
      return await convertMarkdownToHtml(content);
    }
  });
 /*************************
  * Activate plugins {{{2 *
  *************************/
  // Call filters defined outside this function
  eleventyConfig.addFilter("dateFilter", (dateObj) => {
    return DateTime.fromJSDate(dateObj).setZone("utc").setLocale('pt').toLocaleString(DateTime.DATE_SHORT);
  });
  eleventyConfig.addFilter('w3DateFilter', w3DateFilter);
  eleventyConfig.addDataExtension('yml, yaml', contents => yaml.load(contents));
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
 /***********************
  * Layout aliases {{{2 *
  ***********************/
  eleventyConfig.addLayoutAlias("base",        "layouts/base.njk");
  eleventyConfig.addLayoutAlias("home",        "layouts/home.njk");
  eleventyConfig.addLayoutAlias("single",      "layouts/base.njk");
  eleventyConfig.addLayoutAlias("publication", "layouts/posts.njk");
  eleventyConfig.addLayoutAlias("splash",      "layouts/splash.njk");
  eleventyConfig.addLayoutAlias("archive",     "layouts/archive.njk");
  eleventyConfig.addLayoutAlias("categories",  "layouts/categories.njk");
 /****************************
  * Dynamic collections {{{2 *
  ****************************/
  eleventyConfig.addCollection("produtos", function(collection) {
    // Read the YAML file
    const fileContent = fs.readFileSync("src/_data/produtos.yaml", "utf8");
    // Parse YAML into JavaScript object
    const data = yaml.load(fileContent);
    // Extract the 'references' array from the data
    const produtos = data.references || [];
    // Convert the 'issued' field into a JavaScript Date object
    produtos.forEach(produto => {
      if (typeof produto.issued[0].month == 'undefined') {
        produto.yearOnly = true;
        produto.issued[0].month = 01;
      }
      if (typeof produto.issued[0].day == 'undefined') {
        produto.issued[0].day = 01;
      }
      const issuedDate = new Date(produto.issued[0].year, produto.issued[0].month - 1, produto.issued[0].day || 1);
      produto.issuedDate = issuedDate;
    });
    // Return publications sorted by the new 'issuedDate' field
    return produtos.sort((a, b) => b.issuedDate - a.issuedDate);
  });
 /*******************************************************
  * Return is the last instruction to be evaluated {{{2 *
  *******************************************************/
  // If needed, return an object configuration
  return {
    htmlTemplateEngine: "njk",
    //markdownTemplateEngine: "njk",
    dir: {
      templateFormats: ["html", "liquid", "njk"],
      input: 'src',
      output: '_site',
      includes: '_includes'
    }
  }
};
// vim: shiftwidth=2 tabstop=2 expandtab foldmethod=indent
