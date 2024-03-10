import { styled } from 'styled-components';

export const HeaderSection = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  padding: 18px 20px;
  background-color: var(--header-color);

  @media screen and (min-width: 768px) {
    height: 68px;
    padding-left: 32px;
    padding-right: 32px;
  }
  @media screen and (min-width: 1440px) {
    justify-content: flex-end;
    padding-left: 24px;
    padding-right: 24px;
  }
`;

export const BurgerBtn = styled.button`
  background-color: transparent;

  svg,
  path {
    stroke: var(--text-color);

    @media screen and (min-width: 768px) {
      width: 32px;
      height: 32px;
    }
  }

  @media screen and (min-width: 1440px) {
    display: none;
  }
`;

export const HeaderUserWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  @media screen and (min-width: 768px) {
   gap:14px;
  }
  @media screen and (min-width: 1440px) {
    gap: 25px;
  }
`;
