import path from 'path';
import { template } from 'lodash';
import express from 'express';
import React from 'react';
import createLocation from 'history/lib/createLocation'
import { renderToString } from 'react-dom/server'
import { Route, RoutingContext, match } from 'react-router'
import routes from './routes'
import provision from './util/provision';

const HOST = '0.0.0.0';
const PORT = 3000;

const app = express();

app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(express.static('public'));

app.use((req, res) => {
  const location = createLocation(req.url);

  match({ routes, location }, (error, redirectLocation, renderProps) => {
    const pageContent = renderToString(
      provision(
        <RoutingContext {...renderProps}/>
      )
    );

    res.render('index', {
      pageContent,
      pageTitle: 'Contact Manager'
    });
  });
});

app.listen(PORT, HOST, () => {
  console.log(`Server listening at http://${HOST}:${PORT}`);
});
