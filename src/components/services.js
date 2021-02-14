import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Card from "./card";
import Title from "./title";
import MainBtn from "../styles/mainbtn";
import CardContainer from "../styles/cardcontainer"

const ServicesComponent = () => {
    return (
        <StaticQuery
        query={graphql`
    query ServicesImgQuery {
        file(relativePath: { eq: "nicoisesalad.JPG" }) {
        childImageSharp {
    fixed(width: 200, height: 200) {
        ...GatsbyImageSharpFixed
      }
  }
}
    }
  `}
        render={data => (
        <div className="services">
        <Title title="Services" subtitle="How can we help you?" />
        <CardContainer>
            <Card title="Small Event Catering" fixed={data.file.childImageSharp.fixed} alt="small event catering" />
            <Card title="Personal Chef" image={data.file.childImageSharp.fixed} alt="Personal Chef" />
            <Card title="Classes" image={data.file.childImageSharp.fixed} alt="Classes" />
        </CardContainer>

        <MainBtn>Schedule Consultation</MainBtn>
        </div>
         )}
        />
    )
};

export default ServicesComponent;