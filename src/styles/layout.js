import React from "react";
import { GlobalStyle, theme } from "../theme/global-style";
import  { ThemeProvider } from "styled-components";
import Header  from "../components/header";
import Footer from "../components/footer";

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
       <GlobalStyle />
       <Header />
       {children}
       <Footer />
      </ThemeProvider>
  )
};

export default Layout;