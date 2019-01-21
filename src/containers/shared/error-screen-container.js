// libs
import React, { Component } from 'react';
import { connect } from 'react-redux';

// material-ui
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

// actions

// components
import CenteredContent from 'components/shared/centered-content';

// helpers

// layouts
import MainLayout from 'layouts/main';

// selectors
import { selectErrors } from 'modules/movies/selectors';

class EmptySearchQuery extends Component {
  componentDidMount() {}

  render() {
    const { children } = this.props;

    return (
      <MainLayout>
        <CenteredContent xs={8} sm={6} md={4}>
          <img
            style={{ width: '100%' }}
            src='https://media.giphy.com/media/Jq7y34Hgfy01y/giphy.gif'
          />
          <Typography align='center' variant='h5'>
            Error
          </Typography>
          <Typography align='center' variant='caption'>
            An unknown error has occured.
          </Typography>
          <CenteredContent>
            <Button
              color='secondary'
              href='/movies?page=1&query=warren%20miller'
              variant='outlined'
            >
              Please Try Again
            </Button>
          </CenteredContent>
        </CenteredContent>
      </MainLayout>
    );
  }
}

export default connect((state, props) => {
  const errors = selectErrors(state);

  return {
    errors,
  };
})(EmptySearchQuery);
