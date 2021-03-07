const path = require(`path`);

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
    siteMetadata: {
        title: `Discover Kitchen`,
        description: `Small event catering in Denver, Colorado`,
        image: "/images/DiscoverKitchen.png"
      },
    plugins: [
       `gatsby-plugin-styled-components`,
       `gatsby-plugin-sass`,
       {
        resolve: `gatsby-plugin-layout`,
        options: {
          component: require.resolve(`./src/styles/layout`),
        },
      },
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
    }
    ]
}