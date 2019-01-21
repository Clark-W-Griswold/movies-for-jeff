// libs
import React from 'react';

// material-ui
import { withStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit,
    overflow: 'auto',
    flexGrow: 1,
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {},
  },
});

const CenteredContent = props => {
  const { children, classes, xs, sm, md } = props;

  return (
    <Grid container className={classes.root} spacing={16} justify='center'>
      <Grid item xs={xs} sm={sm} md={md}>
        {children}
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(CenteredContent);
