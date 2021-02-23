const path = require(`path`)

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
      
    ]
}