import React, { Component } from "react";
import Header from "./HeaderComponent";
import About from "./AboutComponent";

class Main extends Component {
  render() {
    return (
      <>
        <Header />
        <About />
      </>
    );
  }
}

export default Main;
