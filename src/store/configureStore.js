import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';
import routes from '../routes';

export default function configureStore(initialState) {
  return createStore(rootReducer, initialState);
}
