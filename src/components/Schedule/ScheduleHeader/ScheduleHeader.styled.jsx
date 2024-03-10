import styled from 'styled-components';

export const HeaderWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;

  & h2 {
    margin-bottom: 20px;
  }
`;

export const Button = styled.button`
  padding: 4px 12px;
  border: none;
  border-radius: 8px;
  background-color: var(--accent-color);
  color: var(--btn-icon-bg);
  font-weight: 500;
  transition: all var(--easedTransition);

  &:hover {
    background-color: var(--accent-btn-hover);
  }
`;
