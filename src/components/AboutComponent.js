import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

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
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  container: {
    height: "300px",
    backgroundColor: "black",
    alignItems: "center",
  },
  name: {
    borderColor: "white",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    backgroundColor: "black",
    color: "white",
  },

  paperName: {
    padding: theme.spacing(2),
    textAlign: "center",
    backgroundColor: "black",
    color: "white",
    borderRight: "3px solid #D4AF37",
  },
  roles: {
    textAlign: "left",
  },
}));

export default About;

//add media query so that golden border disappears on smaller viewports
