// libs
import React from 'react';

// material-ui
import { withStyles } from '@material-ui/core';
import { fade } from '@material-ui/core/styles/colorManipulator';
import SearchIcon from '@material-ui/icons/Search';

// components
import InputComponent from 'components/shared/input';

const styles = theme => ({
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginRight: theme.spacing.unit * 2,
      marginLeft: theme.spacing.unit * 3,
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 4,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const SearchBox = props => {
  const { classes, handleOnChange, value } = props;

  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <InputComponent
        autoFocus
        placeholder='Search…'
        handleOnChange={handleOnChange}
        value={value}
      />
    </div>
  );
};

export default withStyles(styles)(SearchBox);
