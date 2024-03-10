import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ModalBackdrop = styled(motion.div)`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: var(--backdrop-color);

  @media screen and (max-width: 375px) {
    padding: 15px;
  }
`;

export const ModalContainer = styled(motion.div)`
  position: relative;
  width: 100%;
  min-height: 130px;
  border-radius: 8px;
  padding: 24px;
  color: var(--text-color);
  background: var(--modal-background);
  transition: all var(--cubicTransition);
  height: ${({ $developers }) => ($developers ? '370px' : 'unset')};
  width: ${({ $developers }) => ($developers ? '90%' : '300px')};

  @media screen and (min-width: 375px) {
    width: ${({ $developers }) => ($developers ? '60%' : '335px')};
  }

  @media screen and (min-width: 768px) {
    min-height: ${({ $developers }) => ($developers ? '650px' : 'unset')};
    width: ${({ $developers }) => ($developers ? '730px' : '350px')};
    width: ${props =>
      props.$containerWidth ? `${props.$containerWidth}px` : '350px'};
    overflow-y: visible;
  }
`;

export const ModalCloseButton = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
  background-color: transparent;
  padding: 0;

  svg {
    transition: filter var(--easedTransition);
  }

  @media screen and (min-width: 1440px) {
    &:hover svg,
    &:focus svg {
      filter: drop-shadow(1px 1px 3px var(--accent-color));
    }
  }
`;
