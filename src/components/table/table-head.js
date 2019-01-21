// libs
import React from 'react';

// material-ui
import { withStyles } from '@material-ui/core';
import TableHead from '@material-ui/core/TableHead';

const styles = theme => ({
  sticky: {
    '& th': {
      backgroundColor: theme.palette.common.white,
      position: 'sticky',
      top: 0,
      zIndex: 1,
      boxShadow: 'inset 0 -1px 0 #e0e0e0',
      borderBottom: 0,
    },
  },
});

const TableHeadComponent = props => {
  const { children, classes } = props;

  return <TableHead className={classes.sticky}>{children}</TableHead>;
};

export default withStyles(styles)(TableHeadComponent);
