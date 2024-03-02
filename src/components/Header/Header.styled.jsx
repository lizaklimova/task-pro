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
`;

export const BurgerBtn = styled.button`
  background-color: transparent;

  svg,
  path {
    @media screen and (min-width: 768px) {
      width: 32px;
      height: 32px;
      stroke: var(--text-color);
    }
  }

  @media screen and (min-width: 1440px) {
    display: none;
  }
`;
