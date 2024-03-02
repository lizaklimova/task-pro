import { styled } from 'styled-components';

export const Aside = styled.aside`
  display: none;

  @media screen and (min-width: 1440px) {
    display: block;
    padding: 24px;
    background-color: var(--bar-color);
    color: #fff;
    height: 100vh;
  }
`;
