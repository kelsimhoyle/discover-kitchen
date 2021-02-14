import React from "react";
import styled from "styled-components";

const Div = styled.div`
  margin: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 3rem 10rem;

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
        }
        h2, p {
            margin: 1rem 0;

        }
    }

`;


const StyledAbout = ({children, className}) => (
  <Div className={className ? className : ""}>
      {children}
  </Div>
  );

export default StyledAbout