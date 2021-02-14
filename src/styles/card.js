import React from "react";
import styled from "styled-components";

const Div = styled.div`
  width: 90vw;
  
  h3 {
      text-transform: uppercase;
  }
  
  img {
      margin: auto;
      width: 90%;
      height: auto;
  }

  @media ${props => props.theme.device.laptop} {
      width: 30vw;
  }
`;


const CardStyle = ({children}) => (
  <Div>
      {children}
  </Div>
  );

export default CardStyle