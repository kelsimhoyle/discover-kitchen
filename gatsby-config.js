const path = require(`path`);

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `Discover Kitchen`,
    description: `Personal chef and small event catering in Denver, Colorado`,
    keywords: ["Denver", "Colorado", "personal chef", "event catering", "meal prep", "dinner party", "date night", "dinner", "cook", "paleo", "step by step", "meal prep picture", "vegetarian", "keto meal prep", "dairy free meal prep", "high protein meal prep", "denver meal prep", "denver personal chef" ],
    image: "/images/DiscoverKitchen.png",
    siteUrl: `https://discoverkitchen.gatsbyjs.io/`,
    favicon: "/images/favicon.png"
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          process.env.GA_TRACKING_ID, // Google Analytics / GA
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        // gtagConfig: {
        //   optimize_id: "OPT_CONTAINER_ID",
        //   anonymize_ip: true,
        //   cookie_expires: 0,
        // },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          // exclude: ["/preview/**", "/do-not-track/me/too/"],
        },
      },
    },
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
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: process.env.AIRTABLE_API_KEY,
        concurrency: 5,
        tables: [
          {
            baseId: process.env.AIRTABLE_BASE_ID,
            tableName: "Menu",
            mapping: { "image": "fileNode" }
          },
          {
            baseId: process.env.AIRTABLE_BASE_ID,
            tableName: "Reviews"
          },
          {
            baseId: process.env.AIRTABLE_BASE_ID,
            tableName: "Site Data",
            mapping: { "image": "fileNode", "content": "text/markdown" }
          },
        ]
      }
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: `https://discoverkitchen.gatsbyjs.io`,
        sitemap: `https://discoverkitchen.gatsbyjs.io/sitemap.xml`,
        policy: [
        {
          userAgent: "*",
          allow: "/",
          disallow: "/update"
        }]
      }
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/styles/layout`),
      },
    },
    
  ]
}