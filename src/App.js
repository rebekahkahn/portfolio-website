import React from "react";
import Main from "./components/MainComponent";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "./theme";
const App = () => (
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Main />
    </ThemeProvider>
  </BrowserRouter>
);
export default App;
