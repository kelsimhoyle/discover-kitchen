import React from "react";
import { graphql } from "gatsby";
import { GiCalendar } from "@react-icons/all-files/gi/GiCalendar";
import { GiPhone } from "@react-icons/all-files/gi/GiPhone";
import { GiCookingPot } from "@react-icons/all-files/gi/GiCookingPot";
import Btn from "../components/btn";
import Layout from "../styles/layout";
import Title from "../styles/title";
import ServicesBox from "../components/servicesbox";

const Services = ({ data }) => {
  const pageData = data.pagesJson;
  const services = pageData.data.childDataJson.items;

  return (
    <Layout>
      <div className="container">
        <Title title="Discover Kitchen - Services" />
        <div className="columns m-2">
          {services.map(service => (
            <ServicesBox
              title={service.title}
              image={service.image}
              alt={service.alt}
              blurb={service.blurb}
            />
          ))}
        </div>
        <div className="section is-medium has-text-centered	mx-6">
          <h4 className="title">Let's get cooking!</h4>
          <div className="columns">
            <div className="column box has-text-centered m-3">
              <GiPhone className="is-size-1" />
              <p className="m-2 is-size-5">First, we will do a discovery call to learn about your needs and how we can help you.</p>
            </div>
            <div className="column box has-text-centered m-3">
              <GiCalendar className="is-size-1" />
              <p className="m-2 is-size-5">We will schedule a time for services. Then we will send over a menu and contract for approval.</p>
            </div>
            <div className="column box has-text-centered m-3">
              <GiCookingPot className="is-size-1" />
              <p className="m-2 is-size-5">We do the ingredient shopping and come to your kitchen to complete the cooking!</p>
            </div>
          </div>

          <div className="has-text-centered">
            <Btn
              to="/contact"
            >
              Contact Us
                </Btn>
          </div>
        </div>


      </div>

    </Layout>
  )
}

export const ServicesQuery = graphql`{

        pagesJson(title: {eq: "Services"}) {
          subtitle
          title
          data {
            childDataJson {
              id
              items {
                alt
                blurb
                title
                image {
                  childImageSharp {
                    gatsbyImageData( 
                      placeholder: BLURRED,
                      width: 600,
                      height: 700,
                      transformOptions: {fit: COVER, cropFocus: CENTER}
                      )
                  }
                }
              }
            }
          }
        }

}`


export default Services;