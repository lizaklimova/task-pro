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
  width: 100%;
  min-height: 139px;
  border-radius: 10px;
  padding: 24px 14px;
  background-color: var(--card-bg);
  list-style-type: none;
  border-left: ${({ $label }) => `7px solid var(--priority-${$label})`};
  word-break: break-all;
  cursor: grab;
  transition: opacity 100ms linear;

  &:hover,
  &:focus {
    opacity: 0.9 !important;
  }

  & > div {
    display: flex;
    align-items: flex-ends;
    justify-content: space-between;
  }

  li {
    position: relative;
  }

  @media screen and (min-width: 375px) {
    width: 330px;
  }

  @media screen and (min-width: 768px) {
    width: 335px;
  }
`;

export const CardTitle = styled.h4`
  margin-bottom: 8px;
  color: var(--text-color);
`;

export const CardDescr = styled.p`
  width: 290px;
  max-width: 100%;
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
`;

export const Deadline = styled.span`
  font-size: 9px;
  text-decoration: ${({ $isDeadlinePassed }) =>
    $isDeadlinePassed ? 'line-through' : 'none'};
  color: ${({ $isDeadlinePassed }) =>
    $isDeadlinePassed ? 'var(--error-color)' : 'var(--text-color)'};

  @media screen and (min-width: 768px) {
    font-size: 10px;
  }
`;

export const Priority = styled.p`
  font-size: 9px;
  color: var(--text-color);
  display: flex;
  align-items: center;
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

  @media screen and (min-width: 768px) {
    font-size: 10px;
  }
`;

export const BtnsList = styled.ul`
  display: flex;
  align-items: flex-end;
  gap: 7px;
`;

export const DeadlineModal = styled.div`
  position: absolute;
  top: -155%;
  left: -270%;
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
  padding: 0;

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
