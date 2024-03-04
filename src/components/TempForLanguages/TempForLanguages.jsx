import { useTranslation } from 'react-i18next';
import { Button, Img, LanguageContainer } from './TempForLanguages.styled';

export const TempForLanguages = () => {
  const { i18n } = useTranslation();

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  return (
    <LanguageContainer>
      <Button
        type="button"
        disabled={i18n.language === 'en'}
        onClick={() => changeLanguage('en')}
      >
        <Img src={require('./img/flag-british.png')} alt="en" />
      </Button>
      <Button
        type="button"
        disabled={i18n.language === 'uk'}
        onClick={() => changeLanguage('uk')}
      >
        <Img src={require('./img/ukraine-flag.png')} alt="uk" />
      </Button>
    </LanguageContainer>
  );
};
