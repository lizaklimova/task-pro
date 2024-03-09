import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getOneBoard } from '../redux/board/boardOperations';
import { selectOneBoard } from '../redux/board/boardSelectors';
import { MainContainer } from 'components/App/App.styled';
import Dashboard from 'components/Dashboard';
import BoardHeader from 'components/Dashboard/BoardHeader';

const ScreensPage = () => {
  const { boardId } = useParams();
  const dispatch = useDispatch();
  const board = useSelector(selectOneBoard);

  useEffect(() => {
    dispatch(getOneBoard(boardId));
  }, [dispatch, boardId]);

  return (
    <MainContainer $bg={board.background}>
      <BoardHeader title={board.title} boardId={boardId} />
      <Dashboard board={board} />
    </MainContainer>
  );
};

export default ScreensPage;
