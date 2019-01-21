// libs
import React, { Component } from 'react';
import { connect } from 'react-redux';

// material-ui
import TablePagination from '@material-ui/core/TablePagination';

// actions
import * as MOVIES from 'modules/movies/actions';

// helpers
import buildAction from 'helpers/build-action';

// selectors
import { selectPage, selectTotalResults } from 'modules/movies/selectors';

class MoviePaginationContainer extends Component {
  handleChangePage = (e, page) => {
    const { dispatch } = this.props;
    dispatch(buildAction(MOVIES.CHANGE_PAGE, page + 1));
  };

  render() {
    const { page = 0, totalResults = 0 } = this.props;

    if (totalResults === 0) return null;

    return (
      <TablePagination
        component='div'
        onChangePage={this.handleChangePage}
        count={totalResults}
        page={page - 1}
        rowsPerPage={20}
        rowsPerPageOptions={[]}
      />
    );
  }
}

export default connect((state, props) => {
  const page = selectPage(state);
  const totalResults = selectTotalResults(state);

  return {
    page,
    totalResults,
  };
})(MoviePaginationContainer);
