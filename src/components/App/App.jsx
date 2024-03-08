import { Suspense, lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { refreshUser } from '../../redux/auth/authOperations';
import { PrivateRoute, PublicRoute } from 'routes';
import SharedLayout from 'layouts/SharedLayout';
import Loader from 'components/Loader';

const WelcomePage = lazy(() => import('pages/WelcomePage'));
const AuthPage = lazy(() => import('pages/AuthPage'));
const HomePage = lazy(() => import('pages/HomePage'));
const ScreensPage = lazy(() => import('pages/ScreensPage'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage'));

const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  // useEffect(() => {
  //   isLoggedIn && dispatch(refreshUser());
  // }, [dispatch, isLoggedIn]);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <>
      <Toaster position="top-center" />

      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route
            path="/auth/:id"
            element={
              <PublicRoute component={<AuthPage />} redirectTo="/home" />
            }
          />
          <Route path="/home" element={<SharedLayout />}>
            <Route
              index
              element={
                <PrivateRoute
                  component={<HomePage />}
                  redirectTo={'/auth/login'}
                />
              }
            />
            <Route
              path=":boardId"
              element={
                <PrivateRoute
                  component={<ScreensPage />}
                  redirectTo={'/auth/login'}
                />
              }
            />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
