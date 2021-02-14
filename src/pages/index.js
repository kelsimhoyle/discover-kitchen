import * as React from "react";
import Landing from "../components/landing";
import AboutComponent from "../components/about";
import ServicesComponent from "../components/services";
import Home from "../styles/home";

const IndexPage = () => {
  return (
      <>
        <Landing />
        <Home>
          <AboutComponent />
          <ServicesComponent />
        </Home>
      </>
  )
}

export default IndexPage
