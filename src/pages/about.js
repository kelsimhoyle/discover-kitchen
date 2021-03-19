import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import SEO from "../components/SEO/SEO";
import Layout from "../styles/layout";
import AboutComponent from "../components/about";
import Title from "../styles/title";

const About = ({ data }) => {
  const { subtitle, data: info } = data.pagesJson;
  const { text, button, image } = info.childDataJson;

  return (
    <Layout>
      <SEO title="Discover Kitchen - About" />
      <div className="container m-2">
        <Title title={subtitle} />
        <div className="columns m-2">
          <div className="column">
            <GatsbyImage image={getImage(image)} alt={subtitle} />
          </div>
          <div className="column">
            <p>{text}</p>
          </div>
        </div>
      </div>
    </Layout>
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
