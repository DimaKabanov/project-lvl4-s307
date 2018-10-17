import React from 'react';
import faker from 'faker';
import cookies from 'js-cookie';

faker.locale = 'ru';

const currentUserName = cookies.get('username');
const userName = currentUserName || faker.name.findName();

if (!currentUserName) {
  cookies.set('username', userName);
}

export const user = {
  currentUser: {
    name: userName,
  },
};
export const UserContext = React.createContext();
