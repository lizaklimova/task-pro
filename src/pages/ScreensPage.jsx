import { TempForLanguages } from 'components/TempForLanguages/TempForLanguages';
import { useTranslation } from 'react-i18next';

const ScreensPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <h1>ScreensPage</h1>
      <TempForLanguages />
      <p>{t('boards.beforeStart')}</p>
    </>
  );
};

export default ScreensPage;
