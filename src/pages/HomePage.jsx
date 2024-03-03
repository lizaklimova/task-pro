import { MainContainer } from 'components/App/App.styled';
import DevModal from 'components/Modals/DevModal';
import AddingCardModal from 'components/TaskCard/AddingCardModal/AddingCardModal';

const HomePage = () => {
  return (
    <MainContainer>
      <AddingCardModal />
      <DevModal />
    </MainContainer>
  );
};

export default HomePage;
