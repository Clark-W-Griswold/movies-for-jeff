// libs
import React, { Component } from 'react';

// material-ui
import { withStyles } from '@material-ui/core';

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    margin: 8,
  },
});

const MainLayout = props => {
  const { children, classes } = props;

  return <div className={classes.root}>{children}</div>;
};

export default withStyles(styles)(MainLayout);
