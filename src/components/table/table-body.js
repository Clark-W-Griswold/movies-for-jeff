// libs
import React from 'react';

// material-ui
import { withStyles } from '@material-ui/core';
import TableBody from '@material-ui/core/TableBody';

const styles = theme => ({});

const TableBodyComponent = props => {
  const { children } = props;

  return <TableBody>{children}</TableBody>;
};

export default withStyles(styles)(TableBodyComponent);
