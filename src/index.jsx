import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import ChatContainer from './containers/Chat';
import store from './store';

const dom = (
  <Provider store={store}>
    <ChatContainer />
  </Provider>
);

ReactDOM.render(
  dom,
  document.getElementById('chat'),
);
