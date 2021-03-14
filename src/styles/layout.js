import React from "react";
import { theme } from "../theme/global-style";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import Header from "../components/header";
import Footer from "../components/footer";
import HomeLayout from "./homelayout";

const GlobalStyle = createGlobalStyle`
  body {
    margin-top: 3.25rem;
  }
`

const Layout = ({ children, page }) => {
  if (page === "home") {
    return (
      <ThemeProvider theme={theme} >
        <HomeLayout>
          {children}
        </HomeLayout>
        <Footer />
      </ThemeProvider>

    )
  }
  return (
    
    <ThemeProvider theme={theme} >
      <GlobalStyle />
      <Header />
      {children}
      <Footer />
    </ThemeProvider>
  )
};

export default Layout;