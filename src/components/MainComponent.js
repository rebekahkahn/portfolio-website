import React, { Component } from "react";
import Header from "./HeaderComponent";
import About from "./AboutComponent";
import AboutMe from "./AboutMeComponent";
import Portfolio from "./PortfolioComponent";
class Main extends Component {
  render() {
    return (
      <>
        <Header />
        <About />
        <AboutMe />
        {/* <Portfolio /> */}
      </>
    );
  }
}

export default Main;
