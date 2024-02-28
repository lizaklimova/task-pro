import { Toaster } from 'react-hot-toast';
import GlobalStyles from 'assets/styles';
// import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { PrivateRoute, PublicRoute } from 'routes';
import { WelcomePage, AuthPage, HomePage, ScreensPage } from 'pages';

// const WelcomePage = lazy(() => import('pages'));
// const AuthPage = lazy(() => import('pages'));
// const HomePage = lazy(() => import('pages'));
// const ScreensPage = lazy(() => import('pages'));

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Toaster position="top-center" />
      <Routes>
        <Route
          path="/"
          element={
            <PublicRoute component={<WelcomePage />} redirectTo="/home" />
          }
        />
        <Route
          path="auth/:id"
          element={<PublicRoute component={<AuthPage />} redirectTo="/home" />}
        />
        <Route
          path="/home"
          element={<PrivateRoute component={<HomePage />} redirectTo={'/'} />}
        >
          <Route
            path="/home/:boardId"
            element={
              <PrivateRoute component={<ScreensPage />} redirectTo={'/auth'} />
            }
          />
        </Route>
      </Routes>
    </>
  );
};

export default App;
