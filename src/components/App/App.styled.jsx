import { styled } from 'styled-components';

export const MainContainer = styled.div`
  width: 100%;
  padding: 0 16px;
  margin: 0 auto;

  @media screen and (min-width: 375px) {
    max-width: 375px;
  }

  @media screen and (min-width: 768px) {
    max-width: 736px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1272px;
  }
`;
