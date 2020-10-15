import React from "react";
import Grid from "@material-ui/core/Grid";
import withStyles from "@material-ui/styles/withStyles";
import PropTypes from "prop-types";

const styles = {
  row: {
    display: "flex",
    justifyContent: "center",
    fontFamily: '"Open Sans", sans-serif',
  },
  divider: {
    marginTop: "1rem",
    marginBottom: "1rem",
    border: 0,
    borderTop: "1px solid rgba(0,0,0,.1)",
  },
};

const Footer = ({ classes: { divider, row } }) => (
  <div>
    <hr className={divider} />
    <Grid container>
      <Grid className={row} item xs={12}>
        &copy; Copyright 2018 Garth Whitaker
      </Grid>
    </Grid>
  </div>
);

Footer.propTypes = {
  classes: PropTypes.shape({
    row: PropTypes.string.isRequired,
    divider: PropTypes.string.isRequired,
  }).isRequired,
};

export default withStyles(styles)(Footer);
