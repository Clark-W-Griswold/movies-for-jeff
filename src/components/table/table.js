// libs
import React, { Fragment } from 'react';

// material-ui
import { withStyles } from '@material-ui/core';
import Table from '@material-ui/core/Table';

const styles = theme => ({
  table: {
    tableLayout: 'fixed',
    width: 'auto',
    minWidth: 600,
  },
});

const TableComponent = props => {
  const { children, classes } = props;

  return <Table className={classes.table}>{children}</Table>;
};

export default withStyles(styles)(TableComponent);
