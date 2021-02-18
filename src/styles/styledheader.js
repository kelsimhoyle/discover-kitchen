import React from "react";
import styled from "styled-components";

const Header = styled.div`
    background-color: ${props => props.theme.colors.red};
    padding: 2rem;
  
  h2 {
      text-transform: uppercase;
      color: #FFFF;
  }

  a {
    color: #FFFF;
    text-decoration: none;
  }

  @media ${props => props.theme.device.laptop} {
    width: 100vw;

  }
`;

const NavLinks = styled.div`
  a {
    color: #FFFF;
    margin: .5rem 1rem;
    padding-bottom: .5rem;
    border-bottom: 2px solid #FFFF;
    font-size: ${props => props.theme.fontSizes.small};
    text-decoration: none;
    text-transform: uppercase;
  }

  @media ${props => props.theme.device.laptop} {
    width: 100vw;

  }
`;



const StyledHeader = ({children}) => (
  <Header>
    <NavLinks>
      {children}
      </NavLinks>
  </Header>
  );

export default StyledHeader;