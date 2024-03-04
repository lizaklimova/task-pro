import { styled } from 'styled-components';
import { NavLink } from 'react-router-dom';

export const BoardContainer = styled.div`
  max-height: 250px;
  overflow-y: auto;
  margin-left: -14px;
  margin-right: -14px;

  &::-webkit-scrollbar {
    width: 5px;
  }

  @media screen and (min-width: 768px) {
    max-height: 290px;
  }

  @media screen and (min-width: 1439px) {
    max-height: 260px;
    width: 260px;
    margin-left: -24px;
    margin-right: -24px;
  }
`;

export const BoardBox = styled(NavLink)`
  display: flex;
  align-items: center;

  &.active {
    &::before {
      content: '';
      display: block;
      border-radius: 0 4px 4px 0;
      width: 4px;
      height: 61px;
      background: var(--sidebar-before);
    }

    background-color: var(--sidebar-active-board);
  }
`;

export const BoardBoxInfo = styled.div`
  display: flex;
  width: 100%;
  padding-left: 10px;
  padding-right: 10px;
  justify-content: space-between;
`;

export const NameBox = styled.div`
  display: flex;
  gap: 4px;
  font-weight: 500;
  color: var(--sidebar-text);
`;

export const ChangeBox = styled.div`
  display: flex;
  gap: 8px;
`;

export const ChangeIcons = styled.button`
  background: transparent;
  padding: 0;
`;
