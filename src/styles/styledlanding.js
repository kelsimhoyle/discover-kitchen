import React from "react";
import styled from "styled-components";

const Landing = styled.div`
    position: relative;
    margin-bottom: 150px;

    .image {
        width: 100vw;
        height: 80vh;
        overflow: hidden;
    }
    ${'' /* img {
        width: 100%;
        height: auto;
        
    } */}

    .landing-text {
        position: absolute;            
        bottom: -100px;   
        left: 50%;         
        z-index: 5;         
        transform: translate(-50%);
        -webkit-box-shadow:0 0 10px rgba(0, 0, 0, 0.5);
	-moz-box-shadow:0 0 10px rgba(0, 0, 0, 0.5);
	box-shadow:0 0 10px rgba(0, 0, 0, 0.5);
        }

`;


const StyledLanding = ({ children }) => {
  return <Landing>{children}</Landing>
};

export default StyledLanding;