import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/application.css';
import faker from 'faker';
import cookies from 'js-cookie';

// import io from 'socket.io-client';
import app from './index.jsx';

faker.locale = 'ru';
const currentUserName = cookies.get('username');
const userName = currentUserName || faker.name.findName();

if (!currentUserName) {
  cookies.set('username', userName);
}

if (process.env.NODE_ENV !== 'production') {
  localStorage.debug = 'chat:*';
}
