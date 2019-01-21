// libs
import React from 'react';

// material-ui
import { withStyles } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';

// components
import TableCell from 'components/table/table-cell';

const themoviedb = window?._config_?.themoviedb;
const imageBasePath = themoviedb?.imageBasePath || '';
const backdropSizes = themoviedb?.backdrop_sizes || ['w300'];
const posterSizes = themoviedb?.poster_sizes || ['w92'];
const BASE_PATH = `${imageBasePath}`;

const DEFAULT_IMAGE =
  'https://movies4maniacs.liberty.me/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg';

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    margin: 10,
    width: 60,
    height: 60,
  },
});

const TableCellComponent = props => {
  const { backdrop, children, classes, nowrap, poster } = props;

  const posterUrl = poster
    ? `${BASE_PATH}${posterSizes[0]}/${poster}`
    : DEFAULT_IMAGE;

  return (
    <TableCell nowrap={nowrap}>
      <div className={classes.root}>
        <Avatar alt='Remy Sharp' src={posterUrl} className={classes.avatar} />
        {children}
      </div>
    </TableCell>
  );
};

export default withStyles(styles)(TableCellComponent);
