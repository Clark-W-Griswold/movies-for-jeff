// libs
import { applyMiddleware, compose, createStore } from 'redux';
import { combineReducers } from 'redux-immutable';
import {
  connectRouter,
  routerMiddleware,
} from 'connected-react-router/immutable';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import { createBrowserHistory } from 'history';
import Immutable from 'immutable';

// modules
import * as MOVIES from 'modules/movies';
import * as UI from 'modules/ui';

const { NODE_ENV } = process.env;

// create createLogger
const logger = createLogger({
  collapsed: true,
  duration: true,
  diff: true,
});

export const history = createBrowserHistory();

// create the saga middlewarez
const sagaMiddleware = createSagaMiddleware();
const routeMiddleware = routerMiddleware(history);
const middleware = [sagaMiddleware, routeMiddleware];

const store = createStore(
  combineReducers({
    movies: MOVIES.reducer,
    router: connectRouter(history),
    ui: UI.reducer,
  }),
  Immutable.Map(),
  NODE_ENV === 'development'
    ? compose(applyMiddleware(...middleware, logger))
    : compose(applyMiddleware(...middleware))
);

// then run the saga
sagaMiddleware.run(MOVIES.sagas);
sagaMiddleware.run(UI.sagas);

export default store;
