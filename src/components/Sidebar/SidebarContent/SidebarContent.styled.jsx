import { styled } from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  color: var(--text-color);
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const Content = styled.div`
  flex: 1;
`;

export const Footer = styled.div`
  margin-top: auto;
`;

export const Logo = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  margin-bottom: 15px;
  color: var(--sidebar-text);
  font-weight: 600;
`;

export const ExtraLink = styled(NavLink)`
  opacity: 0.5;
  transition: opacity var(--easedTransition);

  &:hover {
    opacity: 1;
    filter: drop-shadow(1px 1px 10px var(--sidebar-myboard-text));
  }

  &.active {
    opacity: 1;
    filter: drop-shadow(1px 1px 10px var(--sidebar-myboard-text));
  }
`;

export const StatsLink = styled(ExtraLink)`
  margin-left: auto;
`;

export const LightningBox = styled.div`
  width: 32px;
  height: 32px;
  padding: 8px 10px;
  border-radius: 8px;
  background-color: var(--sidebar-lightning-bg);
`;

export const BoardsWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const MyBoard = styled.p`
  color: var(--sidebar-myboard-text);
  text-align: left;
  margin-bottom: 8px;
`;

export const SearchButton = styled.button`
  background-color: transparent;
  color: var(--text-color);

  & svg {
    opacity: 0.7;
    stroke: 'none';
    fill: var(--sidebar-text);
    transition: stroke var(--easedTransition), transform var(--easedTransition);
  }

  &:hover {
    color: var(--accent-btn-hover);
    & svg {
      transform: scale(1.05);
    }
  }
`;

export const AddBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--sidebar-add-btn);
  border-radius: 6px;
  width: 40px;
  height: 36px;
  transition: background-color var(--easedTransition),
    border var(--easedTransition);

  @media screen and (min-width: 1440px) {
    &:hover,
    &:focus {
      background-color: var(--background-color);
      border: 1px solid var(--text-color);
    }

    svg {
      transition: stroke var(--easedTransition);
    }

    &:hover svg,
    &:focus svg {
      stroke: var(--text-color);
    }
  }
`;

export const CreateText = styled.p`
  max-width: 76px;
  font-weight: 500;
  text-align: left;
  color: var(--sidebar-text);
`;

export const CreateBox = styled.div`
  font-size: 13px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 100%;
  padding-top: 17px;
  padding-bottom: 17px;
  border-top: 1px var(--sidebar-myboard-text) solid;
  border-bottom: 1px var(--sidebar-myboard-text) solid;
  margin-bottom: 20px;
`;

export const DevsBtn = styled.button`
  font-size: 12px;
  margin-bottom: 25px;
  background-color: transparent;
  color: var(--sidebar-myboard-text);
  transition: filter 350ms linear;

  @media screen and (min-width: 1440px) {
    &:hover,
    &:focus {
      filter: drop-shadow(1px 1px 4px var(--sidebar-logout));
    }
  }
`;

export const BoardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-left: -14px;
  margin-right: -14px;

  @media screen and (min-width: 1439px) {
    max-height: calc(100vh - 600px);
    width: 260px;
    margin-left: -24px;
    margin-right: -24px;
    overflow-y: auto;
    scroll-behavior: smooth;

    &::-webkit-scrollbar {
      width: 5px;
    }
  }
`;

export const SearchResultWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 14px;

  @media screen and (min-width: 1440px) {
    padding: 0 24px;
  }

  p {
    color: var(--sidebar-myboard-text);
    text-align: left;
  }

  button {
    padding: 0;
    color: var(--sidebar-myboard-text);
    background-color: transparent;
    transition: color var(--easedTransition);

    &:hover,
    &:focus {
      color: var(--sidebar-text);
      filter: drop-shadow(1px 1px 3px var(--sidebar-myboard-text));
    }
  }
`;

export const BoardLink = styled(NavLink)`
  display: flex;
  align-items: center;
  font-size: 12px;
  padding-top: 20px;
  padding-bottom: 20px;
  opacity: 0.5;
  transition: background-color var(--easedTransition);

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }

  &:hover,
  &:focus {
    background-color: var(--sidebar-active-board);
  }

  & #change-container {
    display: none;
  }

  &.active {
    opacity: 1;
    padding: 0;
    background-color: var(--sidebar-active-board);

    & #change-container {
      display: flex;
    }

    &::before {
      content: '';
      display: block;
      border-radius: 0 4px 4px 0;
      width: 4px;
      height: 61px;
      background: var(--sidebar-before);
    }
  }
`;

export const HelpContainer = styled.div`
  background-color: var(--sidebar-help-container);
  border-radius: 8px;
  padding: 14px;
  margin-bottom: 24px;
  margin-top: 10px;
`;

export const HelpText = styled.p`
  color: var(--sidebar-text);
  margin-top: 14px;
  margin-bottom: 18px;
`;

export const HelpSpan = styled.span`
  display: inline-block;
  color: var(--sidebar-help-span);
`;

export const HelpBtn = styled.button`
  font-size: 12px;
  background: transparent;
  padding: 0;
  color: var(--sidebar-text);
  display: flex;
  gap: 8px;
  align-items: center;

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`;

export const LogoutBtn = styled.button`
  display: flex;
  gap: 14px;
  align-items: center;
  padding-left: 10px;
  background: transparent;
  margin-bottom: 30px;

  @media screen and (min-width: 1440px) {
    margin-bottom: unset;
  }
`;

export const LogoutText = styled.p`
  font-weight: 500;
  color: var(--sidebar-logout-text);

  @media screen and (min-width: 1440px) {
    font-size: 16px;
  }
`;

export const BottomContainer = styled.div`
  display: flex;
  gap: 14px;
  align-items: center;
  padding-left: 10px;
`;
