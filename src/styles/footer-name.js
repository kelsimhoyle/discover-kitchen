import React from "react";
import styled from "styled-components";

const Name = styled.div`
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
        width: 0;
        
        img {
              left: 15%;
              top: -50px;
        }

  }

`;


const StyledName = ({ children }) => {
  return <Name>{children}</Name>
};

export default StyledName;