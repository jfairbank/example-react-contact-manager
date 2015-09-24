import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import createHistory from 'history/lib/createBrowserHistory';
import provision from './util/provision';
import routes from './routes';

const history = createHistory();

ReactDOM.render(
  provision(
    <Router history={history}>
      {routes}
    </Router>
  ),
  document.getElementById('main')
);
