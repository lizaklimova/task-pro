import { styled } from 'styled-components';

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
  color: var(--sidebar-text);
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
  background: transparent;
  padding: 0;
  color: var(--sidebar-text);
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
