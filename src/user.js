import faker from 'faker';
import cookies from 'js-cookie';

faker.locale = 'ru';

export const getUserName = () => cookies.get('username');

export const setUserName = () => {
  const currentUserName = getUserName();
  const userName = currentUserName || faker.name.findName();

  if (!currentUserName) {
    cookies.set('username', userName);
  }
};
