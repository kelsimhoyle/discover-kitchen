import React from "react";
import { graphql } from "gatsby";
import AboutComponent from "../components/about";

const About = ({ data }) => {
    const { subtitle, data: info } = data.pagesJson;
    const {text, button, image } = info.childDataJson;

    return (
        <>
        <AboutComponent 
            title={subtitle}
            text={text}
            button={button}
            image={image}
         />
        </>
    )
};

export const AboutQuery = graphql`query {
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
              fixed(height: 400, width: 300) {
                base64
                width
                height
                src
                srcSet
              }
            }
          }
        }
      }
    }
  }
  `
  

export default About;
