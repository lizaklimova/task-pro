import { Toaster } from 'react-hot-toast';
import GlobalStyles from 'assets/styles';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Toaster position="top-center" />
      <div>Task Pro / Dream Team</div>
    </>
  );
};

export default App;
