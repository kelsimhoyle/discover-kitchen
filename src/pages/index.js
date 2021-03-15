import * as React from "react";
import { graphql } from "gatsby";
import "../styles/mystyles.scss";
import Layout from "../styles/layout";
import CardsComponent from "../components/cards";
import ReviewCarousel from "../components/reviewcarousel";
import FeaturedMenu from "../components/featuredmenu";

const IndexPage = ({ data }) => {
  let { about,  services } = data.pagesJson;
  let menu = data.allAirtable.edges

  about = about.childDataJson;
  services = services.childDataJson;

  return (
      <Layout page="home">
        <div className="container">

          <CardsComponent
            items={services.items}
            title={services.name}
           />

           <ReviewCarousel />

         <FeaturedMenu menu={menu} viewMore={true} />
        </div>
      </Layout>
  )
}

export const HomeQuery = graphql`{
  pagesJson(title: {eq: "Discover Kitchen"}) {
    title
    subtitle
    about {
      childDataJson {
        button {
          href
          text
        }
        text
        image {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
    services {
      childDataJson {
        name
        items {
          alt
          blurb
          title
          image {
            childImageSharp {
              gatsbyImageData( 
                placeholder: BLURRED,
                width: 600,
                height: 700,
                transformOptions: {fit: COVER, cropFocus: CENTER}
                )
            }
          }
        }
      }
    }
  }
  allAirtable(filter: {data: {featured: {eq: true}}}) {
    edges {
      node {
        id
        data {
          image {
            localFiles {
              childImageSharp {
                gatsbyImageData(
                  width: 500,
                  height: 500,
                  placeholder: BLURRED,
                transformOptions: {fit: COVER, cropFocus: CENTER}

                  )
              }
            }
          }
          available
          category
          featured
          item
          description
        }
      }
    }
  }
}
`

export default IndexPage
