import { Toaster } from 'react-hot-toast';
import GlobalStyles from 'assets/styles';
import MainPage from 'pages/MainPage';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Toaster position="top-center" />
      <MainPage />
    </>
  );
};

export default App;
