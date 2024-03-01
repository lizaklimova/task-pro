import { styled, css } from 'styled-components';

const inputsCommonStyles = css`
  border: 1px solid #5255bc;
  border-radius: 8px;
  padding: 14px 18px;
  color: #161616;
  background-color: transparent;
  box-shadow: 0 4px 16px 0 rgba(22, 22, 22, 0.08);
  opacity: 0.4;
`;

export const AddCardModalContent = styled.div`
  display: flex;
  flex-direction: column;

  p {
    margin-bottom: 24px;
  }
`;

export const AddCardForm = styled.form`
  display: flex;
  flex-direction: column;

  input[type='text'] {
    ${inputsCommonStyles}
    margin-bottom: 14px;
  }

  /* input[type='radio']:checked + div span {
    outline: 1px solid red;
  } */

  textarea {
    ${inputsCommonStyles}
    line-height: 1.29;
    margin-bottom: 24px;
    resize: none;
  }

  label {
    font-size: 12px;
    letter-spacing: -0.02em;
    color: rgba(22, 22, 22, 0.5);
    display: flex;
    flex-direction: column;
  }

  button {
    font-weight: 500;
    border-radius: 8px;
    padding: 10px;
    background-color: #5255bc;
    color: #fff;
    margin-top: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    span {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 6px;
      padding: 7px;
      background-color: #fff;
    }
  }
`;

export const LabelRadioList = styled.ul`
  position: relative;
  display: flex;
  gap: 8px;
  margin-top: 4px;
`;

export const LabelRadioInput = styled.input`
  cursor: pointer;
  z-index: 1;
  /* opacity: 0; */

  &::before {
    content: '';
    display: block;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background-color: ${({ $color }) => $color};
  }
`;

export const LabelDiv = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  gap: 7px;

  span {
    display: block;
    width: 14px;
    height: 14px;
    border-radius: 50%;
  }

  #violet {
    background-color: #8fa1d0;
  }

  #pink {
    background-color: #e09cb5;
  }

  #green {
    background-color: #bedbb0;
  }

  #gray {
    background-color: rgba(22, 22, 22, 0.3);
  }
`;
