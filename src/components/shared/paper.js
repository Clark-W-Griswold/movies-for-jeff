// libs
import React from 'react';

// material-ui
import { withStyles } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';

const styles = theme => ({
  root: {
    width: '100%',
    flexGrow: 0,
    marginTop: theme.spacing.unit * 3,
    overflow: 'auto',
  },
});

const TableComponent = props => {
  const { children, classes } = props;

  return <Paper className={classes.root}>{children}</Paper>;
};

export default withStyles(styles)(TableComponent);
