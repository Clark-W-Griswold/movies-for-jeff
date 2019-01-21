// libs
import { handleActions } from 'redux-actions';
import Immutable from 'immutable';

// actions
import * as Actions from './actions';

const InitialState = Immutable.Map({
  errors: Immutable.Map(),
  list: Immutable.List(),
  findBy: Immutable.Map({
    // static defaults
    include_adult: false,
    language: 'en',
    locale: 'us',
  }),
  totals: Immutable.Map(),
});

const reducer = handleActions(
  {
    [Actions.SET_MOVIE_LIST]: (state, action) =>
      state.setIn(['list'], Immutable.fromJS(action.payload)),
    [Actions.SET_MOVIE_LIST_TOTALS]: (state, action) =>
      state.setIn(['totals'], Immutable.Map(action.payload)),
    [Actions.SET_MOVIE_LIST_FINDBY]: (state, action) =>
      state.setIn(['findBy'], action.payload),
    [Actions.SET_ERROR]: (state, action) =>
      state.setIn(['errors'], Immutable.Map(action.payload)),
  },
  InitialState
);

export default reducer;
