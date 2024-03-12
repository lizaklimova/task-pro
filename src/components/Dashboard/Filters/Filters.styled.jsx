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
  border-top: 1px solid var(--underline-color);
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
  color: var(--lightgrey-text-color);
  font-size: 12px;
  line-height: normal;
  letter-spacing: -0.24px;
  background-color: inherit;
  text-decoration-line: underline;

  @media screen and (min-width: 768px) {
    &:hover,
    &:focus {
      color: var(--text-color);
    }
  }
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
  border-radius: 50%;
  margin: 0;
  width: 14px;
  height: 14px;
  opacity: 0;
`;

export const StyledMarker = styled.span`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  cursor: pointer;
  transition: outline 50ms linear;
  background-color: ${({ $color }) => `var(--priority-${$color})`};
`;

export const PriorityFilterLabel = styled.label`
  font-size: 14px;
  position: relative;
  display: inline-flex;
  gap: 8px;
  justify-content: center;
  align-items: center;
  color: var(--lightgrey-text-color);
  cursor: pointer;

  &:not(:last-child) {
    margin-bottom: 12px;
  }

  input[type='radio']:checked + ${StyledMarker} {
    outline: ${({ $color }) => `1px solid var(--priority-${$color})`};
    /* box-shadow: ${({ $color }) =>
      `0 0 0 1px solid var(--priority-${$color})`}; */
    border: 2px solid var(--modal-background);
  }

  @media screen and (min-width: 768px) {
    &:hover,
    &:focus {
      color: var(--text-color);
    }
  }
`;
