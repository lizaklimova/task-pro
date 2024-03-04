import NotFoundImg from 'assets/images/404/404.png';
import {
  NotFoundBg,
  TextWrap,
  NotFoundMsg,
  NotFoundRedirectBtn,
} from './NotFound.styled';

const NotFound = () => {
  return (
    <NotFoundBg>
      <TextWrap>
        <NotFoundMsg>
          Oooops... <br /> Page is not found
        </NotFoundMsg>
        <NotFoundRedirectBtn to="/">Back to home</NotFoundRedirectBtn>
      </TextWrap>
      <img src={NotFoundImg} alt="404 page" />
    </NotFoundBg>
  );
};

export default NotFound;
