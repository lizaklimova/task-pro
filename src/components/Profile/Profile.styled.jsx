import { styled } from 'styled-components';

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const UserName = styled.p`
  font-weight: 500;
  display: none;
  @media screen and (min-width: 768px) {
    display: unset;
  }
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
    border-radius: 8px;
    border: 2px solid var(--background-color);
  }
  svg {
    border-radius: 8px;
  }
`;
