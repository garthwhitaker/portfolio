import React from "react";
import Avatar from "material-ui/Avatar";
import Grid from "material-ui/Grid";
import withStyles from "material-ui/styles/withStyles";

const styles = {
  row: {
    display: "flex",
    justifyContent: "center"
  },
  profile: {
    height: 150,
    width: 150,
    margin: 5
  },
  divider: {
    marginTop: "1rem",
    marginBottom: "1rem",
    border: 0,
    borderTop: "1px solid rgba(0,0,0,.1)"
  },
  h1: {
    fontSize: "2.5rem",
    margin: 0,
    textAlign: "center"
  },
  h4: {
    color: "#666",
    paddingBottom: "20px",
    fontFamily: '"Open Sans", sans-serif',
    fontSize: "1.5rem",
    textAlign: "center",
    marginTop: 0,
    marginBottom: "0.5rem"
  }
};

const Header = props => {
  const { classes } = props;
  return (
    <div>
      <Grid container>
        <Grid className={classes.row} item xs={12}>
          <Avatar
            alt="Profile photo"
            src="public/images/profile.jpeg"
            className={classes.profile}
          />
        </Grid>
        <Grid className={classes.row} item xs={12}>
          <h1 className={classes.h1}>GARTH WHITAKER</h1>
        </Grid>
        <Grid className={classes.row} item xs={12}>
          <h4 className={classes.h4}>
            A craftsman using technology to enable people and business.
          </h4>
        </Grid>
      </Grid>
      <hr className={classes.divider} />
    </div>
  );
};

export default withStyles(styles)(Header);
