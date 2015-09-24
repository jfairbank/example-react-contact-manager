import React from 'react';
import { Provider } from 'react-redux';
import configureStore from '../store/configureStore';

export default function provision(children) {
  const store = configureStore();

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
}
