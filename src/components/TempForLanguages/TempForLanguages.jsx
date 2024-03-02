import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Img, LanguageContainer } from './TempForLanguages.styled';

export const TempForLanguages = () => {
  const [disabled, setDisabled] = useState(true);
  const { t, i18n } = useTranslation();
  // console.log(t);
  const changeLanguage = lng => {
    setDisabled(!disabled);
    i18n.changeLanguage(lng);
  };

  return (
    <LanguageContainer>
      <Button
        type="button"
        disabled={!disabled}
        onClick={() => changeLanguage('en')}
      >
        {/* {t('header.langEn')} */}
        <Img src={require('./img/flag-british.png')} alt="en" />
      </Button>
      <Button
        type="button"
        disabled={disabled}
        onClick={() => changeLanguage('uk')}
      >
        {/* {t('header.langUk')} */}
        <Img src={require('./img/ukraine-flag.png')} alt="uk" />
      </Button>
    </LanguageContainer>
  );
};
