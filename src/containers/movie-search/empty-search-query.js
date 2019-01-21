// libs
import React, { Component } from 'react';
import { connect } from 'react-redux';

// material-ui
import Typography from '@material-ui/core/Typography';

// actions

// components
import CenteredContent from 'components/shared/centered-content';

// helpers

// selectors

class EmptySearchQuery extends Component {
  componentDidMount() {}

  render() {
    const { children } = this.props;

    return (
      <CenteredContent>
        <img
          style={{ width: '100%' }}
          src='https://media.giphy.com/media/NF0cxxxH4VTlS/giphy.gif'
        />
        <Typography align='center' variant='h5'>
          hello :)
        </Typography>
        <Typography align='center' variant='caption'>
          Ralph waits to fetch movies..
        </Typography>
      </CenteredContent>
    );
  }
}

export default connect((state, props) => {
  return {};
})(EmptySearchQuery);
