import React, { Component } from "react";
import Header from "./HeaderComponent";
import About from "./AboutComponent";
import Portfolio from "./PortfolioComponent";
import Contact from "./ContactComponent";

import { PROJECTS } from "../shared/projects";

import { Switch, Route, Redirect } from "react-router-dom";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: PROJECTS,
    };
  }
  render() {
    const AboutPage = () => {
      return <About />;
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
            <Route
              exact
              path="/portfolio"
              render={() => <Portfolio projects={this.state.projects} />}
            />
            <Route path="/contact" component={ContactPage} />
            <Redirect to="/about" />
          </Switch>
        </div>
      </React.Fragment>
    );
  }
}

export default Main;
