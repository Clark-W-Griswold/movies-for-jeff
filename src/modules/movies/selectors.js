// libs
import querystring from 'query-string';
// import Immutable from 'immutable';

export const selectMoviesList = state => state.getIn(['movies', 'list']);

export const selectPage = (state, payload) => {
  if (payload?.page) return payload.page;

  const params = querystring.parse(
    state?.getIn(['router', 'location', 'search'])
  );

  return params?.page || 1;
};
export const selectSearchQuery = (state, payload) => {
  if (payload?.query || payload?.query === '') return payload.query;

  const params = querystring.parse(
    state?.getIn(['router', 'location', 'search'])
  );

  return params?.query || '';
};
export const selectTotalResults = state =>
  state?.getIn(['movies', 'totals', 'total_results']);

export const selectErrors = state => {
  state?.getIn(['movies', 'errors']);
};
