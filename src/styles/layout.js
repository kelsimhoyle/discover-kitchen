import React from "react";
import { theme } from "../theme/global-style";
import { ThemeProvider } from "styled-components";
import Header from "../components/header";
import Footer from "../components/footer";


const Layout = ({ children }) => {

  

  return (
      <ThemeProvider theme={theme} >
        <Header />
        {children}
        <Footer />
      
      </ThemeProvider>
  )
};

export default Layout;