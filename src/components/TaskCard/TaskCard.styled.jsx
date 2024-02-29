import { styled } from 'styled-components';

export const CardItem = styled.li`
  width: 100%;
  border-radius: 10px;
  padding: 24px 14px;
  background-color: #ffffff;
  list-style-type: none;
  border-left: 7px solid #8fa1d0;
`;

export const CardTitle = styled.h4`
  margin-bottom: 8px;
`;

export const CardDescr = styled.p`
  font-size: 12px;
  line-height: 1.33333;
  color: rgba(22, 22, 22, 0.7);
  margin-bottom: 14px;
`;

export const InfoWrap = styled.div`
  display: flex;
  gap: 14px;

  h5 {
    font-weight: 400;
    font-size: 8px;
    color: rgba(22, 22, 22, 0.5);
    margin-bottom: 4px;
  }

  span {
    font-size: 10px;
    color: #161616;
  }

  p {
    font-size: 10px;
    color: #161616;
  }
`;

export const BtnsList = styled.ul``;
