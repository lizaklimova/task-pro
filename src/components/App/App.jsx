import { Toaster } from 'react-hot-toast';
import GlobalStyles from 'assets/styles';
import MainPage from 'pages/MainPage';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Toaster position="top-center" />
<<<<<<< Updated upstream
      <MainPage />
=======

      <ul>
        <li>
          <Link to="/">Welcome</Link>
        </li>
        <li>
          <Link to="/auth">Auth</Link>
        </li>
        <li>
          <Link to="/home">Home</Link>
        </li>
      </ul>

      <Suspense fallback="Loading">
        <Routes>
          <Route path="/home" element={<SharedLayout />}>
            <Route
              index
              // element={
              //   <PrivateRoute component={<HomePage />} redirectTo={'/auth'} />
              // }
              element={<HomePage />}
            />
            <Route
              path=":boardId"
              // element={
              //   <PrivateRoute
              //     component={<ScreensPage />}
              //     redirectTo={'/auth'}
              //   />
              // }
              element={<ScreensPage />}
            />
          </Route>

          <Route path="/" element={<WelcomePage />} />
          <Route
            path="auth/:id"
            element={
              <PublicRoute component={<AuthPage />} redirectTo="/home" />
            }
          />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
>>>>>>> Stashed changes
    </>
  );
};

export default App;
