import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

function AboutMe() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container className={classes.container}>
        <Grid item xs={12} sm={6}>
          <Paper square className={classes.paperName} variant="outlined">
            <h1>About Me</h1>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper square className={classes.paper}>
            <Grid container className={classes.roles}>
              <Grid item xs={12}>
                I am a graduate of Smith College '19 in Astronomy, and have
                interned at places such as Yale University and NASA AMES for
                computational astropyhysics. I am now a front-end web and native
                app developer specializing in React, JavaScript, HTML and CSS.
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: "78vh",
    marginTop: "0px",
  },
  container: {
    height: "70vh",
    backgroundColor: "black",
    alignItems: "center",
  },
  h1: {
    fontWeight: 800,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    backgroundColor: "black",
    color: "white",
  },

  arrow: {
    marginTop: "-22px",
  },
  paperName: {
    fontFamily: "Big Shoulders Display",
    fontSize: 25,
    padding: theme.spacing(2),
    textAlign: "center",
    backgroundColor: "black",
    color: "white",
    [theme.breakpoints.up("sm")]: {
      borderRight: "3px solid #D4AF37",
    },
    [theme.breakpoints.down("xs")]: {
      borderRight: "3px solid black",
    },
  },
  roles: {
    textAlign: "left",
  },
}));

export default AboutMe;

//add media query so that golden border disappears on smaller viewports
