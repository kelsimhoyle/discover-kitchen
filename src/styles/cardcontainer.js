import React from "react";
import styled from "styled-components";

const FlexDiv = styled.div`
display: flex;
  width: 100vw;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;

  @media ${props => props.theme.device.laptop} {
      flex-direction: row;
  }
  
`;

const CardContainer = ({ children}) => (
  <FlexDiv>{children}</FlexDiv>
  );

export default CardContainer;