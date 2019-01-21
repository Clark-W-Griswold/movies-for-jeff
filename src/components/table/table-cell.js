// libs
import React from 'react';

// material-ui
import { withStyles } from '@material-ui/core';
import TableCell from '@material-ui/core/TableCell';

const styles = theme => ({
  tableCell: {
    // padding: '4px 36px 4px 14px',
  },
  tableCellNowrap: {
    whiteSpace: 'nowrap',
  },
});

const TableCellComponent = props => {
  const { children, classes, nowrap } = props;

  const tableCellClasses = `${classes.tableCell} ${
    nowrap ? classes.tableCellNowrap : ''
  }`;

  return <TableCell className={tableCellClasses}>{children}</TableCell>;
};

export default withStyles(styles)(TableCellComponent);
