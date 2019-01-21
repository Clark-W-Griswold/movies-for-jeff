// libs
import React, { Component } from 'react';
import { connect } from 'react-redux';

// material-ui
import Typography from '@material-ui/core/Typography';

// actions
import * as MOVIES from 'modules/movies/actions';

// components
import AppBarComponent from 'components/app-bar';

// containers
import EmptySearchQuery from 'containers/movie-search/empty-search-query';
import MovieTableContainer from 'containers/movie-search/movie-table-container';
import SearchBoxContainer from 'containers/movie-search/search-box-container';

// helpers
import buildAction from 'helpers/build-action';

// layouts
import MainLayout from 'layouts/main';

// selectors
import { selectPage, selectSearchQuery } from 'modules/movies/selectors';

class MovieSearchContainer extends Component {
  componentDidMount() {
    const { dispatch, page, query } = this.props;
    dispatch(
      buildAction(MOVIES.GET_MOVIE_LIST, {
        page,
        query,
      })
    );
  }

  render() {
    const { query } = this.props;

    const MainContent = !query ? EmptySearchQuery : MovieTableContainer;

    return (
      <MainLayout>
        <AppBarComponent>
          <Typography variant='h6' color='inherit'>
            Movies for Jeff!!1
          </Typography>
          <SearchBoxContainer />
        </AppBarComponent>
        <MainContent />
      </MainLayout>
    );
  }
}

export default connect((state, props) => {
  const page = selectPage(state);
  const query = selectSearchQuery(state);

  return {
    page,
    query,
  };
})(MovieSearchContainer);
