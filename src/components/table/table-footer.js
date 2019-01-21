// libs
import React from 'react';

// material-ui
import { withStyles } from '@material-ui/core';
import TableFooter from '@material-ui/core/TableFooter';

const styles = theme => ({});

const TableFooterComponent = props => {
  const { children } = props;

  return <TableFooter>{children}</TableFooter>;
};

export default withStyles(styles)(TableFooterComponent);
