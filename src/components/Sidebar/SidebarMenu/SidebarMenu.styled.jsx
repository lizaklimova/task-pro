import { styled } from 'styled-components';

export const AsideBackdrop = styled.div`
  display: none;

  @media screen and (max-width: 1440px) {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(21, 21, 21, 0.5);
  }
`;

export const AsideMenu = styled.div`
  @media screen and (min-width: 1440px) {
    display: none;
  }

  @media screen and (max-width: 1439px) {
    display: block;
    position: absolute;
    top: 0;
    left: -100%;
    bottom: 0;
    width: 210px;
    height: 100vh;
    padding: 14px;
    background-color: var(--bar-color);
    color: var(--text-color);
    transition: left var(--easedTransition);
    overflow-y: auto;
    overflow-x: hidden;

    &.is-open {
      left: 0;
    }
  }

  @media screen and (min-width: 375px) {
    width: 225px;
  }

  @media screen and (min-width: 768px) {
    width: 260px;
  }
`;
