import React, { useState } from "react";
import { GlobalStyle, theme } from "../theme/global-style";
import styled, { ThemeProvider } from "styled-components";
import Header from "../components/header";
import Footer from "../components/footer";

const Container = styled.div`
  padding-bottom: ${props => props.padding};
`

const Layout = ({ children }) => {
  const [footerHeight, setHeight] = useState(0)
  const padding = `${footerHeight + 20}px`
  

  return (
      <ThemeProvider theme={theme} >
       <Container padding={padding}>
        <GlobalStyle />
        <Header />
        {children}
        </Container>
        <Footer setHeight={setHeight} />
      
      </ThemeProvider>
  )
};

export default Layout;