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
  gap: 14px;
`;

export const Input = styled.input`
  padding: 14px 18px;
  background: transparent;
  border: 1px solid #bedbb0;
  border-radius: 8px;
  color: #ffffff;

  ${({ $error }) =>
    $error &&
    `
    border-color: #fc8181;
  `}
`;

export const SubmitBtn = styled.button`
  margin-top: 10px;
  padding: 14px 0;
  background: #bedbb0;
  border-radius: 8px;
  font-weight: 500;
  color: #161616;
  transition: background var(--easedTransition);

  &:hover {
    background: #9dc888;
  }

  &:disabled {
    opacity: 0.3;
  }
`;

export const ErrorPara = styled.span`
  display: inline;
  font-size: 8px;
  color: #fc8181;
`;
