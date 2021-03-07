import React from "react";
import { graphql } from "gatsby";
import AboutComponent from "../components/about";
import AboutPage from "../styles/aboutpage";

const About = ({ data }) => {
    const { subtitle, data: info } = data.pagesJson;
    const {text, button, image } = info.childDataJson;

    return (
        <AboutPage>
        <AboutComponent 
            title={subtitle}
            text={text}
            button={button}
            image={image}
         />
        </AboutPage>
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
