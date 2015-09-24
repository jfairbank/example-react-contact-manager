import React from 'react';
import { Route } from 'react-router';
import App from './components/App';
import ContactManager from './components/ContactManager';
import ContactDetail from './components/ContactDetail';

export default [
  <Route path="/" component={App}>
    <Route path="contacts" component={ContactManager}/>
    <Route path="contact/:contactId" component={ContactDetail}/>
  </Route>
];
