// libs
import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Redirect, Route, Switch } from 'react-router';
import { ConnectedRouter } from 'connected-react-router/immutable';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import * as Sentry from '@sentry/browser';

Sentry.init({
  dsn: 'https://32fee1dcd5f0421a909faf46ae844947@sentry.io/1374972',
});

// material-ui
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

// containers
import ErrorScreenContainer from 'containers/shared/error-screen-container';
import MovieSearchContainer from 'containers/movie-search/movie-search-container';

// helpers
import { ErrorHandlerComponent } from 'helpers/error-handler';

// store
import store, { history } from 'modules/store';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#55555e' },
    secondary: { main: '#f47721' },
  },
  typography: {
    useNextVariants: true,
  },
});

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <BrowserRouter>
      <Provider store={store}>
        <ErrorHandlerComponent>
          <ConnectedRouter history={history}>
            <>
              <Switch>
                <Route path='/movies' exact component={MovieSearchContainer} />
                <Route path='/error' exact component={ErrorScreenContainer} />
                <Redirect
                  exact
                  from='*'
                  to='/movies?page=1&query=warren%20miller'
                />
              </Switch>
            </>
          </ConnectedRouter>
        </ErrorHandlerComponent>
      </Provider>
    </BrowserRouter>
  </MuiThemeProvider>,
  document.getElementById('root')
);
