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
  margin-bottom: 70px;
  color: var(--sedibar-text);
  font-weight: 600;
  /* @media screen and (min-width: 1440px) {
    display: block;
    padding: 24px;
    background-color: #161616;
    color: #fff;
    height: 100vh;
  } */
`;
export const LightningBox = styled.div`
  width: 32px;
  height: 32px;
  padding: 8px 10px;
  border-radius: 8px;
  background-color: var(--sidebar-lightning-bg);
`;

export const MyBoard = styled.p`
  color: var(--sidebar-myboard-text);
  text-align: left;
  margin-bottom: 8px;
`;

export const AddBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--sidebar-add-btn);
  border-radius: 6px;
  width: 40px;
  height: 36px;
`;

export const CreateText = styled.p`
  max-width: 76px;
  font-weight: 500;
  text-align: left;
  color: var(--sedibar-text);
`;

export const CreateBox = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 100%;
  padding-top: 17px;
  padding-bottom: 17px;
  border-top: 1px var(--sidebar-myboard-text) solid;
  border-bottom: 1px var(--sidebar-myboard-text) solid;
  margin-bottom: 20px;
`;

export const BoardContainer = styled.div`
  max-height: 150px;
  overflow-y: auto;
  margin-left: -15px;
  margin-right: -15px;

  &::-webkit-scrollbar {
    width: 5px;
  }

  @media screen and (min-width: 1439px) {
    max-height: 320px;
    width: 260px;
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
  color: var(--sedibar-text);
`;

export const ChangeBox = styled.div`
  display: flex;
  gap: 8px;
`;

export const ChangeIcons = styled.button`
  background: transparent;
  padding: 0;
`;

export const HelpContainer = styled.div`
  background-color: var(--sidebar-help-container);
  border-radius: 8px;
  padding: 14px;
  margin-bottom: 24px;
  margin-top: 10px;
`;

export const HelpText = styled.p`
  color: var(--sedibar-text);
  margin-top: 14px;
  margin-bottom: 18px;
`;

export const HelpSpan = styled.span`
  display: inline-block;
  color: var(--sidebar-help-span);
`;

export const HelpBtn = styled.button`
  background: transparent;
  padding: 0;
  color: var(--sedibar-text);
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const LogoutContainer = styled.button`
  display: flex;
  gap: 14px;
  align-items: center;
  padding-left: 10px;
  background: transparent;
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
