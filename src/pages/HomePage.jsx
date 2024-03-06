import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectBoards } from '../redux/board/boardSelectors';
import { getAllBoards } from '../redux/board/boardOperations';
import { MainContainer } from 'components/App/App.styled';
import BeforeStart from 'components/Dashboard/BeforeStart';

const HomePage = () => {
  const allBoards = useSelector(selectBoards);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllBoards());
  }, [dispatch]);

  return (
    <MainContainer>
      {allBoards.length > 0 ? (
        <Navigate to={`/home/${allBoards[0]._id}`} />
      ) : (
        <BeforeStart />
      )}
    </MainContainer>
  );
};

export default HomePage;
