// libs
import React from 'react';

// material-ui
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { withStyles } from '@material-ui/core/styles';

// containers
import Loading from 'containers/shared/loading';

const styles = theme => ({
  root: {
    flexGrow: 0,
    position: 'relative',
  },
  toolBar: {
    justifyContent: 'space-between',
  },
  loading: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    zIndex: '99999',
  },
  appBar: {
    color: theme.palette.common.white,
  },
});

const AppBarComponent = props => {
  const { children, classes, loading } = props;

  return (
    <div className={classes.root}>
      <AppBar position='static' color='secondary' className={classes.appBar}>
        <Toolbar className={classes.toolBar}>{children}</Toolbar>
        <div className={classes.loading}>
          <Loading />
        </div>
      </AppBar>
    </div>
  );
};

export default withStyles(styles)(AppBarComponent);
