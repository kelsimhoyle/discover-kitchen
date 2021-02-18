import React from "react";
import styled from "styled-components";

const Footer = styled.footer`
    width: 100vw;
    margin-top: 10px;
    position: absolute;
    bottom: 0;
    background-color: ${props => props.theme.colors.lightRed};

    div {
        width: 80vw;
        margin: auto;

        display: flex;
        flex-direction: row;
    }
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


const StyledFooter = ({children}) => (
  <Footer>
      {children}
  </Footer>
  );

export default StyledFooter;