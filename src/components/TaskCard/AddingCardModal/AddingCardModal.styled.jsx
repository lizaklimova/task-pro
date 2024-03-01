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

    & > div {
      display: flex;
      gap: 8px;
      margin-top: 4px;
      margin-bottom: 14px;
    }
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
