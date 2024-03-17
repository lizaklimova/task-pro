import styled from '@emotion/styled';

export const LoaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: rgba(16, 16, 16, 0.8);
  z-index: 4;

  svg {
    z-index: 5;
  }
`;
