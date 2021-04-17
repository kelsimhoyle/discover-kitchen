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
      <div className="container m-2">
        <Title title="About Discover Kitchen" />
        <div className="columns m-2 is-vcentered">
          <div className="column">
            <GatsbyImage image={getImage(data.airtable.data.image.localFiles[0])} alt="About Discover Kitcehn" />
          </div>
          <div className="column">
            <p className="is-size-5 p-6">{data.airtable.data.content}</p>
            <div className="has-text-centered">
              <Link className="button is-link is-focused is-medium m-2" to="/services">Services</Link>
              <Link className="button is-link is-focused is-medium m-2" to="/contact">Contact</Link>
            </div>

          </div>
        </div>
        <ReviewCarousel />
      </div>
    </>
  )
};

export const AboutQuery = graphql`{
  airtable(data: {page: {eq: "About"}}) {
    id
    data {
      name
      content
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
}
`


export default About;
