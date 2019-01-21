// libs
import {
  all,
  call,
  put,
  select,
  takeLatest,
  throttle,
} from 'redux-saga/effects';
import Immutable from 'immutable';
import querystring from 'query-string';
import { push, replace } from 'connected-react-router/immutable';

// actions
import * as MOVIES from 'modules/movies/actions';
import * as UI from 'modules/ui/actions';

// helpers
import buildAction from 'helpers/build-action';
import fetchClient from 'helpers/fetch-client';

// services
import serviceMappings from 'modules/services/service-mappings';

// selectors
import { selectPage, selectSearchQuery } from 'modules/movies/selectors';

function* getMovieList({ payload = {} }) {
  yield put(buildAction(UI.LOAD_START, MOVIES.GET_MOVIE_LIST));

  const page = yield select(state => selectPage(state, payload));
  const query = yield select(state => selectSearchQuery(state, payload));

  const params = Immutable.merge(
    {
      page: page || 1,
      query: query || '',
    },
    payload
  );

  yield put(
    replace({
      search: querystring.stringify({
        page: params?.page,
        query: params?.query,
      }),
    })
  );

  // do not send if no query.
  // bad things happen. :(
  // or we could handle it propery on the ui with validation.. :D
  if (params?.query?.length > 0) {
    const mappings = serviceMappings('get_movies_list', params);
    const response = yield call(fetchClient, mappings);

    const { error, page, results, total_pages, total_results } = response;

    if (error) return yield put(buildAction(MOVIES.HANDLE_ERROR, error));

    yield put(buildAction(MOVIES.SET_MOVIE_LIST, results));
    yield put(
      buildAction(MOVIES.SET_MOVIE_LIST_TOTALS, {
        total_pages,
        total_results,
      })
    );
  } else {
    yield put(buildAction(MOVIES.SET_MOVIE_LIST, []));
    yield put(
      buildAction(MOVIES.SET_MOVIE_LIST_TOTALS, {
        total_pages: 0,
        total_results: 0,
      })
    );
  }

  yield put(buildAction(UI.LOAD_END, MOVIES.GET_MOVIE_LIST));
}

function* handleError({ payload }) {
  yield put(
    buildAction(MOVIES.SET_ERROR, {
      movies: payload,
    })
  );
  yield put(push(`/error`));
}

function* searchMovies({ payload }) {
  const page = yield select(state => selectPage(state, payload));

  yield put(
    buildAction(MOVIES.GET_MOVIE_LIST, {
      query: payload,
      page,
    })
  );
}

function* changePage({ payload }) {
  const query = yield select(state => selectSearchQuery(state, payload));

  yield put(
    buildAction(MOVIES.GET_MOVIE_LIST, {
      query,
      page: payload,
    })
  );
}

export default function* watchAll() {
  yield all([
    takeLatest(MOVIES.GET_MOVIE_LIST, getMovieList),
    takeLatest(MOVIES.HANDLE_ERROR, handleError),
    // cheap debounce. update later for more nicer
    throttle(1000, MOVIES.SEARCH_MOVIES, searchMovies),
    takeLatest(MOVIES.CHANGE_PAGE, changePage),
  ]);
}
