import GlobalStyles from 'assets/styles/GlobalStyles';
import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import GlobalStyles from 'assets/styles';
import { PrivateRoute, PublicRoute } from 'routes';
import SharedLayout from 'layouts/SharedLayout';

const WelcomePage = lazy(() => import('pages'));
const AuthPage = lazy(() => import('pages'));
const HomePage = lazy(() => import('pages'));
const ScreensPage = lazy(() => import('pages'));
const NotFoundPage = lazy(() => import('pages'));

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Toaster position="top-center" />

      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route
          path="auth/:id"
          element={<PublicRoute component={<AuthPage />} redirectTo="/home" />}
        />

        <Route path="/" element={<SharedLayout />}>
          <Route
            path="/home"
            element={
              <PrivateRoute component={<HomePage />} redirectTo={'/auth'} />
            }
          />
          <Route
            path="/home/:boardId"
            element={
              <PrivateRoute component={<ScreensPage />} redirectTo={'/auth'} />
            }
          />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default App;
