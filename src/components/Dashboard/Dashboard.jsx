import { useState } from 'react';
import { createPortal } from 'react-dom';
import { useTranslation } from 'react-i18next';
import {
  DndContext,
  DragOverlay,
  PointerSensor,
  useSensors,
  useSensor,
  closestCorners,
} from '@dnd-kit/core';
import { useDispatch } from 'react-redux';
import { changeCardOrder, moveCard } from '../../redux/cards/cardsOperations';
import Plus from 'components/Icons/Plus';
import ColumnModal from 'components/Modals/ColumnModal';
import Column from './Column';
import TaskCard from './TaskCard/TaskCard';
import { AddButton, ColumnsList, IconWrap, Wrap } from './Dashboard.styled';

const Dashboard = ({ board }) => {
  const [isAddColumnModalOpen, setIsAddColumnModalOpen] = useState(false);
  const [druggedCard, setDruggedCard] = useState(null);
  const [activeColumnId, setActiveColumnId] = useState(null);

  const { t } = useTranslation();
  const dispatch = useDispatch();

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 3,
      },
    })
  );

  const onDragStart = event => {
    const { data } = event.active;
    setDruggedCard(data.current?.card);
    setActiveColumnId(data.current?.sortable?.containerId);
  };

  const onDragEnd = event => {
    setDruggedCard(null);
    const { active, over } = event;

    if (!over) return;

    const activeId = active.id;
    const overId = over.id;

    if (activeId === overId) return;

    const isOverTheSame =
      over.data.current?.sortable &&
      active.data.current?.sortable.containerId ===
        over.data.current?.sortable.containerId;

    if (!isOverTheSame) {
      dispatch(
        moveCard({
          cardId: activeId,
          newColumn:
            over.data.current?.sortable?.containerId ??
            over.data.current?.column?._id,
          oldColumn: active.data.current?.sortable.containerId,
        })
      );
    } else {
      const newIndex = over.data.current.sortable.index;

      dispatch(
        changeCardOrder({
          cardId: activeId,
          columnId: activeColumnId,
          order: newIndex,
        })
      );
    }
  };

  return (
    <Wrap>
      {board?.columns?.length > 0 && (
        <DndContext
          sensors={sensors}
          collisionDetection={closestCorners}
          onDragStart={onDragStart}
          onDragEnd={onDragEnd}
          autoScroll={{}}
        >
          <ColumnsList>
            {board.columns.map(column => (
              <li key={column._id}>
                <Column allColumns={board.columns} column={column} />
              </li>
            ))}
          </ColumnsList>
          {createPortal(
            <DragOverlay style={druggedCard}>
              {druggedCard && (
                <TaskCard
                  allColumns={board?.columns}
                  columnId={activeColumnId}
                  card={druggedCard}
                />
              )}
            </DragOverlay>,
            document.body
          )}
        </DndContext>
      )}

      <AddButton type="button" onClick={() => setIsAddColumnModalOpen(true)}>
        <IconWrap>
          <Plus width={14} height={14} />
        </IconWrap>
        {t('columns.addButton')}
      </AddButton>

      {isAddColumnModalOpen && (
        <ColumnModal
          variant="add"
          closeModal={() => setIsAddColumnModalOpen(false)}
        />
      )}
    </Wrap>
  );
};

export default Dashboard;
