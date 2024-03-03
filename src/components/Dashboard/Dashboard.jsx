import { useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { useTranslation } from 'react-i18next';
import Plus from 'components/Icons/Plus';
import ColumnModal from 'components/Modals/ColumnModal';
import Column from './Column';
import { AddButton, ColumnsList, IconWrap, Wrap } from './Dashboard.styled';

const Dashboard = ({ board }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <Wrap>
      {board.columns.length > 0 && (
        <ColumnsList>
          {board.columns.map(column => (
            <li key={nanoid()}>
              <Column column={column} />
            </li>
          ))}
        </ColumnsList>
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
  );
};

export default Dashboard;
