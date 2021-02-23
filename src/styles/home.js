import React from "react";
import styled from "styled-components";

const Section = styled.section`
    .card-comp {
      padding: 5%;
    }

    .card-comp:nth-child(2) {
        background: linear-gradient(
    to bottom, 
    ${props => props.theme.colors.blue} 0%, 
    ${props => props.theme.colors.blue} 75%, 
    ${props => props.theme.colors.darkBlue} 25%, 
    ${props => props.theme.colors.darkBlue} 100%
    );
    }

    .card-comp:nth-child(3) {
        background: linear-gradient(
    to bottom, 
    ${props => props.theme.colors.darkBlue} 0%, 
    ${props => props.theme.colors.darkBlue} 75%, 
    ${props => props.theme.colors.blue} 25%, 
    ${props => props.theme.colors.blue} 100%
    );
    }

  .about {
      background-color: ${props => props.theme.colors.blue};
  }

  @media ${props => props.theme.device.laptop} {
    .card-comp {
      padding: 50px;
    }
  }


`;
const Home = ({ children }) => {
  return <Section>{children}</Section>
};

export default Home;