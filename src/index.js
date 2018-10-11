import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/application.css';
import gon from 'gon';
import app from './app';
import { setUserName } from './user';
import { getNewMessage } from './actions';

setUserName();

if (process.env.NODE_ENV !== 'production') {
  localStorage.debug = 'chat:*';
}

const store = app(gon);

store.dispatch(getNewMessage());
