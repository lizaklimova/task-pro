import styled from 'styled-components';

export const ModalBackdrop = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #706f6f99;
`;

export const ModalContainer = styled.div`
  position: relative;
  padding: 24px;
  min-height: 200px;
  color: var(--text-color);
  background: var(--modal-background);
  border-radius: 8px;

  width: ${props => (props.$containerWidth ? props.$containerWidth : '336px')};
`;

export const ModalCloseButton = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
  background-color: transparent;
`;
