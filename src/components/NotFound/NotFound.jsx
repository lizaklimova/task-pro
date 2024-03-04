import { useTranslation } from 'react-i18next';
import NotFoundImg from 'assets/images/404/404.png';
import {
  NotFoundBg,
  TextWrap,
  LongText,
  NotFoundMsg,
  NotFoundRedirectBtn,
} from './NotFound.styled';

const NotFound = () => {
  const { t } = useTranslation();

  return (
    <NotFoundBg>
      <TextWrap>
        <NotFoundMsg>
          {t('404.ops')} <br /> {t('404.title')}
        </NotFoundMsg>

        <LongText>{t('404.text')}</LongText>
        <NotFoundRedirectBtn to="/">{t('404.homeLink')}</NotFoundRedirectBtn>
      </TextWrap>
      <img src={NotFoundImg} alt="404 page" />
    </NotFoundBg>
  );
};

export default NotFound;
