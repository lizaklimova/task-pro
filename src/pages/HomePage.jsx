import { Navigate } from 'react-router-dom';
import { MainContainer } from 'components/App/App.styled';
import BeforeStart from 'components/Dashboard/BeforeStart';
import { useSelector } from 'react-redux';
import { selectBoards } from '../redux/board/boardSelectors';

const HomePage = () => {
  const allBoards = useSelector(selectBoards);

  console.log(currentBoard);
  return (
    <MainContainer>
      {!allBoards.length ? (
        <BeforeStart />
      ) : (
        <Navigate to={`/home/${allBoards[0].board._id}`} />
      )}
    </MainContainer>
  );
};

export default HomePage;
