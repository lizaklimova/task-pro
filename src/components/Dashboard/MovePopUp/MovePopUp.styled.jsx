import { styled } from 'styled-components';

export const Popup = styled.div`
  position: absolute;
  top: 20px;
  left: -400%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 8px;
  padding: 18px;
  width: 130px;
  height: 0;
  border: none;
  border-radius: 8px;
  background-color: transparent;
  opacity: 0;
  visibility: hidden;
  transition: opacity var(--easedTransition), visibility var(--easedTransition),
    height var(--easedTransition);
  z-index: 3;

  &:hover,
  &:focus {
    background-color: var(--popup-bg);
    border: 1px solid var(--text-color);
    opacity: 1;
    visibility: visible;
    height: auto;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 18px;
    row-gap: 10px;
    font-size: 11px;
    color: var(--text-color);
    background-color: transparent;
    padding: 0;
    width: 100%;
    overflow: hidden;
    transition: color var(--easedTransition);

    span {
      max-width: 80px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    &:hover,
    &:focus {
      color: var(--accent-color);
    }

    svg path {
      transition: stroke var(--easedTransition);
    }

    &:hover svg path,
    &:focus svg path {
      stroke: var(--accent-color);
    }
  }
`;
