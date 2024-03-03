import { styled } from 'styled-components';

export const CardItem = styled.div`
  width: 334px;
  border-radius: 10px;
  padding: 24px 14px;
  background-color: var(--card-bg);
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
  color: var(--text-color);
`;

export const CardDescr = styled.p`
  width: 290px;
  font-size: 12px;
  line-height: 1.33333;
  color: var(--text-color);
  opacity: 0.7;
  margin-bottom: 14px;
  cursor: pointer;
  text-wrap: wrap;
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
    color: var(--text-color);
    opacity: 0.5;
    margin-bottom: 4px;
  }

  span {
    font-size: 10px;
    color: var(--text-color);
  }

  p {
    font-size: 10px;
    color: var(--text-color);
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
    stroke: var(--text-color);
    transition: stroke 150ms linear;
  }

  &:hover svg,
  &:hover path {
    stroke: #8fa1d0;
  }
`;
