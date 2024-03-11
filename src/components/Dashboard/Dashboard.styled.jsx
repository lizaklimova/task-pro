import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  height: 100%;
  padding-top: 39px;
  padding-bottom: 24px;
  overflow-x: auto;
  scroll-behavior: smooth !important;

  &::-webkit-scrollbar-thumb {
    border-radius: 12px;
  }

  &::-webkit-scrollbar {
    height: 12px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 12px;
  }

  @media screen and (min-width: 768px) {
    padding-top: 26px;
    padding-bottom: 52px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 10px;
    padding-bottom: 36px;
  }
`;

export const EmptyMsg = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  text-align: center;
  border-radius: 8px;
  padding: 10px 30px;
  transform: translate(-50%, -50%);
  background-color: var(--background-color);

  @media screen and (min-width: 1440px) {
    transform: unset;
  }
`;

export const ColumnsList = styled.ul`
  display: flex;
  gap: 12px;
  margin-right: 34px;
  scroll-behavior: smooth;

  @media screen and (min-width: 375px) {
    gap: 34px;
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
  background-color: var(--plus-icon-bg);
  transition: all var(--easedTransition);

  & svg {
    stroke: var(--card-bg);
    transition: all var(--easedTransition);
  }
`;

export const AddButton = styled.button`
  min-width: 100%;
  height: 56px;
  border: none;
  border-radius: 8px;
  background-color: var(--card-bg);
  color: inherit;
  font-weight: 500;
  transition: all var(--easedTransition);

  &:hover {
    background-color: var(--plus-btn-hover);

    ${IconWrap} {
      background-color: var(--card-bg);
      & svg {
        stroke: var(--plus-icon-bg);
      }
    }
  }

  @media screen and (min-width: 375px) {
    min-width: 335px;
  }
`;
