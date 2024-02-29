import { styled } from 'styled-components';

export const AsideBackdrop = styled.div`
  display: none;

  @media screen and (max-width: 1439px) {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(21, 21, 21, 0.5);
    z-index: 2;
  }
`;

export const AsideMenu = styled.div`
  @media screen and (max-width: 1439px) {
    position: absolute;
    top: 0;
    left: -100%;
    width: 210px;
    height: 100vh;
    padding: 24px;
    background-color: #121212;
    color: #fff;
    opacity: 0;
    transition: left 150ms linear, opacity 350ms linear;
    z-index: 3;

    &.is-open {
      left: 0;
      opacity: 1;
    }
  }

  @media screen and (min-width: 375px) {
    width: 225px;
  }

  @media screen and (min-width: 768px) {
    width: 260px;
  }
`;
