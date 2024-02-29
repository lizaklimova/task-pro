import { styled } from 'styled-components';

export const CardItem = styled.li`
  max-width: 335px;
  border-radius: 10px;
  padding: 24px 14px;
  background-color: #ffffff;
  list-style-type: none;
  border-left: 7px solid #8fa1d0;

  & > div {
    display: flex;
    align-items: flex-ends;
    justify-content: space-between;
  }
`;

export const CardTitle = styled.h4`
  margin-bottom: 8px;
`;

export const CardDescr = styled.p`
  font-size: 12px;
  line-height: 1.33333;
  color: rgba(22, 22, 22, 0.7);
  margin-bottom: 14px;
  cursor: pointer;
`;

export const InfoWrap = styled.div`
  display: flex;
  gap: 14px;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

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
    display: flex;
    gap: 4px;

    &::before {
      content: '';
      display: block;
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background-color: #8fa1d0;
    }
  }
`;

export const BtnsList = styled.ul`
  display: flex;
  align-items: flex-end;
`;

export const CardActionButton = styled.button`
  background-color: transparent;

  svg,
  path {
    transition: stroke 150ms linear;
  }

  &:hover svg,
  &:hover path {
    stroke: #8fa1d0;
  }
`;
