import React from "react";
import styled from "styled-components";

const Section = styled.section`
    .services {
        padding: 2rem 5rem;
       
        background: linear-gradient(
    to bottom, 
    ${props => props.theme.colors.blue} 0%, 
    ${props => props.theme.colors.blue} 50%, 
    ${props => props.theme.colors.darkBlue} 50%, 
    ${props => props.theme.colors.darkBlue} 100%
  );
    }

  .about {
      background-color: ${props => props.theme.colors.blue}
  }
`;
const Home = ({ children }) => {
  return <Section>{children}</Section>
};

export default Home;