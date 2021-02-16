import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

function Contact() {
  const classes = useStyles();

  const [value, setValue] = React.useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className={classes.root}>
      <Paper>
        <Grid container className={classes.container}>
          <Grid item xs={12} sm={6}>
            <Grid container className={classes.name}>
              <Grid item xs={12}>
                <h1>Contact Me</h1>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Grid container className={classes.roles}>
              <Grid item xs={12}>
                <form className={classes.root} noValidate autoComplete="off">
                  <div>
                    <TextField
                      id="first-name"
                      label="First Name"
                      value={value}
                      onChange={handleChange}
                    />
                    <TextField
                      id="last-name"
                      label="Last Name"
                      value={value}
                      onChange={handleChange}
                    />
                  </div>
                </form>
              </Grid>
              <Grid item xs={12}>
                <form className={classes.root} noValidate autoComplete="off">
                  <div>
                    <TextField
                      id="email"
                      label="Email"
                      value={value}
                      onChange={handleChange}
                    />
                  </div>
                </form>
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
}));

export default Contact;
