import { styled } from 'styled-components';

export const MainContainer = styled.div`
  height: calc(100vh - 60px);
  width: calc(100vw - 12px);
  padding: 14px 20px 24px 20px;

  /* margin: 0 auto; */

  @media screen and (min-width: 375px) {
    /* max-width: 375px; */
  }

  @media screen and (min-width: 768px) {
    padding: 26px 32px 52px 32px;
    height: calc(100vh - 68px);
    /* max-width: 736px; */
  }

  @media screen and (min-width: 1440px) {
    width: calc(100vw - 260px - 12px);
    padding: 10px 24px 36px 24px;
    /* max-width: 1148px; */
  }
`;
