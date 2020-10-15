import React from "react";
import Grid from "@material-ui/core/Grid";
import withStyles from "@material-ui/styles/withStyles";
import PropTypes from "prop-types";
import Header from "../Header";
import Content from "../Content";
import Footer from "../Footer";

const styles = {
  root: {
    flexGrow: 1,
  },
  center: {
    textAlign: "center",
  },
};
/** Main application component */
const App = ({ classes: { root, center } }) => (
  <Grid
    container
    className={root}
    direction="row"
    justify="center"
    alignItems="center"
  >
    <Grid item xs={2} />
    <Grid item xs={8} className={center}>
      <Header />
      <Content />
      <Footer />
    </Grid>
    <Grid item xs={2} />
  </Grid>
);

App.propTypes = {
  classes: PropTypes.shape({
    root: PropTypes.string.isRequired,
    center: PropTypes.string.isRequired,
  }).isRequired,
};

export default withStyles(styles)(App);
