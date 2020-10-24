import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import withStyles from "@material-ui/core/styles/withStyles";
import PropTypes from "prop-types";
// import profileImage from "../../../public/images/profile.jpeg";
import profileImage from "../../../public/images/profile-lnkedin.jpeg";

const styles = {
  row: {
    display: "flex",
    justifyContent: "center",
  },
  profile: {
    margin: 5,
    width: 150,
    height: 150,
  },
  divider: {
    marginTop: "1rem",
    marginBottom: "1rem",
    border: 0,
    borderTop: "1px solid rgba(0,0,0,.1)",
  },
  h1: {
    fontSize: "2.5rem",
    margin: 0,
    textAlign: "center",
  },
  h4: {
    color: "#666",
    paddingBottom: "20px",
    fontFamily: '"Open Sans", sans-serif',
    fontSize: "1.5rem",
    textAlign: "center",
    marginTop: 0,
    marginBottom: "0.5rem",
  },
};

const Header = (props) => {
  const { classes } = props;
  return (
    <div>
      <Grid container>
        <Grid className={classes.row} item xs={12}>
          <Avatar
            src={profileImage}
            className={classes.profile}
            alt="Garth Whitaker"
          >
            G
          </Avatar>
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

Header.propTypes = {
  classes: PropTypes.shape({
    row: PropTypes.string.isRequired,
    divider: PropTypes.string.isRequired,
    h4: PropTypes.string.isRequired,
    h1: PropTypes.string.isRequired,
    profile: PropTypes.string.isRequired,
  }).isRequired,
};

export default withStyles(styles)(Header);
