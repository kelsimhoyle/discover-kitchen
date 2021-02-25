import React from "react";
import styled from "styled-components";

const Section = styled.section`
  .container {
    background-color: rgba(255,255,255,0.2);
    border-radius: .25rem;
    padding: 1rem 1.25rem 2rem;
    display: flex;
    flex-direction: column;
  }

  .btn {
    align-self: center;
    margin: 1rem 0;
  }

  .card-comp {
    padding: 5%;
  }

  .card-comp:nth-child(2) {
      background: linear-gradient(
        to bottom, 
        ${props => props.theme.colors.blue} 0%, 
        ${props => props.theme.colors.blue} 60%, 
        ${props => props.theme.colors.darkBlue} 40%, 
        ${props => props.theme.colors.darkBlue} 100%
        );
        }

  .card-comp:nth-child(3) {
      background: linear-gradient(
      to bottom, 
      ${props => props.theme.colors.darkBlue} 0%, 
      ${props => props.theme.colors.darkBlue} 60%, 
      ${props => props.theme.colors.blue} 40%, 
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