import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Input from "@material-ui/core/Input";

function Contact() {
  const classes = useStyles();

  const [values, setValues] = React.useState({
    firstName: "",
    lastname: "",
    email: "",
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
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
                <form noValidate autoComplete="off">
                  <div>
                    <TextField
                      id="standard-full-width"
                      label="First Name"
                      value={values.firstName}
                      onChange={handleChange}
                    />

                    <TextField
                      id="standard-full-width"
                      label="Last Name"
                      value={values.lastName}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <Grid item xs={12} className="email">
                      <Input
                        placeholder="email@mail.com"
                        fullWidth
                        label="youremail@email.com"
                        value={values.email}
                        onChange={handleChange}
                      />
                    </Grid>
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
    [theme.breakpoints.up("sm")]: {
      padding: theme.spacing(2),
      textAlign: "left",
    },
    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(2),
      textAlign: "center",
    },
  },
  email: {
    padding: theme.spacing(3),
  },
}));

export default Contact;
