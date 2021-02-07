import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Fab from "@material-ui/core/Fab";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Image from "material-ui-image";

function Portfolio() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container className={classes.container}>
        <Grid item xs={12} sm={6}>
          <Paper square className={classes.paperName} variant="outlined">
            <h1>Portfolio</h1>
          </Paper>
        </Grid>
      </Grid>
      <Grid container justify="center">
        <Fab color="default" aria-label="scroll" className={classes.arrow}>
          <ExpandMoreIcon className={classes.arrowButton} />
        </Fab>
      </Grid>

      <Grid container className={classes.container}>
        <Grid item xs={12} sm={6}>
          <Paper square className={classes.paperName} variant="outlined">
            <h1>Mantisplace.com</h1>
            <p className={classes.description}>
              This is a responsive website using Bootstrap, HTML, and Sass, and
              a lite-server for development.
            </p>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.image}>
            <Image
              src="/images/mantisplace-large.png"
              imageStyle={{
                width: "100%",
                height: "auto",
              }}
            />
          </Paper>
        </Grid>
      </Grid>
      <Grid container justify="center">
        <Fab color="default" aria-label="scroll" className={classes.arrow}>
          <ExpandMoreIcon className={classes.arrowButton} />
        </Fab>
      </Grid>

      <Grid container className={classes.container}>
        <Grid item xs={12} sm={6}>
          <Paper square className={classes.paperName} variant="outlined">
            <h1>Mantisplace.com</h1>
            <p className={classes.description}>
              This is a responsive website using React, reactstrap,
              react-router, and sass. Create-react-app was used to scaffold out
              the project.
            </p>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.image}>
            <Image
              src="/images/mantisplace-large.png"
              imageStyle={{
                width: "100%",
                height: "auto",
              }}
            />
          </Paper>
        </Grid>
      </Grid>
      <Grid container justify="center">
        <Fab color="default" aria-label="scroll" className={classes.arrow}>
          <ExpandMoreIcon className={classes.arrowButton} />
        </Fab>
      </Grid>

      <Grid container className={classes.container}>
        <Grid item xs={12} sm={6}>
          <Paper square className={classes.paperName} variant="outlined">
            <h1>Mantisplace.com</h1>
            <p className={classes.description}>
              This is a responsive web and mobile app using React, react-native,
              and react-native-paper. Expo SDK was used to scaffold out the
              project.
            </p>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.image}>
            <Image
              src="/images/mantisplace-large.png"
              imageStyle={{
                width: "100%",
                height: "auto",
              }}
            />
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
    fontSize: 14,
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
  image: {
    padding: theme.spacing(2),
    backgroundColor: "black",
  },
  description: {
    fontFamily: "Helvetica",
    textAlign: "left",
  },
  roles: {
    textAlign: "left",
  },
}));

export default Portfolio;

//add media query so that golden border disappears on smaller viewports

// React    Redux  Router Navigation JavaScript
//HTML    CSS   SASS   Bootstrap  Reactstrap  Material UI
//Expo sdk, create react app
