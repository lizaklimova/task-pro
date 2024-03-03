import Pencil from 'components/Icons/Pencil';
import Trash from 'components/Icons/Trash';
import {
  AddButton,
  ButtonsList,
  CardsList,
  ColumnButton,
  ColumnTitleWrap,
  ColumnWrap,
  IconWrap,
} from './Column.styled';
import Plus from 'components/Icons/Plus';
import { useTranslation } from 'react-i18next';
import TaskCard from '../TaskCard';
import { nanoid } from '@reduxjs/toolkit';
import { useState } from 'react';
import ColumnModal from 'components/Modals/ColumnModal';

const Column = ({ column }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
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
                onClick={() => setIsModalOpen(true)}
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

        <AddButton type="button">
          <IconWrap>
            <Plus width={14} height={14} />
          </IconWrap>
          {t('cards.addButton')}
        </AddButton>
      </ColumnWrap>

      {isModalOpen && (
        <ColumnModal variant="edit" closeModal={() => setIsModalOpen(false)} />
      )}
    </>
  );
};

export default Column;
