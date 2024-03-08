import styled from 'styled-components';

export const HeaderWrap = styled.div`
  display: flex;
  justify-content: space-between;

  & h2 {
    font-weight: 500;
    font-size: 14px;
    background-color: var(--background-color);
    padding: 0 20px;
    border-radius: 8px;

    @media screen and (min-width: 768px) {
      font-size: 18px;
    }
  }
`;

export const FilterButton = styled.button`
  display: flex;
  gap: 8px;
  align-items: center;
  background-color: var(--background-color);
  padding: 0 20px;
  border-radius: 8px;
  font-weight: 500;
  font-size: 14px;
  color: var(--text-color);
  transition: all var(--easedTransition);

  & svg {
    stroke: var(--text-color);
    fill: transparent;
    transition: all var(--easedTransition);
  }

  &:hover {
    color: var(--accent-btn-hover);
    & svg {
      stroke: var(--accent-btn-hover);
    }
  }
`;
