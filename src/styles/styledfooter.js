import React from "react";
import styled from "styled-components";

const Footer = styled.footer`
    width: 100vw;
    padding-top: 150px;
    position: absolute;
    bottom: 0;
    background-color: ${props => props.theme.colors.lightBlue};

    div {
        width: 100vw;
        display: flex;
        flex-direction: column;
    }

    .links {
        a {
            color: #FFFF;
            margin: 1rem .5rem;
            padding-bottom: .5rem;
            border-bottom: 2px solid #FFFF;
            font-size: ${props => props.theme.fontSizes.medium};
            text-decoration: none;
            text-transform: uppercase;
        }
    }

    li {
        margin: .75rem;
    }

    h4 {
        display: inline;
        font-size: 1.5rem;
        letter-spacing: .25rem;
        padding: .25rem;
        font-weight: bold;
        background: ${props => props.theme.colors.red};
    }

  .footer-links {
    div {
        width: 50%;
    }
    display: flex;
    flex-direction: row;
  }

  .schedule {
      display: flex;
      flex-direction: column;

  }

  width: 100vw;
    margin: auto;

    img {
        height: 300px;
        width: auto;
        margin: auto;
        position: absolute;
        top: -165px;
        left: 50%;
        transform: translate(-50%, 0);
    }


  @media ${props => props.theme.device.laptop} {
    padding-top: 0;
div {
    width: 90vw;
    padding: 1.rem;
    margin: auto;
    flex-direction: row;
    align-items: flex-end;
    
    button {
        border-bottom: none;
    }
}
 

    img {
        top: -175px;
        left: 10%;
    }

    .footer-links {

        div {
            flex-direction: column;
        }
    }

    .schedule {
        margin-top: 125px;
        width: 25%;
    }

  }
`;


const StyledFooter = ({children}) => (
  <Footer>
      {children}
  </Footer>
  );

export default StyledFooter;