import { useState } from 'react';
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
      {Object.keys(board).length > 0 && board.columns.length > 0 && (
        <ColumnsList>
          {board.columns.map(column => (
            <li key={column._id}>
              <Column allColumns={board.columns} column={column} />
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
