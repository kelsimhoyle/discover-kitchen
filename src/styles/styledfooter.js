import React from "react";
import styled from "styled-components";

const Footer = styled.footer`
    width: 100vw;
    height: auto;
    
    .footer-content {
    background-color: ${props => props.theme.colors.lightGrey};
    display: flex;
    flex-direction: column;
    width: 100%;
    position: absolute;
    bottom: 0;
    color: white;

        div {
            margin: 1rem auto;
        }
    }
   

    .btn {
        align-self: baseline;
    }

    .links {
        a {
            color: white;
            margin: 1rem .5rem;
            padding: .5rem;
            border-bottom: .5rem solid ${props => props.theme.colors.red};
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


  img {
        height: auto;
        width: 50%;
        margin: 1rem auto;
    }


  @media ${props => props.theme.device.laptop} {
    width: 100vw;
    .footer-content {
        background-color: ${props => props.theme.colors.lightGrey};
    100%;
    padding: 2rem 10%;
    margin: auto;
    flex-direction: row;
    justify-content: space-between;
    
        button {
            border-bottom: none;
        }
    }

    img {
        height: 300px;
        width: auto;
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