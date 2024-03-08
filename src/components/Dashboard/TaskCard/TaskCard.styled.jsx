import { styled, keyframes } from 'styled-components';

const swingAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }

  50% {
    transform: rotate(15deg);
  }

  100% {
    transform: rotate(-15deg);
  }
`;

export const CardItem = styled.div`
  width: 334px;
  border-radius: 10px;
  padding: 24px 14px;
  background-color: var(--card-bg);
  list-style-type: none;
  border-left: ${({ $label }) => `7px solid var(--priority-${$label})`};
  word-break: break-all;

  & > div {
    display: flex;
    align-items: flex-ends;
    justify-content: space-between;
  }

  li {
    position: relative;
  }
`;

export const CardTitle = styled.h4`
  margin-bottom: 8px;
  color: var(--text-color);
`;

export const CardDescr = styled.p`
  width: 290px;
  max-width: 100%s;
  font-size: 12px;
  line-height: 1.33333;
  color: var(--text-color);
  opacity: 0.7;
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
    color: var(--text-color);
    opacity: 0.5;
    margin-bottom: 4px;
  }

  span {
    font-size: 10px;
    color: var(--text-color);
  }
`;

export const Priority = styled.p`
  font-size: 10px;
  color: var(--text-color);
  display: flex;
  gap: 4px;
  text-transform: capitalize;

  &::before {
    content: '';
    display: block;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: ${({ $label }) => `var(--priority-${$label})`};
  }
`;

export const BtnsList = styled.ul`
  display: flex;
  align-items: flex-end;
`;

export const DeadlineModal = styled.div`
  position: absolute;
  top: -155%;
  left: -130%;
  width: 110px;
  height: 30px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 9px;
  color: var(--text-color);
  opacity: 0;
  background-color: var(--background-color);
  box-shadow: var(--box-shadow);
  visibility: hidden;
  transition: opacity var(--easedTransition), visibility var(--easedTransition);
`;

export const CardActionButton = styled.button`
  background-color: transparent;

  &#deadline-bell:hover + #deadline-modal,
  &#deadline-bell:focus + #deadline-modal {
    opacity: 1;
    visibility: visible;
  }

  &#move-card:hover + #move-popup,
  &#move-card:focus + #move-popup {
    background-color: var(--popup-bg);
    border: 1px solid var(--text-color);
    opacity: 1;
    visibility: visible;
    height: auto;
  }

  &#deadline-bell svg {
    animation: ${swingAnimation} 1s ease-in-out infinite alternate;
    filter: drop-shadow(1px 1px 3px var(--accent-color));
  }

  &#deadline-bell svg path {
    opacity: 1;
    stroke: var(--accent-color);
  }

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
