import { createStore } from 'redux';

import reducers from '../reducers';
import enhancer from './enhancer';

var currentStore;

export function configureStore(initialState) {
  const store = createStore(
      reducers,
      enhancer,
      initialState
  );
  currentStore = store;
  return store;
}

export function dispatch () {
  return currentStore.dispatch.apply(currentStore, arguments);
}

export function getCurrentState () {
  return currentStore.getState();
}
