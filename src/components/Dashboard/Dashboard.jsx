import { useTranslation } from 'react-i18next';
import { AddButton, ColumnsList, IconWrap, Wrap } from './Dashboard.styled';
import Plus from 'components/Icons/Plus';
import Column from './Column';
import { nanoid } from '@reduxjs/toolkit';
import ColumnModal from 'components/Modals/ColumnModal';

const Dashboard = ({ board }) => {
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
      <AddButton type="button">
        <IconWrap>
          <Plus width={14} height={14} />
        </IconWrap>
        {t('columns.addButton')}
      </AddButton>

      <ColumnModal />
    </Wrap>
  );
};

export default Dashboard;
