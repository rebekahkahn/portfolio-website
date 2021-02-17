import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

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
              {/* <Grid item xs={12}> */}
              <form noValidate autoComplete="off">
                <div className={classes.theform}>
                  <TextField
                    style={{ margin: 8 }}
                    id="name-first"
                    label="First Name"
                    value={values.firstName}
                    onChange={handleChange}
                    variant="outlined"
                  />

                  <TextField
                    style={{ margin: 8 }}
                    id="name-last"
                    label="Last Name"
                    value={values.lastName}
                    onChange={handleChange}
                    variant="outlined"
                  />

                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      style={{ margin: 8, paddingRight: 13 }}
                      id="email"
                      label="Email"
                      value={values.email}
                      onChange={handleChange}
                      variant="outlined"
                    />
                  </Grid>
                </div>
              </form>
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
    theForm: {
      border: "1px solid red",
    },
  },
}));

export default Contact;
