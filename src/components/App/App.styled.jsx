import { styled } from 'styled-components';

export const MainContainer = styled.div`
  height: calc(100vh - 60px);
  width: 100vw;
  padding: 14px 10px 24px 10px;
  background: ${({ $bg }) =>
    $bg
      ? `center / cover no-repeat
    url(${$bg.backgroundMobileURL})`
      : 'unset'};

  @media screen and (min-width: 375px) {
    padding: 14px 20px 24px 20px;
  }

  @media screen and (-webkit-min-device-pixel-ratio: 2) {
    background: ${({ $bg }) =>
      $bg
        ? `center / cover no-repeat
    url(${$bg.backgroundMobile2xURL})`
        : 'unset'};
  }

  @media screen and (min-width: 768px) {
    padding: 26px 32px 52px 32px;
    height: calc(100vh - 68px);
    background: ${({ $bg }) =>
      $bg
        ? `center / cover no-repeat
    url(${$bg.backgroundTabletURL})`
        : 'unset'};
  }

  @media screen and (min-width: 768px) and (-webkit-min-device-pixel-ratio: 2) {
    background: ${({ $bg }) =>
      $bg
        ? `center / cover no-repeat
    url(${$bg.backgroundTablet2xURL})`
        : 'unset'};
  }

  @media screen and (min-width: 1440px) {
    width: calc(100vw - 260px);
    padding: 10px 24px 36px 24px;
    background: ${({ $bg }) =>
      $bg
        ? `center / cover no-repeat
    url(${$bg.backgroundDesktopURL})`
        : 'unset'};
  }

  @media screen and (min-width: 1440px) and (-webkit-min-device-pixel-ratio: 2) {
    background: ${({ $bg }) =>
      $bg
        ? `center / cover no-repeat
    url(${$bg.backgroundDesktop2xURL})`
        : 'unset'};
  }
`;
