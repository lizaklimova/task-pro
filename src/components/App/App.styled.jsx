import { styled } from 'styled-components';

export const MainContainer = styled.div`
  width: 100%;
  padding: 16px;
  margin: 0 auto;

  @media screen and (min-width: 375px) {
    max-width: 375px;
  }

  @media screen and (min-width: 768px) {
    padding-top: 26px;
    padding-bottom: 32px;
    max-width: 736px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 14px;
    padding-bottom: 14px;
    max-width: 1148px;
  }
`;
