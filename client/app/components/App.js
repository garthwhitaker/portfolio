import React from 'react';
import Grid from 'material-ui/Grid';
import withStyles from 'material-ui/styles/withStyles';
import PropTypes from 'prop-types';
import Header from './Header/Header';
import Content from './Content/Content';
import Footer from './Footer/Footer';

const styles = {
  root: {
    flexGrow: 1,
  },
  center: {
    textAlign: 'center',
  },
};

const App = props => (
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

App.propTypes = {
  classes: PropTypes.string.isRequired,
};

export default withStyles(styles)(App);
