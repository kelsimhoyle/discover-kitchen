import React from "react";
import { Link, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Seo from "../components/SEO/SEO";
import Title from "../styles/title";
import ReviewCarousel from "../components/reviewcarousel";

const About = ({ data }) => {
  return (
    <>
      <Seo title="Discover Kitchen - About" />
      <div className="container">
        <Title title={data.main.data.name} />
        <div className="columns m-2 is-vcentered is-centered">
          <div className="column">
            <GatsbyImage image={getImage(data.main.data.image.localFiles[0])} alt="About Discover Kitchen" />
          </div>
          <div className="column">
            <div
              dangerouslySetInnerHTML={{
                __html: data.main.data.content.childMarkdownRemark.html,
              }} />
            <GatsbyImage image={getImage(data.signature.data.image.localFiles[0])} alt="Sarah Kerr Signature" />
          </div>

        </div>
        <div className="m-2">
          <div className="has-text-centered m-2">
            <Link className="button is-link is-focused is-medium m-2" to="/services">Services</Link>
            <Link className="button is-link is-focused is-medium m-2" to="/contact">Contact</Link>
          </div>

          <ReviewCarousel />
        </div>
      </div>
    </>
  )
};

export const AboutQuery = graphql`{
  main: airtable(data: {page: {eq: "About"}}) {
    id
    data {
      name
      content {
        childMarkdownRemark {
          html
        }
      }
      image {
        localFiles {
          childImageSharp {
            gatsbyImageData(
              width: 1500
              placeholder: BLURRED
              transformOptions: {fit: COVER, cropFocus: CENTER}
            )
          }
        }
      }
    }
  }
  signature: airtable(
    table: {eq: "Site Data"}
    data: {page: {eq: "About"}, function: {eq: "Signature"}}
  ) {
    data {
      image {
        localFiles {
          childImageSharp {
            gatsbyImageData(width: 200, placeholder: BLURRED)
          }
        }
      }
    }
  }
}
`


export default About;
