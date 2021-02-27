const path = require(`path`);

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  const cardPageTemplate = path.resolve(`src/templates/cardpage.js`);

  return graphql(`
  query {
    allPagesJson(filter: {title: {in: ["Services", "Menu"]}}) {
      nodes {
        title
        subtitle
        slug
        content
        data {
          childDataJson {
            items {
              alt
              blurb
              title
              image {
                childImageSharp {
                  fluid {
                    base64
                    aspectRatio
                    src
                    srcSet
                    sizes
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
            "content": node.content,
            "data": node.data.childDataJson.items
        },
      })
    })
  });
}

