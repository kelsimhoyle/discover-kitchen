import React from "react";
import styled from "styled-components";

const FlexDiv = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  overflow: hidden;
  min-width: 0;

  h2 {
    margin: .5rem 2rem;
  }

  @media ${props => props.theme.device.laptop} {
      flex-direction: row;
      flex-wrap: wrap;

  }
  
`;

const CardContainer = ({ children}) => (
  <FlexDiv className="cardContainer">{children}</FlexDiv>
  );

export default CardContainer;