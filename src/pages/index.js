import * as React from "react";
import { graphql } from "gatsby";
import "../styles/mystyles.scss";
import Seo from "../components/SEO/SEO";
import CardsComponent from "../components/cards";
import ReviewCarousel from "../components/reviewcarousel";
import FeaturedMenu from "../components/featuredmenu";

const IndexPage = ({ data }) => {

  return (
    <>
      <Seo title="Discover Kitchen" />
      <div className="container">

        <CardsComponent
          title="Services"
          items={data.services.edges}
        />

        <ReviewCarousel />

        <div className="section is-medium is-desktop">
          <FeaturedMenu menu={data.menu.edges} viewMore={true} />
        </div>

      </div>
    </>
  )
}

export const HomeQuery = graphql`{
  services: allAirtable(
    filter: {table: {eq: "Site Data"}, data: {page: {in: "Home"}, function: {in: "Services List"}}}
  ) {
    edges {
      node {
        id
        data {
          name
          page
          content {
            childMarkdownRemark {
              html
            }
          }
          image {
            localFiles {
              childImageSharp {
                gatsbyImageData(
                  width: 600
                  height: 700
                  placeholder: BLURRED
                  transformOptions: {fit: COVER, cropFocus: CENTER}
                )
              }
            }
          }
        }
      }
    }
  }
  menu: allAirtable(filter: {table: {eq: "Menu"}, data: {featured: {eq: true}}}) {
    edges {
      node {
        id
        data {
          name
          page
          content {
            childMarkdownRemark {
              html
            }
          }
          image {
            localFiles {
              childImageSharp {
                gatsbyImageData(
                  width: 600
                  height: 700
                  placeholder: BLURRED
                  transformOptions: {fit: COVER, cropFocus: CENTER}
                )
              }
            }
          }
        }
      }
    }
  }
}
`

export default IndexPage
