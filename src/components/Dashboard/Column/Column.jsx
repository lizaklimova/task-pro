import { useState, useEffect, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useDroppable } from '@dnd-kit/core';
import {
  SortableContext,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { deleteColumn } from '../../../redux/columns/columnsOperations';
import Pencil from 'components/Icons/Pencil';
import Trash from 'components/Icons/Trash';
import ColumnModal from 'components/Modals/ColumnModal';
import CardModal from 'components/Modals/CardModal';
import Plus from 'components/Icons/Plus';
import DeleteModal from 'components/Modals/DeleteModal/DeleteModal';
import TaskCard from '../TaskCard';
import { EmptyMsg } from '../Dashboard.styled';
import {
  AddButton,
  ButtonsList,
  CardsList,
  ColumnButton,
  ColumnTitleWrap,
  ColumnWrap,
  IconWrap,
} from './Column.styled';

const Column = ({ allColumns, column }) => {
  const [isEditColumnModalOpen, setIsEditColumnModalOpen] = useState(false);
  const [isAddCardModalOpen, setIsAddCardModalOpen] = useState(false);
  const [isDeleteModalShown, setIsDeleteModalShown] = useState(false);
  const [showEmptyMsg, setShowEmptyMsg] = useState(false);

  const cardsId = useMemo(
    () => column?.cards?.map(card => card?._id) ?? [],
    [column?.cards]
  );

  useEffect(() => {
    const columns = allColumns?.filter(column => column?.cards?.length !== 0);

    if (!columns?.length) {
      setShowEmptyMsg(true);
    } else {
      setShowEmptyMsg(false);
    }
  }, [setShowEmptyMsg, allColumns]);

  const { setNodeRef, isOver } = useDroppable({
    id: column._id,
    data: {
      column,
    },
  });

  const dispatch = useDispatch();
  const { t } = useTranslation();

  const handleColumnDelete = () => {
    dispatch(deleteColumn(column._id));
    setIsDeleteModalShown(false);
  };

  return (
    <>
      <ColumnWrap>
        <ColumnTitleWrap>
          <h3>{column.title}</h3>
          <ButtonsList>
            <li>
              <ColumnButton
                type="button"
                aria-label="Edit column title"
                onClick={() => setIsEditColumnModalOpen(true)}
              >
                <Pencil
                  width={16}
                  height={16}
                  strokeColor={'var(--plus-icon-bg)'}
                />
              </ColumnButton>
            </li>
            <li>
              <ColumnButton
                id="column-delete"
                type="button"
                aria-label="Delete column"
                onClick={() => setIsDeleteModalShown(true)}
              >
                <Trash
                  width={16}
                  height={16}
                  strokeColor={'var(--plus-icon-bg)'}
                />
              </ColumnButton>
            </li>
          </ButtonsList>
        </ColumnTitleWrap>
        {showEmptyMsg ? (
          <EmptyMsg>{t('cards.empty')}</EmptyMsg>
        ) : (
          <SortableContext
            id={column._id}
            items={cardsId}
            strategy={verticalListSortingStrategy}
          >
            <CardsList ref={setNodeRef} $isOver={isOver}>
              {column.cards &&
                column.cards.map(card => (
                  <li key={card._id}>
                    <TaskCard
                      allColumns={allColumns}
                      columnId={column._id}
                      card={card}
                    />
                  </li>
                ))}
            </CardsList>
          </SortableContext>
        )}
        <AddButton type="button" onClick={() => setIsAddCardModalOpen(true)}>
          <IconWrap>
            <Plus width={14} height={14} />
          </IconWrap>
          {t('cards.addButton')}
        </AddButton>
      </ColumnWrap>

      {isEditColumnModalOpen && (
        <ColumnModal
          variant="edit"
          closeModal={() => setIsEditColumnModalOpen(false)}
          columnId={column._id}
          columnName={column.title}
        />
      )}

      {isAddCardModalOpen && (
        <CardModal
          columnId={column._id}
          variant="add"
          closeCardModal={() => setIsAddCardModalOpen(false)}
        />
      )}

      {isDeleteModalShown && (
        <DeleteModal
          onClose={() => setIsDeleteModalShown(false)}
          onConfirm={handleColumnDelete}
        />
      )}
    </>
  );
};

export default Column;
