import { useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { useTranslation } from 'react-i18next';
import Pencil from 'components/Icons/Pencil';
import Trash from 'components/Icons/Trash';
import ColumnModal from 'components/Modals/ColumnModal';
import CardModal from 'components/Modals/CardModal';
import Plus from 'components/Icons/Plus';
import TaskCard from '../TaskCard';
import {
  AddButton,
  ButtonsList,
  CardsList,
  ColumnButton,
  ColumnTitleWrap,
  ColumnWrap,
  IconWrap,
} from './Column.styled';

const Column = ({ column }) => {
  const [isColumnModalOpen, setIsColumnModalOpen] = useState(false);
  const [isCardModalOpen, setIsCardModalOpen] = useState(false);

  const { t } = useTranslation();

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
                onClick={() => setIsColumnModalOpen(true)}
              >
                <Pencil width={16} height={16} />
              </ColumnButton>
            </li>
            <li>
              <ColumnButton type="button" aria-label="Delete column">
                <Trash width={16} height={16} />
              </ColumnButton>
            </li>
          </ButtonsList>
        </ColumnTitleWrap>

        <CardsList>
          {column.cards.map(card => (
            <li key={nanoid()}>
              <TaskCard card={card} />
            </li>
          ))}
        </CardsList>

        <AddButton type="button" onClick={() => setIsCardModalOpen(true)}>
          <IconWrap>
            <Plus width={14} height={14} />
          </IconWrap>
          {t('cards.addButton')}
        </AddButton>
      </ColumnWrap>

      {isColumnModalOpen && (
        <ColumnModal
          variant="edit"
          closeModal={() => setIsColumnModalOpen(false)}
        />
      )}
      {isCardModalOpen && (
        <CardModal
          variant="add"
          closeCardModal={() => setIsCardModalOpen(false)}
        />
      )}
    </>
  );
};

export default Column;