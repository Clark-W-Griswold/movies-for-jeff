// libs
import React, { Component } from 'react';
import { connect } from 'react-redux';

// material-ui
import LinearProgress from '@material-ui/core/LinearProgress';

// actions

// components

// helpers

// selectors
import { selectLoading } from 'modules/ui/selectors';

class MyComponent extends Component {
  componentDidMount() {}

  render() {
    const { loading } = this.props;
    if (!loading || loading?.size === 0) return null;

    return <LinearProgress />;
  }
}

export default connect((state, props) => {
  const loading = selectLoading(state);

  return {
    loading,
  };
})(MyComponent);
