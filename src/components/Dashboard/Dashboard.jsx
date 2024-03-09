import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
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

  return (
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
  );
};

export default Dashboard;
