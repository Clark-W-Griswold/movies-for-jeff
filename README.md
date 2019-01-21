# MOVIES FOR JEFF!!1
## Getting started

This repository uses nvm to manage node versions. If you do not have nvm installed, you can install nvm here: 
https://github.com/creationix/nvm

Once you have nvm installed, we can get started. Open terminal:
```
git clone git@github.com:Clark-W-Griswold/movies-for-jeff.git

cd movies-for-jeff

make init
make deps
```

Repo has been initialized and dependencies installed. We are now ready to run our app. We can bundle the frontend with development in mind `make dev` or production `make prod`.

To serve these files locally, we have a local node webserver to serve the bundle. In a new terminal window, run `make server`. 


# DEVELOPMENT

## helpers
This repository uses Immutable.js. This chrome extension comes in handy for inspecting things in the console:
https://chrome.google.com/webstore/detail/immutablejs-object-format/hgldghadipiblonfkkicmgcbbijnpeog?hl=en

## Style
This repository uses the Material-ui library. Documentation and examples can be found here:
https://material-ui.com/

## component example
```
// libs
import React from 'react';

// material-ui
import { withStyles } from '@material-ui/core';

const styles = theme => ({});

const MyComponent = props => {
  const { children } = props;

  return (
    <div>
      { children }
    </div>
  );
}

export default withStyles(styles)(MyComponent);
```

## container example
```
// libs
import React, { Component } from 'react';
import { connect } from 'react-redux';

// actions

// components

// helpers

// selectors

class MyContainer extends Component {
  componentDidMount() {
  }

  render() {
    const { children } = this.props;

    return (
      <div>
        { children }
      </div>
    );
  }
}

export default connect((state, props) => {
  return {
  };
})(MyContainer);
```
