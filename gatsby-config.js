/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Directorio App by AChavez`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-image", "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  }, "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }, "gatsby-plugin-netlify", {
    resolve: "gatsby-plugin-netlify",
    options: {
      mergeSecurityHeaders: false, // boolean to turn off the default security headers
      mergeCachingHeaders: false, // boolean to turn off the default caching headers
      generateMatchPathRewrites: false, // boolean to turn off automatic creation of redirect rules for client only paths
    },
  }],
  proxy: {
    prefix: "/api",
    url: "http://localhost:3000", // URL de la API RESTful
  },
};