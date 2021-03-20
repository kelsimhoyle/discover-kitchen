const path = require(`path`);

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `Discover Kitchen`,
    description: `Personal chef and small event catering in Denver, Colorado`,
    keywords: ["Denver", "Colorado", "personal chef", "event catering", "meal prep", "dinner party", "date night", "dinner", "cook"],
    image: "/images/DiscoverKitchen.png",
    siteUrl: `https://discoverkitchen.gatsbyjs.io/`,
    favicon: "/images/favicon.png"
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data`,
      },
    },
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: process.env.AIRTABLE_API_KEY,
        concurrency: 5,
        tables: [
          {
            baseId: process.env.AIRTABLE_BASE_ID,
            tableName: process.env.AIRTABLE_TABLE_NAME,
            mapping: { "image": "fileNode" }
          }
        ]
      }
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: `https://discoverkitchen.gatsbyjs.io/`,
        sitemap: `https://discoverkitchen.gatsbyjs.io/sitemap.xml`,
        resolveEnv: () => process.env.GATSBY_ENV,
        env: {
          development: {
            policy: [{ userAgent: '*', disallow: ['/'] }]
          },
          production: {
            policy: [{ userAgent: '*', allow: '/' }]
          }
        }
      }
    }
  ]
}