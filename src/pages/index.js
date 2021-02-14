import * as React from "react";
import { graphql } from "gatsby";
import Landing from "../components/landing";
import AboutComponent from "../components/about";
import ServicesComponent from "../components/services";
import Home from "../styles/home";

const IndexPage = ({ data }) => {
  console.log(data)
  return (
      <>
        <Landing />
        <Home>
          {/* <AboutComponent />
          <ServicesComponent /> */}
        </Home>
      </>
  )
}

export const HomeQuery = graphql`query {
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
    services {
      childDataJson {
        items {
          alt
          blurb
          title
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
    menu {
      childDataJson {
        items {
          alt
          blurb
          title
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
}
`

export default IndexPage
