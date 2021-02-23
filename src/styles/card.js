import React from "react";
import styled from "styled-components";

const Div = styled.div`
  width: 90%;
  margin-top: 2rem;
  text-align: center;


  h3 {
      text-transform: uppercase;
  }

  button {
    position: absolute;
    left: 50%;
    transform: translate(-50%);
  }
  
  img {
      margin: auto;
      width: 90%;
      height: auto;
  }

  @media ${props => props.theme.device.laptop} {
      width: 30%;
  }
`;


const CardStyle = ({children}) => (
  <Div>
      {children}
  </Div>
  );

export default CardStyle