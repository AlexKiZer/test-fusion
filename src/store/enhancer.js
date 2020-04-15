import { applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';

const composeEnhancers = process.env.NODE_ENV !== 'production'
&& typeof window === 'object'
&& window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose;

const middleware = [
  thunkMiddleware,
];

export default composeEnhancers(applyMiddleware(...middleware));
