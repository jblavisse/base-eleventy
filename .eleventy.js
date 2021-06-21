/* Config file */
module.exports = function(eleventyConfig) {
  // Faire en sorte que dès qu'il y a du mouvement dans le dossier scss
  // ça rebuild
  eleventyConfig.addWatchTarget("./src/scss/");

  // Ce dossier est cloné lors du build
  eleventyConfig.addPassthroughCopy("./src/img");
  eleventyConfig.addPassthroughCopy("./src/css");

  return { 
    dir: {
        input: "src",
        output: "dist"
    }
  }
};