import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const BoardLink = styled(Link)`
  padding: 4px 20px;
  border-radius: 8px;
  background-color: ${({ $label }) => `var(--priority-${$label})`};
  opacity: 0.8;
  transition: all var(--easedTransition);

  &:hover {
    opacity: 1;
    font-weight: bold;
  }
`;
