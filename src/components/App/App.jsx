import { Toaster } from 'react-hot-toast';
import GlobalStyles from 'assets/styles';
import ShownModal from 'components/Modals/ShownModal';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Toaster position="top-center" />
      <div>Task Pro / Dream Team</div>
      <ShownModal />
    </>
  );
};

export default App;
