import styled from 'styled-components';

export const Modalform = styled.form`
  border-radius: 8px;
  width: 100%;
  &:hover {
    border-color: #9dc888;
  }

  @media screen and (min-width: 1440px) {
    input,
    textarea {
      width: 100%;
    }
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
  width: 100%;
  border: 1px solid var(--accent-color);
  border-radius: 8px;
  height: 49px;
  opacity: 0.4;
  margin-bottom: 24px;
  color: var(--text-color) !important;
  padding: 14px 18px;
  background-color: transparent;
  transition: opacity var(--easedTransition);

  &:focus {
    outline: none;
    opacity: 1;
  }

  &:hover {
    opacity: 1;
  }
`;

export const Commenttextarea = styled.textarea`
  resize: none;
  width: 100%;
  border: 1px solid var(--accent-color);
  border-radius: 8px;
  min-height: 120px;
  opacity: 0.4;
  background-color: transparent;
  margin-bottom: 24px;
  color: var(--text-color);
  margin-right: 18px;
  padding: 14px 18px;
  transition: opacity var(--easedTransition);

  &:focus {
    outline: none;
    opacity: 1;
  }

  &:hover {
    opacity: 1;
  }
`;

export const ButtonSend = styled.button`
  border-radius: 8px;
  width: 100%;
  height: 49px;
  background-color: var(--accent-color);
  color: var(--btn-icon-bg);
  cursor: pointer;
  transition: opacity var(--easedTransition);

  &:hover {
    opacity: 0.7;
  }
`;
