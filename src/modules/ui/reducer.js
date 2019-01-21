// libs
import { handleActions } from 'redux-actions';
import Immutable from 'immutable';

// actions
import * as Actions from './actions';

const InitialState = Immutable.Map({
  loading: Immutable.List(),
});

const reducer = handleActions(
  {
    [Actions.LOAD_START]: (state, action) => {
      const loading = state.get('loading');
      return state.setIn(['loading'], loading.push(action.payload));
    },
    [Actions.LOAD_END]: (state, action) => {
      const loading = state.get('loading');
      return state.setIn(
        ['loading'],
        loading.delete(loading.indexOf(action.payload))
      );
    },
    [Actions.LOAD_CLEAR]: (state, action) =>
      state.setIn(['loading'], Immutable.List()),
  },
  InitialState
);

export default reducer;
