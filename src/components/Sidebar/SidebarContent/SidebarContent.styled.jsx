import { styled } from 'styled-components';

export const Container = styled.div`
  color: var(--text-color);
  background-color: var(--bar-color);
  display: flex;
  flex-direction: column;
  min-height: 100%;
`;
export const Content = styled.div`
  flex-grow: 1;
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
  background: var(--sidebar-add-btn);
  border-radius: 6px;
  width: 40px;
  height: 36px;
`;

export const CreateText = styled.p`
  max-width: 76px;
  text-align: left;
  letter-spacing: -0.02em;
  color: var(--sedibar-text);
`;

export const CreateBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 197px;
  padding-top: 17px;
  padding-bottom: 17px;
  border-top: 1px var(--sidebar-myboard-text) solid;
  border-bottom: 1px var(--sidebar-myboard-text) solid;
  margin-bottom: 40px;
`;
export const BoardContainer = styled.div``;
//after move
export const BoardBox = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:active {
    &::after {
      content: '';
      position: absolute;
      top: 0;
      right: -14px;
      display: block;
      border-radius: 4px 0 0 4px;
      width: 4px;
      height: 61px;
      background: #bedbb0;
    }
    background-color: var(--sidebar-active-board);
  }
`;
export const NameBox = styled.div`
  display: flex;
  gap: 4px;
  padding: 22px 10px;
  color: var(--sedibar-text);
`;
export const ChangeBox = styled.div`
  display: flex;
  gap: 8px;
`;
export const ChangeIcons = styled.button`
  background: inherit;
  padding: 0;
`;
export const HelpContainer = styled.div`
  background-color: var(--sidebar-help-container);
  border-radius: 8px;
  padding: 14px;
  margin-bottom: 24px;
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
  background: inherit;
  /* background-color: var(--sidebar-help-container); */
  color: var(--sedibar-text);
  display: flex;
  gap: 8px;
  align-items: center;
`;
export const LogoutContainer = styled.div`
  display: flex;
  gap: 14px;
  align-items: center;
  padding-left: 10px;
`;
export const BottomContainer = styled.div`
  display: flex;
  gap: 14px;
  align-items: center;
  padding-left: 10px;
`;
