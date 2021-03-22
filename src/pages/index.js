import * as React from "react";
import { graphql } from "gatsby";
import "../styles/mystyles.scss";
import SEO from "../components/SEO/SEO";
import CardsComponent from "../components/cards";
import ReviewCarousel from "../components/reviewcarousel";
import FeaturedMenu from "../components/featuredmenu";

const IndexPage = ({ data }) => {
  let { services } = data.pagesJson;
  let menu = data.allAirtable.edges

  services = services.childDataJson;

  return (
    <>
      <SEO title="Discover Kitchen" />
      <div className="container">

        <CardsComponent
          items={services.items}
          title={services.name}
        />

        <ReviewCarousel />

        <div className="section is-medium is-desktop">
          <FeaturedMenu menu={menu} viewMore={true} />
        </div>

      </div>
    </>
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
