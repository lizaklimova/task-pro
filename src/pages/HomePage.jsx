import { Navigate } from 'react-router-dom';
import { MainContainer } from 'components/App/App.styled';
import BeforeStart from 'components/Dashboard/BeforeStart';
import { useSelector } from 'react-redux';
import { selectBoards } from '../redux/board/boardSelectors';

const HomePage = () => {
  const currentBoard = useSelector(selectBoards);

  console.log(currentBoard);
  return (
    <MainContainer>
      {!currentBoard.length ? (
        <BeforeStart />
      ) : (
        <Navigate to={`/home/${currentBoard[0].board._id}`} />
      )}
    </MainContainer>
  );
};

export default HomePage;
