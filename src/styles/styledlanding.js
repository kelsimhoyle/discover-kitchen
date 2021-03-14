import React from "react";
import styled from "styled-components";

const Landing = styled.div`
    position: relative;

    .image {
        width: 100vw;
        max-height: 100vh;
        overflow: hidden;
    }

    .dk-logo {
        position: absolute;
        top: 50%; 
        left: 50%;
        transform: translate(-50%, -50%);
        width: 50%;
        background-color:  rgba(255,255,255,.7);

      
    }

`;


const StyledLanding = ({ children }) => {
  return <Landing>{children}</Landing>
};

export default StyledLanding;