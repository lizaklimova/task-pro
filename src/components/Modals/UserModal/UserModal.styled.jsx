import { styled } from 'styled-components';

export const FormUser = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

export const UserNameLabel = styled.label`
  width: 100%;
  position: relative;

  p {
    font-size: 8px;
    position: absolute;
    bottom: -12px;
    color: var(--error-color);
  }
`;

export const InputUser = styled.input`
  width: 100%;
  height: 49px;
  background-color: transparent;
  border: 1px solid var(--input-color);
  border-radius: 8px;
  opacity: 0.4;
  padding: 14px 18px;
  color: var(--text-color);
  outline: transparent;
  transition: opacity var(--easedTransition);

  &.invalid {
    border: 2px solid var(--error-color);
  }

  &:hover,
  &:focus {
    opacity: 1;
  }
`;

export const SendBtn = styled.button`
  margin-top: 10px;
  width: 100%;
  height: 49px;
  border-radius: 8px;
  background-color: var(--accent-color);
  color: var(--btn-text-color);
  transition: opacity var(--easedTransition);

  &:hover,
  &:focus {
    opacity: 0.7;
  }
`;

export const InputPass = styled.div`
  width: 100%;
  height: 49px;
  background-color: transparent;
  border: 1px solid var(--input-color);
  border-radius: 8px;
  outline: transparent;
  display: flex;
  align-items: center;
  opacity: 0.4;
  transition: opacity var(--easedTransition);

  &:hover {
    opacity: 1;
  }
`;

export const Input = styled.input`
  width: 95%;
  height: 49px;
  background-color: transparent;
  border: none;
  padding: 14px 18px;
  color: var(--text-color);
  outline: transparent;
`;

export const EyeBtn = styled.button`
  background-color: transparent;
  opacity: 0.4;
  margin-right: 18px;
  padding: 0;
  cursor: pointer;
`;

export const PlusButton = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 6px;
  background-color: var(--accent-color);
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  translate: 100% -50%;
`;

export const AddPhoto = styled.input`
  display: none;
`;

export const AvatarEdit = styled.label`
  cursor: pointer;
  transition: transform var(--easedTransition);

  &:hover {
    transform: scale(1.2);
  }
`;

export const Avatar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin-bottom: 14px;
  margin-top: 24px;

  img {
    border-radius: 8px;
    border: 2px solid var(--background-color);
  }
`;

export const Text = styled.h4`
  font-size: 18px;
  font-weight: 500;
`;
