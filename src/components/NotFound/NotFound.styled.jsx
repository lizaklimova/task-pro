import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

export const NotFoundBg = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--dark-green-gradient);

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 50px;
  }

  img {
    width: 100%;
    height: 250px;

    @media screen and (min-width: 375px) {
      width: 300px;
    }

    @media screen and (min-width: 768px) {
      width: 400px;
      height: 340px;
    }

    @media screen and (min-width: 1000px) {
      width: 450px;
      height: 390px;
    }

    @media screen and (min-width: 1440px) {
      width: 500px;
      height: 430px;
    }
  }
`;

export const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const NotFoundMsg = styled.p`
  font-size: 25px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 24px;
  color: var(--white-color);

  @media screen and (min-width: 1000px) {
    font-size: 45px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 70px;
  }
`;

export const LongText = styled.p`
  font-size: 12px;
  text-align: center;
  line-height: 1.5;
  margin-bottom: 24px;
  color: var(--white-color);
  max-width: 250px;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    margin-bottom: 24px;
    max-width: 570px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 20px;
    max-width: 700px;
  }
`;

export const NotFoundRedirectBtn = styled(Link)`
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  border-radius: 30px;
  padding: 15px;
  margin-bottom: 35px;
  color: var(--white-color);
  background-color: var(--light-green);
  transition: opacity var(--easedTransition);

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 25px;

    &:hover,
    &:focus {
      opacity: 0.7;
    }
  }
`;
