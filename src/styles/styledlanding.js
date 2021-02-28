import React from "react";
import styled from "styled-components";

const Landing = styled.div`
    position: relative;

    .image {
        width: 100vw;
        height: 80vh;
        overflow: hidden;
        position: relative;
    }

    img {
        width: 100%;
        height: auto;
    }

    .landing-text {
        position: absolute;  
        width: 80vw;
        padding: 2rem;
        text-align: center;
        top: 50%;   
        left: 50%;         
        transform: translate(-50%, -50%);
        background-color: rgba(255, 255, 255, 0.5);
        -webkit-box-shadow:0 0 10px rgba(0, 0, 0, 0.5);
        -moz-box-shadow:0 0 10px rgba(0, 0, 0, 0.5);
        box-shadow:0 0 10px rgba(0, 0, 0, 0.5);

        }

`;


const StyledLanding = ({ children }) => {
  return <Landing>{children}</Landing>
};

export default StyledLanding;