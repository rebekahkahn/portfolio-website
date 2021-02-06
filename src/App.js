import React, { Component } from "react";
import Main from "./components/MainComponent";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import "./css/App.css";

const theme = createMuiTheme({
  typography: {
    fontFamily: ["Big Shoulders Display", "sans-serif"].join(","),
  },
});

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div className="App">
          <Main />
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
