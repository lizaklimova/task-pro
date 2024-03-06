import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import BoardModal from 'components/Modals/BoardModal/BoardModal';
import { Text, TextAccent } from './BeforeStart.styled';

const BeforeStart = () => {
  const [isAddBoardModalShown, setIsAddBoardModalShown] = useState(false);
  const { t } = useTranslation();

  return (
    <>
      <Text>
        <span>{t('boards.beforeStart1')}</span>
        <TextAccent onClick={() => setIsAddBoardModalShown(true)}>
          {t('boards.beforeStartColor')}
        </TextAccent>
        <span>{t('boards.beforeStart2')}</span>
      </Text>

      {isAddBoardModalShown && (
        <BoardModal
          variant="add"
          closeModal={() => setIsAddBoardModalShown(false)}
        />
      )}
    </>
  );
};

export default BeforeStart;
