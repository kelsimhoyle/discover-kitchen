import React from "react";
import styled from "styled-components";

const Landing = styled.div`
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    position: relative;

    img {
        width: 100%;
        height: auto;
        
    }

    div {
        background-color: rgba(255, 255, 255, 0.5);
        padding: 3rem;
        position: absolute;            
        top: 50%;   
        left: 50%;                      
        transform: translate(-50%, -50%);
    }

`;


const StyledLanding = ({ children }) => {
  return <Landing>{children}</Landing>
};

export default StyledLanding;