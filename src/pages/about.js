import React from "react";
import { Link, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import SEO from "../components/SEO/SEO";
import Title from "../styles/title";

const About = ({ data }) => {
  const { subtitle, data: info } = data.pagesJson;
  const { text, image } = info.childDataJson;

  return (
    <>
      <SEO title="Discover Kitchen - About" />
      <div className="container m-2">
        <Title title={subtitle} />
        <div className="columns m-2 is-vcentered">
          <div className="column">
            <GatsbyImage image={getImage(image)} alt={subtitle} />
          </div>
          <div className="column">
            <p className="is-size-5 p-6">{text}</p>
            <div className="has-text-centered">
              <Link className="button is-link is-focused is-medium m-2" to="/services">Services</Link>
              <Link className="button is-link is-focused is-medium m-2" to="/contact">Contact</Link>
            </div>

          </div>
        </div>
      </div>
    </>
  )
};

export const AboutQuery = graphql`{
  pagesJson(title: {eq: "About"}) {
    title
    subtitle
    slug
    data {
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
  }
}
`


export default About;
