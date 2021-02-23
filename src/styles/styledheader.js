import React from "react";
import styled from "styled-components";

const Header = styled.div`
    background-color: ${props => props.theme.colors.darkBlue};
    padding: 2rem;


    img {
      width: 200px;
      height: auto;
    }
  
  h2 {
      text-transform: uppercase;
      color: #FFFF;
  }

  a {
    color: #FFFF;
    text-decoration: none;
  }

  @media ${props => props.theme.device.laptop} {
    max-width: 100vw;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;





const StyledHeader = ({children}) => (
  <Header>
      {children}
  </Header>
  );

export default StyledHeader;