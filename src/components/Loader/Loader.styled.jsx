import styled from '@emotion/styled';
import { RotatingLines } from 'react-loader-spinner';

export const LoaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: var(--background-color);
`;

export const StyledRotatingLines = styled(RotatingLines)`
  stroke: var(--accent-color);
  stroke-width: 5px;
  animation-duration: 0.75s;
`;
