import React from "react";
import styled from "styled-components";

const Section = styled.section`
  width: 90vw;
  margin: 3rem auto;
`;
const Container = ({ children }) => {
  return <Section className={`container`}>{children}</Section>
};

export default Container;