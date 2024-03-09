import { MainContainer } from 'components/App/App.styled';
import { useTranslation } from 'react-i18next';

const SchedulePage = () => {
  const { t } = useTranslation();

  return (
    <MainContainer>
      <h2>{t('schedule.header')}</h2>
    </MainContainer>
  );
};

export default SchedulePage;
