import * as React from "react";
import { graphql } from "gatsby";
import "../styles/mystyles.scss";
import Landing from "../components/landing";
import CardsComponent from "../components/cards";
import ReviewCarousel from "../components/reviewcarousel";
import FeaturedMenu from "../components/featuredmenu";

const IndexPage = ({ data }) => {
  let { about,  services } = data.pagesJson;
  let menu = data.allAirtable.edges

  about = about.childDataJson;
  services = services.childDataJson;

  return (
      <>
        <Landing />
        <div className="container">

          <CardsComponent
            items={services.items}
            title={services.name}
           />

           <ReviewCarousel />

         <FeaturedMenu menu={menu} />
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
                width: 700,
                height: 500,
                placeholder: BLURRED)
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
                  placeholder: BLURRED
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
