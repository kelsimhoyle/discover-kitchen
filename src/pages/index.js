import * as React from "react";
import { graphql } from "gatsby";
import Landing from "../components/landing";
import AboutComponent from "../components/about";
import CardsComponent from "../components/cards";
import Home from "../styles/home";

const IndexPage = ({ data }) => {
  let { about, menu, services } = data.pagesJson;

  console.log(menu)

  about = about.childDataJson;
  menu = menu.childDataJson;
  services = services.childDataJson;

  return (
      <>
        <Landing />
        <Home>
           <AboutComponent 
             text={about.text}
             image={about.image}
             button={about.button}
           />
          <CardsComponent
            items={services.items}
            title={services.name}
           />
          <CardsComponent
            items={menu.items}
            title={menu.name}
            />
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
        name
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
        name
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
