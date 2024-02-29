import { MainContainer } from 'components/App/App.styled';
import { BoardModal } from 'components/Modals/BoardsModals/BoardModal';

const HomePage = () => {
  return (
    <MainContainer>
      MainPage
      <BoardModal />
    </MainContainer>
  );
};

export default HomePage;
