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


const StyledHeader = ({children}) => (
  <Header>
      {children}
  </Header>
  );

export default StyledHeader;