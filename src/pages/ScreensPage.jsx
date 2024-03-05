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

  // const error = useSelector(selectError);

  useEffect(() => {
    dispatch(getOneBoard(boardId));
  }, [dispatch, boardId]);

  // const board = {
  //   name: 'Not empty',
  //   columns: [
  //     {
  //       title: 'TO DO',
  //       cards: [
  //         {
  //           title: 'Calculate KAM teams plan',
  //         },
  //         {
  //           title: 'Calculate KAM clients plan',
  //         },
  //         {
  //           title: 'Calculate LR teams plan',
  //         },
  //         {
  //           title: 'Prepare file for LR clients calculation',
  //         },
  //         {
  //           title: 'Prepare file for LR clients calculation',
  //         },
  //         {
  //           title: 'Prepare file for LR clients calculation',
  //         },
  //         {
  //           title: 'Prepare file for LR clients calculation',
  //         },
  //       ],
  //     },
  //     {
  //       title: 'Important',
  //       cards: [
  //         {
  //           title: 'Eat something',
  //         },
  //       ],
  //     },
  //     {
  //       title: 'Bla',
  //       cards: [
  //         {
  //           title: 'Eat something',
  //         },
  //       ],
  //     },
  //     {
  //       title: 'Bla',
  //       cards: [
  //         {
  //           title: 'Eat something',
  //         },
  //       ],
  //     },
  //   ],
  // };

  // const board = {
  //   name: 'Empty',
  //   columns: [],
  // };

  return (
    <MainContainer>
      <BoardHeader title={board.title} />
      <Dashboard board={board} />
    </MainContainer>
  );
};

export default ScreensPage;
