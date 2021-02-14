const path = require(`path`);
const IMAGE_PATH = './src/images/';


exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const cardPageTemplate = path.resolve(`src/templates/cardpage.js`)
  // Query for markdown nodes to use in creating pages.
  // You can query for whatever data you want to create pages for e.g.
  // products, portfolio items, landing pages, etc.
  // Variables can be added as the second function parameter
  return graphql(`
  query {
    allPagesJson(filter: {title: {in: ["Services", "Menu"]}}) {
      nodes {
        title
        subtitle
        slug
        data {
          childDataJson {
            items {
              alt
              blurb
              title
              image {
                childImageSharp {
                  fixed(width: 200) {
                    base64
                    width
                    height
                    src
                    srcSet
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  ` ).then(result => {
    if (result.errors) {
      throw result.errors
    }

  

    // Create blog post pages.
    result.data.allPagesJson.nodes.forEach(node => {

      createPage({
        // Path for this page — required
        path: `${node.slug}`,
        component: cardPageTemplate,
        context: {
            "title": node.title,
            "subtitle": node.subtitle,
            "data": node.data.childDataJson.items
        },
      })
    })
  })
}

