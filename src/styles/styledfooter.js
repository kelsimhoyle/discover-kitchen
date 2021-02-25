import React from "react";
import styled from "styled-components";

const Footer = styled.footer`
    width: 100vw;
    padding-top: 150px;
    position: absolute;
    bottom: 0;
    background-color: ${props => props.theme.colors.lightBlue};

    .footer-content {
        width: 100vw;
        display: flex;
        flex-direction: column;
    }

    .btn {
        align-self: baseline;
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
        padding: .25rem;
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
      align-content: center;
      justify-content: center;

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

    .footer-content {
        width: 60vw;
        padding: 1rem;
        margin: auto;
        flex-direction: row;
        justify-content: space-between;
        
        button {
            border-bottom: none;
        }
    }
 

    img {
        top: -175px;
        left: 10%;
    }

    .footer-links {
        width: auto;
        flex-direction: row;
        justify-content: center;
        margin-left: 2rem;

        div {
            flex-direction: column;
            width: auto;
            padding: 2rem;
            align-items: baseline;
        }
    }


  }
`;


const StyledFooter = ({children}) => (
  <Footer>
      {children}
  </Footer>
  );

export default StyledFooter;