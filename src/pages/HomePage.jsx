import { MainContainer } from 'components/App/App.styled';
import AddingCardModal from 'components/TaskCard/AddingCardModal/AddingCardModal';

const HomePage = () => {
  return (
    <MainContainer>
      <AddingCardModal />
    </MainContainer>
  );
};

export default HomePage;
