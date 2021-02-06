import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appbarColor}>
        <Toolbar>
          <div className={classes.buttonGroup}>
            <Button color="inherit">About</Button>
            <Button color="inherit">Projects</Button>
            <Button color="inherit">Contact</Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appbarColor: {
    backgroundColor: "black",
    color: "c9c9c9",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  buttonGroup: {
    position: "fixed",
    right: "10px",
  },
}));

export default Header;

//maybe add so when hover over buttons, golden underline border shows up
