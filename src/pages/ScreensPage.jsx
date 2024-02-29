import { TempForLanguages } from 'components/TempForLanguages/TempForLanguages';
import { useTranslation } from 'react-i18next';
import { MainContainer } from 'components/App/App.styled';

const ScreensPage = () => {
  const { t } = useTranslation();

  return (
    <MainContainer>
      <h1>ScreensPage</h1>
      <TempForLanguages />
      <p>{t('boards.beforeStart')}</p>
    </MainContainer>
  );
};

export default ScreensPage;
