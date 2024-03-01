import { styled, css } from 'styled-components';

const inputsCommonStyles = css`
  border: 1px solid var(--accent-color);
  border-radius: 8px;
  padding: 14px 18px;
  color: var(--text-color);
  background-color: transparent;
  box-shadow: 0 4px 16px 0 rgba(22, 22, 22, 0.08);
  opacity: 0.4;

  &:focus {
    opacity: 1;
    outline: none;
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
    margin-bottom: 14px;
  }

  textarea {
    ${inputsCommonStyles}
    line-height: 1.29;
    margin-bottom: 24px;
    resize: none;
  }

  label {
    font-size: 12px;
    letter-spacing: -0.02em;
    color: var(--lightgrey-text-color);
    display: flex;
    flex-direction: column;
  }

  button {
    font-weight: 500;
    border-radius: 8px;
    padding: 10px;
    background-color: var(--accent-color);
    color: var(--btn-icon-bg);
    margin-top: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    transition: var(--easedTransition);

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
  }
`;

export const LabelRadioList = styled.ul`
  position: relative;
  display: flex;
  gap: 8px;
  margin-top: 4px;
`;

export const LabelRadioLabel = styled.label`
  position: relative;
  margin-bottom: 14px;

  input {
    cursor: pointer;
    z-index: 1;
    opacity: 0;
  }

  &::before {
    position: absolute;
    content: '';
    display: block;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background-color: ${({ $color }) => `var(--priority-${$color})`};
  }
`;
