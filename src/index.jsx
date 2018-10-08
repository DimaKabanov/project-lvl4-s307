import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Chat from './components/Chat';
import store from './store';

const dom = (
  <Provider store={store}>
    <Chat />
  </Provider>
);

ReactDOM.render(
  dom,
  document.getElementById('chat'),
);
