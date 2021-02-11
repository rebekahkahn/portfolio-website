//
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Fab from "@material-ui/core/Fab";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Slide from "@material-ui/core/Slide";

function Portfolio() {
  const classes = useStyles();

  const [isClicked, setIsClicked] = useState(false);
  const toggle = () => {
    return setIsClicked(!isClicked);
  };

  return (
    <div className={classes.root}>
      <Paper>
        <Grid container className={classes.container}>
          <Grid item xs={12} sm={6}>
            <Grid container className={classes.name}>
              <Grid item xs={12}>
                <h1>Portfolio</h1>
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
        <Fab
          onClick={toggle}
          color="default"
          aria-label="scroll"
          className={classes.scroll}
        >
          <ExpandMoreIcon className={classes.arrowButton} />
        </Fab>
      </Grid>

      <Slide
        direction="up"
        in={isClicked}
        toggle={toggle}
        mountOnEnter
        unmountOnExit
      >
        <Paper>
          <Grid container className={classes.container}>
            <Grid item xs={12} sm={6}>
              <Grid container className={classes.name}>
                <Grid item xs={12}>
                  <h1>Project Title</h1>
                </Grid>
                <Grid item xs={12}>
                  <p>
                    I am a graduate of Smith College '19 in Astronomy, and have
                    interned at places such as Yale University and NASA AMES for
                    computational astropyhysics. I am now a front-end web and
                    native app developer specializing in React, JavaScript, HTML
                    and CSS.
                  </p>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Grid container className={classes.roles}>
                <Grid item xs={12}>
                  I am a graduate of Smith College '19 in Astronomy, and have
                  interned at places such as Yale University and NASA AMES for
                  computational astropyhysics. I am now a front-end web and
                  native app developer specializing in React, JavaScript, HTML
                  and CSS.
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Slide>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  container: {
    [theme.breakpoints.up("sm")]: {
      height: "75vh",
      alignItems: "center",
      paddingTop: "60px",
    },
    [theme.breakpoints.down("xs")]: {
      height: "80vh",
      paddingTop: "160px",
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

export default Portfolio;
