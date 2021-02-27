import * as React from "react";
import { graphql } from "gatsby";
import "../styles/mystyles.scss";
import Landing from "../components/landing";
import AboutComponent from "../components/about";
import CardsComponent from "../components/cards";
import ReviewCarousel from "../components/reviewcarousel";

const IndexPage = ({ data }) => {
  let { about, menu, services } = data.pagesJson;

  console.log(menu)

  about = about.childDataJson;
  menu = menu.childDataJson;
  services = services.childDataJson;

  return (
      <>
        <Landing />
        <div className="container">
           {/* <AboutComponent 
             text={about.text}
             image={about.image}
             button={about.button}
           /> */}

          <CardsComponent
            items={services.items}
            title={services.name}
           />

           <ReviewCarousel />

          <CardsComponent
            items={menu.items}
            title={menu.name}
            />
        </div>
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
            fluid {
              ...GatsbyImageSharpFluid
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
              fluid {
                ...GatsbyImageSharpFluid
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
              fluid {
                ...GatsbyImageSharpFluid
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
