import styled from 'styled-components';

export const SelectWrap = styled.div`
  margin-bottom: 24px;

  & p {
    margin-bottom: 12px;
  }
`;

export const SelectContainer = styled.div`
  position: relative;
`;

export const Select = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 290px;
  height: 36px;
  padding: 0 12px;
  border-radius: 8px;
  background-color: var(--card-bg);
  transition: all var(--easedTransition);

  &:hover {
    background-color: var(--plus-btn-hover);
  }
`;

export const Options = styled.ul`
  position: absolute;
  z-index: 900;
  top: 100%;
  left: 0;
  width: 290px;
`;

export const Option = styled.li`
  display: flex;
  align-items: center;
  height: 36px;
  padding: 0 12px;
  border-radius: 8px;
  background-color: var(--card-bg);
  opacity: 0.9;
  transition: all var(--easedTransition);

  &:hover {
    opacity: 1;
    background-color: var(--plus-btn-hover);
  }
`;
