import { styled } from 'styled-components';

export const LanguageContainer = styled.div`
  width: 52px;
  height: 26px;
  display: flex;
  align-items: center;
  border-radius: 25px;
  background-color: var(--background-color);
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
    rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
`;
export  const Button = styled.button`
  background-color: transparent;
  padding: 0;
  margin: 2px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:disabled {
    background-color: var(--lightgrey-text-color);
    width: 24px;
    height: 24px;
    border-radius: 24px;
  }
`;
export const Img= styled.img`
    width: 20px;
    height: 20px;
`

