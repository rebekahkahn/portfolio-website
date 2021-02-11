import React, { useState } from "react";
import Main from "./MainComponent";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Switch from "@material-ui/core/Switch";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

export default function Header() {
  const [darkState, setDarkState] = useState(false);
  const palletType = darkState ? "light" : "dark";
  const darkTheme = createMuiTheme({
    palette: {
      type: palletType,
    },
  });
  const handleThemeChange = () => {
    setDarkState(!darkState);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <AppBar position="fixed" color="dark">
        <Toolbar>
          <Grid container>
            <Grid item xs={6} justify="flex-start">
              <Switch checked={darkState} onChange={handleThemeChange} />
            </Grid>
            <Grid container xs={6} justify="flex-end">
              <Button component={Link} to={"/about"}>
                About
              </Button>
              <Button component={Link} to={"/portfolio"}>
                Portfolio
              </Button>
              <Button component={Link} to={"/contact"}>
                Contact
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Main />
    </ThemeProvider>
  );
}
