// libs
import React from 'react';

// material-ui
import { withStyles } from '@material-ui/core';
import { fade } from '@material-ui/core/styles/colorManipulator';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';

const styles = theme => ({
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    borderBottom: '1px solid #222',
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 4,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
});

const InputComponent = props => {
  const {
    autoFocus,
    classes,
    handleOnChange,
    placeholder = '...',
    value,
  } = props;

  return (
    <InputBase
      autoFocus={autoFocus}
      placeholder={placeholder}
      onChange={handleOnChange}
      classes={{
        root: classes.inputRoot,
        input: classes.inputInput,
      }}
      defaultValue={value}
    />
  );
};

export default withStyles(styles)(InputComponent);
