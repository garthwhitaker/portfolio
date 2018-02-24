import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header/Header";
import Content from "./Content/Content";
import Footer from "./Footer/Footer";
import Grid from "material-ui/Grid";
import withStyles from "material-ui/styles/withStyles";

const styles = {
  root: {
    flexGrow: 1
  },
  center: {
    textAlign: 'center'
  }
};

const App = props => {
  return (
    <Grid
      container
      className={props.classes.root}
      direction="row"
      justify="center"
      alignItems="center"
    >
      <Grid item xs={2} />
      <Grid item xs={8} className={props.classes.center}>
        <Header />
        <Content />
        <Footer />
      </Grid>
      <Grid item xs={2} />
    </Grid>
  );
};

export default withStyles(styles)(App);
