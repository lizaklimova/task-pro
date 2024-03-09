import styled from 'styled-components';

export const ColumnWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media screen and (min-width: 375px) {
    width: 335px;
  }
`;

export const ColumnTitleWrap = styled.div`
  width: 100%;
  min-height: 56px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  margin-bottom: 14px;
  border-radius: 8px;
  background-color: var(--card-bg);
  font-weight: 500;

  & h3 {
    font-size: 14px;
    font-weight: 500;
  }
`;

export const ButtonsList = styled.ul`
  display: flex;
`;

export const ColumnButton = styled.button`
  background-color: transparent;
  padding: 4px;

  svg {
    transition: filter var(--easedTransition);
  }

  svg path {
    stroke: var(--icon-stroke-color);
    opacity: 50%;
    transition: stroke var(--easedTransition), opacity var(--easedTransition);
  }

  &:hover svg path {
    stroke: var(--accent-color);
    opacity: 100%;
  }

  &:hover svg {
    filter: drop-shadow(1px 1px 5px var(--accent-color));
  }
`;

export const IconWrap = styled.span`
  margin-right: 8px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;
  border-radius: 6px;
  background-color: var(--btn-icon-bg);
  transition: all var(--easedTransition);

  & svg {
    stroke: var(--btn-icon-color);
    transition: all var(--easedTransition);
  }
`;

export const AddButton = styled.button`
  margin-top: auto;
  min-width: 100%;
  min-height: 56px;
  border: none;
  border-radius: 8px;
  background-color: var(--accent-color);
  color: var(--btn-icon-bg);
  font-weight: 500;
  transition: all var(--easedTransition);

  &:hover {
    background-color: var(--accent-btn-hover);
  }
`;

export const CardsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 5px;
  /* padding-right: 8px; */
  margin-bottom: 14px;
  border-radius: 8px;
  padding: 5px;
  background-color: ${({ $isDraggingOver }) =>
    $isDraggingOver ? 'var(--card-list-bg)' : 'transparent'};
  width: 100%;
  height: calc(100vh - 144px - 130px);
  overflow-y: auto;
  overflow-x: hidden;
  scroll-behavior: smooth;

  &::-webkit-scrollbar-thumb {
    border-radius: 12px;
  }

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 12px;
  }

  @media screen and (min-width: 768px) {
    max-height: calc(100vh - 150px - 166px);
  }

  @media screen and (min-width: 1440px) {
    max-height: calc(100vh - 118px - 106px);
  }
`;
