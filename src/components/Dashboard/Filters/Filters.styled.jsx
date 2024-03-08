import styled from 'styled-components';

export const TitleContainer = styled.div`
  justify-content: space-between;
  margin-bottom: 14px;
`;

export const Title = styled.h2`
  font-size: 18px;
  font-weight: 500;
  line-height: normal;
`;

export const ClearFilterBox = styled.div`
  display: flex;
  border-top: 1px solid;
  border-color: var(--text-color);
  margin-bottom: 14px;
  padding-top: 14px;
`;

export const ClearTitle = styled.h3`
  display: flex;
  flex-shrink: 0;
  margin-right: auto;
  font-weight: 500;
  line-height: normal;
`;

export const ClearButton = styled.button`
  color: var(--text-color);
  font-size: 12px;
  line-height: normal;
  letter-spacing: -0.24px;
  background-color: inherit;
  text-decoration-line: underline;
`;

export const RadioButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: var(--lightgrey-text-color);
`;

export const RadioButton = styled.input`
  position: absolute;
  z-index: 999;
  cursor: pointer;
  top: 4px;
  left: 0;
  appearance: none;
  font-family: inherit;
  border-radius: 50%;
  margin: 0;
  width: 14px;
  height: 14px;

  &:checked.blue {
    border: 1px solid var(--priority-blue);
  }

  &:checked.red {
    border: 1px solid var(--priority-pink);
  }

  &:checked.green {
    border: 1px solid var(--priority-green);
  }

  &:checked.gray {
    border: 1px solid var(--text-color);
  }
`;

export const StyledMarker = styled.span`
  content: '';
  display: block;
  width: 14px;
  height: 14px;
  border-radius: 50%;

  &.blue {
    background-color: var(--priority-blue);
  }

  &.red {
    background-color: var(--priority-pink);
  }

  &.green {
    background-color: var(--priority-green);
  }

  &.gray {
    background-color: var(--text-color);
  }
`;

export const PriorityFilterLabel = styled.label`
  cursor: pointer;
  position: relative;
  display: inline-flex;
  gap: 8px;
  justify-content: center;
  align-items: center;
  color: var(--text-color);

  font-family: 'Poppins';

  &:not(:last-child) {
    margin-bottom: 12px;
  }
  font-size: 14px;

  &:hover {
    opacity: 0.7;
  }

  input[type='radio']:checked + ${StyledMarker} {
    scale: 0.5;
  }
`;
