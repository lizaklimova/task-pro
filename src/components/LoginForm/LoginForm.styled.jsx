import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Field, Form } from 'formik';

export const Background = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100dvh;
  background: linear-gradient(to bottom, #fff 0%, #bedbb0 100%);
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

export const AuthLink = styled(Link)`
  color: #ffffff30;
  font-size: 18px;
  font-weight: 500;

  &:hover {
    color: #ffffff;
  }

  &:active {
    color: #ffffff;
  }
`;

export const FormUi = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const Input = styled(Field)`
  padding: 14px 18px;
  background: transparent;
  border: 1px solid #bedbb0;
  border-radius: 8px;
  color: #ffffff;
`;

export const SubmitBtn = styled.button`
  margin-top: 10px;
  padding: 14px 0;
  background: #bedbb0;
  border-radius: 8px;
  font-weight: 500;
  color: #161616;

  &:hover {
    background: #9dc888;
  }
`;
