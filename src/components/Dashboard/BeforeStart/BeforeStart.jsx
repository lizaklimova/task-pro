import { useTranslation } from 'react-i18next';
import { Text, TextAccent } from './BeforeStart.styled';

const BeforeStart = () => {
  const { t } = useTranslation();

  return (
    <Text>
      <span>{t('boards.beforeStart1')}</span>
      <TextAccent>{t('boards.beforeStartColor')}</TextAccent>
      <span>{t('boards.beforeStart2')}</span>
    </Text>
  );
};

export default BeforeStart;
