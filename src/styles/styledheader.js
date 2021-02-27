import React from "react";
import styled from "styled-components";

const Header = styled.div`
    background-color: white;
    max-width: 80vw;
    padding: 1rem 10vw;

    img {
      width: 200px;
      height: auto;
    }
  
  h2 {
      text-transform: uppercase;
  }

  a {
    text-decoration: none;
    color: ${props => props.theme.colors.darkGrey};
  }

  @media ${props => props.theme.device.laptop} {
    max-width: 100vw;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: baseline;
  }
`;





const StyledHeader = ({children}) => (
  <Header>
      {children}
  </Header>
  );

export default StyledHeader;