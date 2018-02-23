import React from "react";
import LaptopMacIcon from "material-ui-icons/LaptopMac";
import AssigmentIcon from "material-ui-icons/Assignment";
import PermIdentityIcon from "material-ui-icons/PermIdentity";
import Grid from "material-ui/Grid";
import withStyles from "material-ui/styles/withStyles";

const styles = theme => ({
  icon: {
    width: "3em",
    height: "3em",
    paddingLeft: 10,
    paddingRight: 10
  },
  row: {
    display: "flex",
    padding: 20
  },
  item: {
    fontFamily: '"Open Sans", sans-serif',
    textAlign: "justify",
    padding: 20
  }
});

const Content = props => {
  return (
    <Grid container className={props.classes.row}>
      <Grid container alignItems="center" direction="row" justify="center">
        <Grid item xs={4} md={2}>
          <LaptopMacIcon className={props.classes.icon} />
        </Grid>
        <Grid item xs={8} md={10} className={props.classes.item}>
          For things I am currently working on or have worked on, check&nbsp;<a href="https://github.com/garthwhitaker">
            GitHub
          </a>.
        </Grid>
      </Grid>
      <Grid container alignItems="center" direction="row" justify="center">
        <Grid item xs={4} md={2}>
          <AssigmentIcon className={props.classes.icon} />
        </Grid>
        <Grid item xs={8} md={10} className={props.classes.item}>
          To read my latest blog posts, see&nbsp;<a href="http://www.garthwhitaker.co.za/blog">
            Blog
          </a>.
        </Grid>
      </Grid>
      <Grid container alignItems="center" direction="row" justify="center">
        <Grid item xs={4} md={2}>
          <PermIdentityIcon className={props.classes.icon} />
        </Grid>
        <Grid item xs={8} md={10} className={props.classes.item}>
          My professional career in IT can be viewed on&nbsp;<a href="https://www.linkedin.com/in/garthwhitaker">
            LinkedIn
          </a>.
        </Grid>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(Content);
