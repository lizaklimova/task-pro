import { styled } from 'styled-components';

export const SelectWrap = styled.div`
  & .custom-select__indicator.custom-select__dropdown-indicator {
    transform: ${({ $isMenuOpen }) =>
      $isMenuOpen ? 'rotate(180deg)' : 'rotate(0deg)'};
  }
`;
