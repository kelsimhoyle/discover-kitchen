import React from "react";
import styled from "styled-components";

const NavLinks = styled.div`
  a {
    color: #FFFF;
    margin: .5rem 1rem;
    padding-bottom: .5rem;
    border-bottom: 2px solid #FFFF;
    font-size: ${props => props.theme.fontSizes.medium};
    text-decoration: none;
    text-transform: uppercase;
  }

  @media ${props => props.theme.device.laptop} {
    width: 100vw;

  }
`;


const StyledNavLinks = ({children}) => (
  <NavLinks>
      {children}
  </NavLinks>
  );

export default StyledNavLinks;