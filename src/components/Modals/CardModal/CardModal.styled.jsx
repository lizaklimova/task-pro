import { styled, css } from 'styled-components';

const inputsCommonStyles = css`
  border: 1px solid var(--accent-color);
  border-radius: 8px;
  padding: 14px 18px;
  color: var(--text-color);
  background-color: transparent;
  box-shadow: 0 4px 16px 0 rgba(22, 22, 22, 0.08);
  opacity: 0.4;
  transition: opacity var(--easedTransition);

  &:focus {
    opacity: 1;
    outline: none;
  }

  &:hover {
    opacity: 1;
  }
`;

export const CardModalContent = styled.div`
  display: flex;
  flex-direction: column;

  p {
    font-weight: 500;
    font-size: 18px;
    margin-bottom: 24px;
  }
`;

export const CardForm = styled.form`
  display: flex;
  flex-direction: column;

  input[type='text'] {
    ${inputsCommonStyles}
    margin-bottom: 20px;

    &.invalid {
      border: 2px solid var(--error-color);
    }
  }

  textarea {
    ${inputsCommonStyles}
    line-height: 1.29;
    margin-bottom: 24px;
    resize: none;
    height: 154px;
  }

  label {
    font-size: 12px;
    letter-spacing: -0.02em;
    color: var(--lightgrey-text-color);
    display: flex;
    flex-direction: column;
  }
`;

export const ErrorLabel = styled.label`
  position: relative;

  p {
    font-size: 10px;
    position: absolute;
    bottom: -20px;
    color: var(--error-color);
  }
`;

export const LabelRadioList = styled.ul`
  display: flex;
  gap: 8px;
  margin-top: 4px;

  li {
    position: relative;
  }
`;

export const RadioBtn = styled.input`
  position: absolute;
  cursor: pointer;
  z-index: 3;
  top: 0;
  opacity: 0;

  &:checked + label::before {
    box-shadow: ${({ $color }) =>
      `0 0 1px var(--modal-background), 0 0 1px 1px var(--priority-${$color})`};
    opacity: 1;
    border: 2px solid var(--modal-background);
  }
`;

export const LabelRadioLabel = styled.label`
  margin-bottom: 14px;

  &::before {
    content: '';
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background-color: ${({ $color }) => `var(--priority-${$color})`};
    cursor: pointer;
    transition: outline 50ms linear;
  }
`;

export const CalendarContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;

  button {
    display: flex;
    align-items: center;
    padding: 0;
    padding-top: 5px;
    background-color: transparent;

    svg {
      fill: var(--accent-color);
    }
  }
`;

export const SubmitBtn = styled.button`
  font-weight: 500;
  border-radius: 8px;
  padding: 10px;
  background-color: var(--accent-color);
  color: var(--btn-icon-bg);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: var(--easedTransition);
  margin-top: ${({ $variant }) => ($variant === 'column' ? '24px' : '40px')};

  @media screen and (min-width: 1440px) {
    &:hover,
    &:focus {
      opacity: 0.7;
    }
  }

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    padding: 7px;
    background-color: var(--btn-icon-bg);

    svg path {
      stroke: var(--btn-icon-color);
    }
  }
`;
