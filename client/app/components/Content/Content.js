import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import AssigmentIcon from "@material-ui/icons/Assignment";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Grid from "@material-ui/core/Grid";
import withStyles from "@material-ui/core/styles/withStyles";
import PropTypes from "prop-types";
// eslint-disable-next-line import/no-unresolved
// import { Books } from "../typescript/Books/Books";

const styles = {
  icon: {
    width: "3em",
    height: "3em",
    paddingLeft: 10,
    paddingRight: 10,
  },
  row: {
    display: "flex",
    padding: 20,
  },
  item: {
    fontFamily: '"Open Sans", sans-serif',
    textAlign: "justify",
  },
};

const Content = ({ classes: { row, icon, item } }) => (
  <Grid container>
    <Grid
      container
      alignItems="center"
      direction="row"
      justify="center"
      className={row}
    >
      <Grid item xs={12} sm={4} md={2}>
        <GitHubIcon className={icon} />
      </Grid>
      <Grid item xs={12} sm={8} md={10} className={item}>
        For things I am currently working on or have worked on, check&nbsp;
        <a href="https://github.com/garthwhitaker">GitHub</a>
      </Grid>
    </Grid>
    <Grid
      container
      alignItems="center"
      direction="row"
      justify="center"
      className={row}
    >
      <Grid item xs={12} sm={4} md={2}>
        <AssigmentIcon className={icon} />
      </Grid>

      <Grid item xs={12} sm={8} md={10} className={item}>
        To read my latest blog posts, see&nbsp;
        <a href="http://www.garthwhitaker.co.za/blog">Blog</a>
      </Grid>
    </Grid>
    <Grid
      container
      alignItems="center"
      direction="row"
      justify="center"
      className={row}
    >
      <Grid item xs={12} sm={4} md={2}>
        <LinkedInIcon className={icon} />
      </Grid>
      <Grid item xs={12} sm={8} md={10} className={item}>
        My professional career in IT can be viewed on&nbsp;
        <a href="https://www.linkedin.com/in/garthwhitaker">LinkedIn</a>
      </Grid>
    </Grid>
    <Grid
      container
      alignItems="flex-start"
      direction="row"
      justify="center"
      className={row}
    >
      {/* <Books /> */}
    </Grid>
  </Grid>
);

Content.propTypes = {
  classes: PropTypes.shape({
    row: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    item: PropTypes.string.isRequired,
  }).isRequired,
};

export default withStyles(styles)(Content);
