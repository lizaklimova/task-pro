import { styled } from 'styled-components';

export const LanguageContainer = styled.div`
  width: 52px;
  height: 26px;
  display: flex;
  align-items: center;
  border-radius: 25px;
  background-color: var(--background-color);
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
`;

export const Button = styled.button`
  background-color: transparent;
  padding: 0;
  margin: 3px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

export const Img = styled.img`
  width: 20px;
  height: 20px;
`;
