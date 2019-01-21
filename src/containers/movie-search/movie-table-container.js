// libs
import React, { Component } from 'react';
import { connect } from 'react-redux';

// components
import AvatarCell from 'components/table/avatar-cell';
import Paper from 'components/shared/paper';
import Table from 'components/table/table';
import TableBody from 'components/table/table-body';
import TableCell from 'components/table/table-cell';
import TableHead from 'components/table/table-head';
import TableRow from 'components/table/table-row';

// containers
import MoviePagination from 'containers/movie-search/movie-pagination';

// selectors
import { selectMoviesList } from 'modules/movies/selectors';

class MovieSearchContainer extends Component {
  render() {
    const { movieList } = this.props;

    return (
      <>
        <Paper>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Title</TableCell>
                <TableCell>Release Date</TableCell>
                <TableCell>Summary</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {movieList?.map(item => (
                <TableRow key={item?.get('id')}>
                  <AvatarCell
                    backdrop={item?.get('backdrop_path')}
                    poster={item?.get('poster_path')}
                  >
                    {item?.get('title')}
                  </AvatarCell>
                  <TableCell nowrap>{item?.get('release_date')}</TableCell>
                  <TableCell>
                    <p>{item?.get('overview')}</p>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
        <MoviePagination />
      </>
    );
  }
}

export default connect((state, props) => {
  const movieList = selectMoviesList(state);

  return {
    movieList,
  };
})(MovieSearchContainer);
