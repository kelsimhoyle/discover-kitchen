import React from "react";
import { graphql } from "gatsby";
import { GiCalendar } from "@react-icons/all-files/gi/GiCalendar";
import { GiPhone } from "@react-icons/all-files/gi/GiPhone";
import { GiCookingPot } from "@react-icons/all-files/gi/GiCookingPot";
import Seo from "../components/SEO/SEO";
import Btn from "../components/btn";
import Title from "../styles/title";
import ServicesBox from "../components/servicesbox";

const Services = ({ data }) => {
  const services = data.services.edges;
  const steps = data.steps.edges;

  const icons = {
    "Step 1": <GiPhone className="is-size-1" />,
    "Step 2": <GiCalendar className="is-size-1" />,
    "Step 3": <GiCookingPot className="is-size-1" />
  }

  return (
    <>
      <Seo title="Discover Kitchen - Services" />
      <div className="container">
        <Title title="Services" />
        <div className="columns m-2">
          {services.map(service => (
            <ServicesBox
              title={service.node.data.name}
              image={service.node.data.image.localFiles[0]}
              alt={service.node.data.name}
              blurb={service.node.data.content}
              key={service.node.id}
            />
          ))}
        </div>
        <div className="section is-medium has-text-centered	mx-6">
          <h4 className="title">Let's get cooking!</h4>
          <div className="columns">
            {steps.map(step => (
              <div className="column box has-text-centered m-3">
                {icons[step.node.data.name]}
                <p className="m-2 is-size-5">{step.node.data.content}</p>
              </div>
            ))}

          </div>

          <div className="has-text-centered">
            <Btn
              to="/contact"
            >
              Contact
                </Btn>
          </div>
        </div>


      </div>

    </>
  )
}

export const ServicesQuery = graphql`{
  services: allAirtable(
    filter: {table: {eq: "Site Data"}, data: {page: {in: "Services"}, function: {in: "Services List"}}}
  ) {
    edges {
      node {
        id
        data {
          name
          content
          image {
            localFiles {
              childImageSharp {
                gatsbyImageData(
                  width: 600
                  height: 700
                  placeholder: BLURRED
                  transformOptions: {fit: COVER, cropFocus: CENTER}
                )
              }
            }
          }
        }
      }
    }
  }
  steps: allAirtable(
    filter: {table: {eq: "Site Data"}, data: {page: {in: "Services"}, function: {in: "Steps"}}}
  ) {
    edges {
      node {
        id
        data {
          name
          content
        }
      }
    }
  }
}`


export default Services;