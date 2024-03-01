import { MainContainer } from 'components/App/App.styled';
import { BoardCreateModal } from 'components/Modals/BoardsModals/BoardCreateModal';

const HomePage = () => {
  return (
    <MainContainer>
      MainPage
      <BoardCreateModal />
    </MainContainer>
  );
};

export default HomePage;
