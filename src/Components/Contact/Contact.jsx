import React from "react";
import "./Contact.css";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Button from '@material-ui/core/Button';

const Contact = () => {
  return (
    <>
      <form className="container m-5">
        <div className="form">
          <div className="formName">
            <Grid container spacing={1} alignItems="flex-end" className="m-3">
              <Grid item>
                <AccountCircle />
              </Grid>
              <Grid item>
                <TextField id="input-with-icon-grid" label="First Name" />
              </Grid>
            </Grid>
            <Grid container spacing={1} alignItems="flex-end" className="m-3">
              <Grid item>
                <AccountCircle />
              </Grid>
              <Grid item>
                <TextField id="input-with-icon-grid" label="Last Name" />
              </Grid>
            </Grid>
          </div>
          <div className="emailPhone">
            <Grid container spacing={1} alignItems="flex-end" className="m-3">
              <Grid item>
                <AccountCircle />
              </Grid>
              <Grid item>
                <TextField id="input-with-icon-grid" label="Enter Email" />
              </Grid>
            </Grid>
            <Grid container spacing={1} alignItems="flex-end" className="m-3">
              <Grid item>
                <AccountCircle />
              </Grid>
              <Grid item>
                <TextField
                  id="input-with-icon-grid"
                  label="Enter Phone Number"
                />
              </Grid>
            </Grid>
          </div>
          <h3>What's your Favourite Game</h3>
          <div className="checkBox">
          
            <FormControlLabel
              control={<Checkbox name="checkedB" color="secondary" />}
              label="Cricket"
            />
            <FormControlLabel
              control={<Checkbox name="checkedB" color="secondary" />}
              label="Football"
            />
            <FormControlLabel
              control={<Checkbox name="checkedB" color="secondary" />}
              label="Tennis"
            />
            <FormControlLabel
              control={<Checkbox name="checkedB" color="secondary" />}
              label="BasketBall"
            />
          </div>
          <Button variant="contained" elevation={3} color="secondary">
  Submit
</Button>
        </div>
      </form>
    </>
  );
};

export default Contact;
