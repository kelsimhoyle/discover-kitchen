import React from "react";
import styled from "styled-components";

const Div = styled.div`

    position: relative;
    margin: auto;
    padding: 2.5rem 1rem;
    color: #FFFFFF;

    .content {
        padding: 1rem;
    }

    .title {
        position: absolute;
        top: .5rem;
        z-index: 5;
    }

    h2 {
        display: inline;
        font-size: 1.75rem;
        letter-spacing: .25rem;
        background: linear-gradient(180deg, rgba(200,29,37, 0) 0%, rgba(200,29,37, 0) 60%, rgba(200, 29, 37, 1) 60%, rgba(200,29,37, 1) 100%);

    }

  
    @media ${props => props.theme.device.laptop} {
        display: flex;
        flex-direction: row;
        padding: 3rem 10rem;


        .title {
            position: relative;
            width: 100%;
            margin: 0;
        }

            div {
                width: 50%;
                margin-left: 5%;
                color: #FFFFFF;
                line-height: 2;
                font-size: ${props => props.theme.fontSizes.small};
                
                h2 {
                    text-transform: uppercase;
                    font-size: ${props => props.theme.fontSizes.large};
                    letter-spacing: .5rem;
                    display: inline;

                }
                h2, p {
                    margin: 1rem 0;
                }
            }

    }

`;


const StyledAbout = ({children, className}) => (
  <Div className={className ? className : ""}>
      {children}
  </Div>
  );

export default StyledAbout