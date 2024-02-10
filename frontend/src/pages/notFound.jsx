import { Link } from 'react-router-dom';
import routes from '../routes';

function NotFoundScreen() {
  return (
    <>
      <p>Страница не найдена</p>
      <p>
        Но вы можете перейти на <Link to={routes.root}>главную страницу</Link>
      </p>
    </>
  );
}

export default NotFoundScreen;
