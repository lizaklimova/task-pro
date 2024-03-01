import styled from 'styled-components';

export const IconsUL = styled.ul`
  display: flex;
`;

export const IconSVG = styled.svg`
  stroke: --icon-stroke-color;
`;

export const InputRadio = styled.input`
  display: none;

  &:checked + svg use {
    stroke: green;
  }
`;
