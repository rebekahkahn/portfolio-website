import React, { Component } from "react";
import Header from "./HeaderComponent";
import About from "./AboutComponent";
import Portfolio from "./PortfolioComponent";
import Contact from "./ContactComponent";

import { Switch, Route, Redirect } from "react-router-dom";

class Main extends Component {
  render() {
    const AboutPage = () => {
      return <About />;
    };
    const PortfolioPage = () => {
      return <Portfolio />;
    };
    const ContactPage = () => {
      return <Contact />;
    };

    const HeaderPage = () => {
      return <Header />;
    };

    return (
      <React.Fragment>
        <div>
          <Route path="/header" component={HeaderPage} />
          <Switch>
            <Route path="/about" component={AboutPage} />
            <Route path="/portfolio" component={PortfolioPage} />
            <Route path="/contact" component={ContactPage} />

            <Redirect to="/about" />
          </Switch>
        </div>
      </React.Fragment>
    );
  }
}

export default Main;
