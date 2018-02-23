import React from "react";
import Grid from "material-ui/Grid";
import withStyles from "material-ui/styles/withStyles";

const styles = {
  row: {
    display: "flex",
    justifyContent: "center",
    fontFamily: '"Open Sans", sans-serif'
  },
  divider: {
    marginTop: "1rem",
    marginBottom: "1rem",
    border: 0,
    borderTop: "1px solid rgba(0,0,0,.1)"
  }
};

const Footer = props => {
  return (
    <div>
      <hr className={props.classes.divider} />
      <Grid container>
        <Grid className={props.classes.row} item xs={12}>
          &copy; Copyright 2018 Garth Whitaker
        </Grid>
      </Grid>
    </div>
  );
};

export default withStyles(styles)(Footer);
