import gon from 'gon';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers';

/* eslint-disable no-underscore-dangle */
const reduxDevtools = window.__REDUX_DEVTOOLS_EXTENSION__;
/* eslint-enable */

export default createStore(
  reducers,
  gon,
  compose(
    applyMiddleware(thunk),
    reduxDevtools && reduxDevtools(),
  ),
);
