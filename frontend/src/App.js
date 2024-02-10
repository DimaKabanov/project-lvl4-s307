import { Route, BrowserRouter, Routes } from 'react-router-dom';
import routes from './routes';

import MainScreen from './pages/main';
import LoginScreen from './pages/login';
import NotFoundScreen from './pages/notFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.root} element={<MainScreen />} />
        <Route path={routes.login} element={<LoginScreen />} />
        <Route path="*" element={<NotFoundScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
