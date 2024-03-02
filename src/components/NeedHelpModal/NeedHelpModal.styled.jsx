import styled from 'styled-components';
export const ModalWrapper = styled.div`
  width: 335px;
`;
export const Modalform = styled.form`
  border-radius: 8px;
  width: 335px;

  &:hover {
    border-color: #9dc888;
  }
  @media screen and (min-width: 1440px) {
    width: 400px;
  }
`;

export const ModalTitle = styled.h2`
  font-weight: 500;
  font-size: 18px;
  letter-spacing: -0.02em;
  color: var(--text-color);
  margin-bottom: 24px;
  margin-top: 24px;
`;

export const Emailinput = styled.input`
  border: 1px solid var(--accent-color);
  border-radius: 8px;
  width: 287px;
  height: 49px;
  opacity: 0.4;
  margin-bottom: 24px;
  color: var(--text-color);
  padding-left: 18px;
  background-color: transparent;
  &:hover {
    border-color: #9dc888;
  }
  @media screen and (min-width: 1440px) {
    width: 352px;
  }
`;
export const Commenttextarea = styled.textarea`
  resize: none;
  width: 100%;
  border: 1px solid var(--accent-color);
  border-radius: 8px;
  width: 287px;
  height: 120px;
  opacity: 0.4;
  background-color: transparent;
  margin-bottom: 24px;
  color: var(--text-color);
  margin-right: 18px;
  padding-left: 18px;
  padding-top: 18px;
  &:hover {
    border-color: #9dc888;
  }
  @media screen and (min-width: 1440px) {
    width: 352px;
  }
`;
export const ButtonSend = styled.button`
  border-radius: 8px;
  width: 287px;
  height: 49px;
  background: var(--accent-color);
  cursor: pointer;
  &:hover {
    background: #9dc888;
  }
  @media screen and (min-width: 1440px) {
    width: 352px;
  }
`;
export const ModalMessage = styled.div`
  color: red;
  margin-top: 10px;
  text-align: center;
`;
export const ModalMessageSucces = styled.div`
  color: #9dc888;
  margin-top: 10px;
  text-align: center;
`;
