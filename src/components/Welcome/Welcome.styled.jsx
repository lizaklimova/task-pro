import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

export const WelcomeBg = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  width: 100vw;
  height: 100vh;
  background: var(--light-green-gradient);

  img {
    margin-bottom: 14px;

    @media screen and (min-width: 768px) {
      margin-bottom: 24px;
    }
  }

  p {
    margin-bottom: 48px;
    text-align: center;
    max-width: 280px;

    @media screen and (min-width: 375px) {
      max-width: 335px;
    }

    @media screen and (min-width: 768px) {
      max-width: 470px;
      font-size: 14px;
      line-height: 1.29;
    }
  }
`;

export const LogoWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    margin-bottom: 30px;
  }

  h1 {
    font-weight: 600;
    font-size: 28px;
    letter-spacing: -0.04em;

    @media screen and (min-width: 768px) {
      font-size: 40px;
    }
  }

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 8px;
    background-color: var(--black-color);

    @media screen and (min-width: 768px) {
      width: 48px;
      height: 48px;
    }

    svg {
      @media screen and (min-width: 768px) {
        width: 18px;
        height: 24px;
      }
    }
  }
`;

export const AuthNavWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
`;

export const AuthRegisterLink = styled(Link)`
  font-weight: 500;
  text-align: center;
  min-width: 280px;
  border-radius: 8px;
  padding: 14px 0;
  color: var(--white-color);
  background-color: var(--black-color);
  transition: color var(--easedTransition),
    background-color var(--easedTransition);

  @media screen and (min-width: 375px) {
    min-width: 335px;
  }

  @media screen and (min-width: 768px) {
    max-width: 340px;
  }

  @media screen and (min-width: 1440px) {
    &:hover,
    &:focus {
      background-color: var(--white-color);
      color: var(--black-color);
    }
  }
`;

export const AuthLoginLink = styled(Link)`
  font-weight: 500;
  transition: color var(--easedTransition);

  @media screen and (min-width: 1440px) {
    &:hover,
    &:focus {
      color: var(--white-color);
    }
  }
`;
