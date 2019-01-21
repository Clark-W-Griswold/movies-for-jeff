// libs
import React from 'react';

// material-ui
import { withStyles } from '@material-ui/core';
import TableRow from '@material-ui/core/TableRow';

const styles = theme => ({});

const TableRowComponent = props => {
  const { children } = props;

  return <TableRow>{children}</TableRow>;
};

export default withStyles(styles)(TableRowComponent);
