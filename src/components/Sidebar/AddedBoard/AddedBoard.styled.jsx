import { styled } from 'styled-components';

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
