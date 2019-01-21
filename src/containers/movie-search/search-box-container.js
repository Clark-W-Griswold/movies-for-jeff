// libs
import React, { Component } from 'react';
import { connect } from 'react-redux';

// actions
import * as MOVIES from 'modules/movies/actions';

// components
import SearchBox from 'components/shared/search-box';

// helpers
import buildAction from 'helpers/build-action';

// selectors
import { selectSearchQuery } from 'modules/movies/selectors';

class SearchBoxContainer extends Component {
  componentDidMount() {}

  handleOnChange = e => {
    const { dispatch } = this.props;

    dispatch(buildAction(MOVIES.SEARCH_MOVIES, e.target.value));
  };

  render() {
    const { searchQuery } = this.props;

    return (
      <SearchBox handleOnChange={this.handleOnChange} value={searchQuery} />
    );
  }
}

export default connect(state => {
  const searchQuery = selectSearchQuery(state);

  return {
    searchQuery,
  };
})(SearchBoxContainer);
