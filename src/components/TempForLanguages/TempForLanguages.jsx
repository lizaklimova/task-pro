import { useTranslation } from 'react-i18next';

export const TempForLanguages = () => {
  const { t, i18n } = useTranslation();
  console.log(t);

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      <button type="button" onClick={() => changeLanguage('en')}>
        {t('header.langEn')}
      </button>
      <button type="button" onClick={() => changeLanguage('uk')}>
        {t('header.langUk')}
      </button>
    </>
  );
};
