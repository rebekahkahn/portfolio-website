import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Fab from "@material-ui/core/Fab";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

function About() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container className={classes.container}>
        <Grid item xs={12} sm={6}>
          <Paper square className={classes.paperName} variant="outlined">
            <h1>Rebekah Kahn</h1>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper square className={classes.paper}>
            <Grid container className={classes.roles}>
              <Grid item xs={12}>
                Responsive design
              </Grid>
              <Grid item xs={12}>
                Web and Mobile apps
              </Grid>
              <Grid item xs={12}>
                Client-side specialist
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
      <Grid container justify="center">
        <Fab color="default" aria-label="scroll" className={classes.arrow}>
          <ExpandMoreIcon className={classes.arrowButton} />
        </Fab>
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

export default About;

//add media query so that golden border disappears on smaller viewports
