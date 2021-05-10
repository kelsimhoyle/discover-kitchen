import React from "react";
import styled from "styled-components";

const Btn = styled.div`
  padding: 1rem;
  background: ${props => props.theme.colors.mainBlue};
  
`;
const ContactBtn = ({ children }) => {
  return <Btn>{children}</Btn>
};

export default ContactBtn;