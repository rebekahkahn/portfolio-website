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
      <Paper>
        <Grid container className={classes.container}>
          <Grid item xs={12} sm={6}>
            <Grid container className={classes.name}>
              <Grid item xs={12}>
                <h1>Rebekah Kahn</h1>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} sm={6}>
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
          </Grid>
        </Grid>
      </Paper>
      <Grid container justify="center">
        <Fab color="default" aria-label="scroll" className={classes.scroll}>
          <ExpandMoreIcon className={classes.arrowButton} />
        </Fab>
      </Grid>

      <Paper>
        <Grid container className={classes.container}>
          <Grid item xs={12} sm={6}>
            <Grid container className={classes.name}>
              <Grid item xs={12}>
                <h1>About Me</h1>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Grid container className={classes.roles}>
              <Grid item xs={12}>
                I am a graduate of Smith College '19 in Astronomy, and have
                interned at places such as Yale University and NASA AMES for
                computational astropyhysics. I am now a front-end web and native
                app developer specializing in React, JavaScript, HTML and CSS.
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  container: {
    [theme.breakpoints.up("sm")]: {
      height: "70vh",
      alignItems: "center",
    },
    [theme.breakpoints.down("xs")]: {
      height: "60vh",
      paddingTop: "60px",
    },
  },
  name: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  roles: {
    padding: theme.spacing(2),
    textAlign: "left",
  },
  scroll: {
    marginTop: "-22px",
  },
}));

export default About;
