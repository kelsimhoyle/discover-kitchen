import React from "react";
import { graphql } from "gatsby";
import Layout from "../styles/layout";
import AboutComponent from "../components/about";
import AboutPage from "../styles/aboutpage";

const About = ({ data }) => {
    const { subtitle, data: info } = data.pagesJson;
    const {text, button, image } = info.childDataJson;

    return (
      <Layout>
        <AboutPage>
        <AboutComponent 
            title={subtitle}
            text={text}
            button={button}
            image={image}
         />
        </AboutPage>
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
