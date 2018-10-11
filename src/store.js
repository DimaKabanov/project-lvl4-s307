import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers';

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* eslint-enable */

export default gon => (
  createStore(
    reducers,
    gon,
    composeEnhancers(
      applyMiddleware(thunk),
    ),
  )
);
