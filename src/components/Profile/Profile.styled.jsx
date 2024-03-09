import { styled } from 'styled-components';

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const UserName = styled.p`
  font-weight: 500;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  width: 32px;
  height: 32px;
  padding: 0;

  img {
    border-radius: 50%;
    border: 1px solid var(--text-color);
  }
`;
