import { styled, keyframes } from 'styled-components';

const fadeInOut = keyframes`
  from {
    opacity: 0;
    max-height: 0;
  }
  to {
    opacity: 1;
    max-height: 200px; 
  }
`;

export const SelectWrap = styled.div`
  & .custom-select__indicator.custom-select__dropdown-indicator {
    transform: ${({ $isMenuOpen }) =>
      $isMenuOpen ? 'rotate(0deg)' : 'rotate(180deg)'};
  }

  /* & .custom-select__control--menu-is-open {
    opacity: ${({ $isMenuOpen }) => ($isMenuOpen ? 1 : 0)};
    max-height: ${({ $isMenuOpen }) => ($isMenuOpen ? '200px' : '0')};
    overflow: hidden;
    transition: max-height var(--easedTransition),
      opacity var(--cubicTransition);
    animation: ${fadeInOut} 1s linear;
  } */
`;
