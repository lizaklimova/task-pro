import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Background = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  min-height: 100vh;
  background: var(--light-green-gradient);
`;

export const FormWrap = styled.div`
  padding: 24px;
  width: calc(100% - 40px);
  display: flex;
  flex-direction: column;
  gap: 40px;
  background-color: #151515;
  border-radius: 8px;

  @media screen and (min-width: 375px) {
    width: 335px;
  }

  @media screen and (min-width: 768px) {
    width: 424px;
  }
`;

export const AuthList = styled.ul`
  display: flex;
  gap: 14px;
`;

export const AuthLink = styled(NavLink)`
  color: #ffffff30;
  font-size: 18px;
  font-weight: 500;
  transition: color var(--easedTransition);

  &:hover {
    color: #ffffff;
  }

  &.active {
    color: #ffffff;
  }
`;

export const FormUi = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;

  label {
    position: relative;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 14px 18px;
  background: transparent;
  border: 1px solid #bedbb0;
  border-radius: 8px;
  color: #ffffff;
  opacity: 0.5;
  transition: opacity var(--easedTransition);

  &:focus {
    opacity: 1;
  }

  &:hover {
    opacity: 1;
  }

  ${({ $error }) =>
    $error &&
    `
    border-color: #fc8181;
  `}
`;

export const PassInputWrap = styled.div`
  position: relative;
`;

export const HideBtn = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(-50%, 50%);
  opacity: 0.4;
  background-color: transparent;
  cursor: pointer;
`;

export const SubmitBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 14px 0;
  font-weight: 500;
  background: #bedbb0;
  border-radius: 8px;
  color: #161616;
  transition: background var(--easedTransition);

  &:hover {
    background: #9dc888;
  }

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
`;

export const ErrorPara = styled.span`
  position: absolute;
  left: 0;
  bottom: -14px;
  font-size: 7px;
  color: #fc8181;
`;

export const Google = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
  padding: 8px 18px;
  background: transparent;
  border: 1px solid #bedbb0;
  border-radius: 8px;
  color: #bedbb0;
  transition: border-color var(--easedTransition), color var(--easedTransition);

  &:hover {
    border-color: #fff;
    color: #fff;
  }
`;
