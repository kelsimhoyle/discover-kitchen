import React from "react";
import styled from "styled-components";

const Page = styled.div`
      ${'' /* background-color: ${props => props.theme.colors.blue} */}
`;
const AboutPage = ({ children }) => {
  return <Page>{children}</Page>
};

export default AboutPage;