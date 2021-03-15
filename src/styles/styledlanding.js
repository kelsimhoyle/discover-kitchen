import React from "react";
import styled from "styled-components";

const Landing = styled.div`
    position: relative;

    .image {
        width: 100vw;
        height: 100vh;
        overflow: hidden;
    }

    .dk-logo {
        position: absolute;
        top: 50%; 
        left: 50%;
        transform: translate(-50%, -50%);
        width: 80%;
        background-color:  rgba(255,255,255,.7);
    }

    @media ${props => props.theme.device.laptop} {
        .dk-logo {
            width: 50%;
        }
    }

`;


const StyledLanding = ({ children }) => {
  return <Landing>{children}</Landing>
};

export default StyledLanding;