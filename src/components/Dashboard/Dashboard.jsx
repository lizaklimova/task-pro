import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { DragDropContext } from 'react-beautiful-dnd';
import { moveCard } from '../../redux/board/boardOperations';
import Plus from 'components/Icons/Plus';
import ColumnModal from 'components/Modals/ColumnModal';
import Column from './Column';
import { AddButton, ColumnsList, IconWrap, Wrap } from './Dashboard.styled';
import { EmptyMsg } from './Dashboard.styled';

const Dashboard = ({ board }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showEmptyMsg, setShowEmptyMsg] = useState(false);

  useEffect(() => {
    const columns = board?.columns?.filter(
      column => column?.cards?.length !== 0
    );

    if (!columns?.length) {
      setShowEmptyMsg(true);
    } else {
      setShowEmptyMsg(false);
    }
  }, [setShowEmptyMsg, board.columns]);

  const { t } = useTranslation();
  const dispatch = useDispatch();

  const onDragEnd = ({ draggableId, source, destination }) => {
    // if (destination || source === destination) return;
    // console.log(source);
    // console.log(destination);
    if (!destination) return;
    if (
      source.droppableId === destination.droppableId &&
      destination.index === source.index
    )
      return;
    if (source.droppableId !== destination.droppableId) {
      dispatch(
        moveCard({
          cardId: draggableId,
          newColumn: destination.droppableId,
          oldColumn: source.droppableId,
        })
      );
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Wrap>
        {showEmptyMsg ? (
          <EmptyMsg>{t('cards.empty')}</EmptyMsg>
        ) : (
          board?.columns?.length > 0 && (
            <ColumnsList>
              {board.columns.map(column => (
                <li key={column._id}>
                  <Column allColumns={board.columns} column={column} />
                </li>
              ))}
            </ColumnsList>
          )
        )}

        <AddButton type="button" onClick={() => setIsModalOpen(true)}>
          <IconWrap>
            <Plus width={14} height={14} />
          </IconWrap>
          {t('columns.addButton')}
        </AddButton>

        {isModalOpen && (
          <ColumnModal variant="add" closeModal={() => setIsModalOpen(false)} />
        )}
      </Wrap>
    </DragDropContext>
  );
};

export default Dashboard;
