// libs
import React, { Component } from 'react';
import * as Sentry from '@sentry/browser';

// containers
import ErrorScreenContainer from 'containers/shared/error-screen-container';

export const ErrorHandler = error => {
  Sentry.captureException(new Error(`${error?.error?.message}`));
};

export class ErrorHandlerComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { error: {}, hasError: false };
  }

  componentDidCatch(error, errorInfo) {
    Sentry.captureException(error, {
      extra: errorInfo,
    });
  }

  static getDerivedStateFromError(error) {
    return { error, hasError: true };
  }

  render() {
    const { children } = this.props;
    const { hasError } = this.state;

    if (hasError) {
      return <ErrorScreenContainer />;
    }

    return children;
  }
}
