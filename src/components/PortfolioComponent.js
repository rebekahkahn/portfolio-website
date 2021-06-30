//
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Fab from "@material-ui/core/Fab";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import Slide from "@material-ui/core/Slide";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import { styled } from "@material-ui/core/styles";
import { spacing } from "@material-ui/system";
import MuiButton from "@material-ui/core/Button";

function Portfolio() {
  const classes = useStyles();

  const [isClicked, setIsClicked] = useState(false);
  const toggle = () => {
    return setIsClicked(!isClicked);
  };
  const Button = styled(MuiButton)(spacing);

  return (
    <div className={classes.root}>
      <Paper>
        <Grid container className={classes.container} id="TOPPAGE">
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
          className={classes.goodscrolls}
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
        {/*Project one -------------------------------------------*/}
        <Paper>
          <Grid container className={classes.container}>
            <Grid item xs={12} sm={6}>
              <Grid container className={classes.name}>
                <Grid item xs={12}>
                  <h1>Mantisplace: React Design</h1>
                </Grid>
                <Grid item xs={12}>
                  <Button
                    variant="outlined"
                    mr={3}
                    href="https://github.com/rebekahkahn/mantisplace-react-design"
                    target="_blank"
                  >
                    Github
                  </Button>
                  <Button
                    variant="outlined"
                    href="https://condescending-borg-73067e.netlify.app/"
                    target="_blank"
                  >
                    Preview
                  </Button>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Grid container className={classes.roles}>
                <Grid item xs={12}>
                  <div>
                    <CardMedia
                      className={classes.media}
                      image="../images/mantisplace-large.png"
                    />
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid container justify="center">
            <Fab
              color="default"
              aria-label="scroll"
              className={classes.scroll}
              href="#PROJECTTWO"
            >
              <ExpandMoreIcon className={classes.arrowButton} />
            </Fab>
          </Grid>
          {/*Project two -------------------------------------------*/}
          <Grid container className={classes.container} id="PROJECTTWO">
            <Grid item xs={12} sm={6}>
              <Grid container className={classes.name}>
                <Grid item xs={12}>
                  <h1>Mantisplace: React Native Design</h1>
                </Grid>
                <Grid item xs={12}>
                  <Button
                    variant="outlined"
                    mr={3}
                    href="https://github.com/rebekahkahn/mantisplace-reactnative-design"
                    target="_blank"
                  >
                    Github
                  </Button>
                  <Button
                    variant="outlined"
                    href="https://snack.expo.io/7ZhBVKvqw"
                    target="_blank"
                  >
                    Preview
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Card className={classes.rootCard}>
                <CardMedia
                  className={classes.cover}
                  image="/images/reactnative-mobile.png"
                />
              </Card>
            </Grid>

            <Grid container justify="center">
              <Fab
                color="default"
                aria-label="scroll"
                className={classes.scroll}
                href="#PROJECTTHREE"
              >
                <ExpandMoreIcon className={classes.arrowButton} />
              </Fab>
            </Grid>
          </Grid>

          {/*Project three -------------------------------------------*/}
          <Grid container className={classes.container} id="PROJECTTHREE">
            <Grid item xs={12} sm={6}>
              <Grid container className={classes.name}>
                <Grid item xs={12}>
                  <h1>Mantisplace: Server</h1>
                </Grid>
                <Grid item xs={12}>
                  <Button
                    variant="outlined"
                    mr={3}
                    href="https://github.com/rebekahkahn/mantisplace-nodemongoexpress"
                    target="_blank"
                  >
                    Github
                  </Button>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Grid container className={classes.roles}>
                <Grid item xs={12}>
                  <div>
                    <CardMedia
                      className={classes.media}
                      image="../images/backend-support.png"
                    />
                  </div>
                </Grid>
              </Grid>
            </Grid>
            <Grid container justify="center">
              <Fab
                color="default"
                aria-label="scroll"
                className={classes.goodscrolls}
                href="#TOPPAGE"
              >
                <ExpandLessIcon className={classes.arrowButton} />
              </Fab>
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
  media: {
    height: 0,
    paddingTop: "60.25%", // 16:9
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
    [theme.breakpoints.up("sm")]: {
      marginTop: "-22px",
    },
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },

  goodscrolls: {
    marginTop: "-22px",
  },

  rootCard: {
    display: "flex",
  },
  cover: {
    display: "flex",
    width: 300,
  },
}));

export default Portfolio;
