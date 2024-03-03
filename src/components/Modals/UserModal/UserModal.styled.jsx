import { styled } from 'styled-components';

export const FormUser = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap:14px;
    
` ;
// export const ImputConteiner =styled.div`
//     margin-top: 14px;
//     margin-bottom: 10px;
// `

export const InputUser = styled.input`
  width: 100%;
  height: 49px;
  background-color: transparent;
  border: 1px solid var(--input-color);
  border-radius: 8px;
  opacity: 0.4;
  padding: 14px 18px;
  color: var(--text-color);
  outline: transparent;
  &:hover{
    opacity: 1;
  }
`;

export const SendBtn = styled.button`
  margin-top: 10px;
  width: 100%;
  height: 49px;
  border-radius: 8px;
  background-color: var(--accent-color);
  color: var(--btn-text-color);
`;
export const InputPass = styled.div`
  width: 100%;
  height: 49px;
  background-color: transparent;
  border: 1px solid var(--input-color);
  border-radius: 8px;
  outline: transparent;
  display: flex;
  align-items: center;
  opacity: 0.4;
  &:hover {
    opacity: 1;
  }
`;
export const Input = styled.input`
  width: 95%;
  height: 49px;
  background-color: transparent;
  border: none;
  padding: 14px 18px;
  color: var(--text-color);
  outline: transparent;
`;
export const EyeBtn =styled.button`
    background-color: transparent;
    opacity: 0.4;
    margin-right: 18px;
    padding: 0;
    cursor: pointer;
`
export const PlusButton = styled.label`
  width: 24px;
  height: 24px;
  border-radius: 6px;
  background-color: var(--accent-color);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: absolute;
 translate: -50% -50%;
  &:hover {
    transform: scale(1.2);
  }
`;
export const AddPhoto = styled.input`
 display: none;
`;
export const Avatar = styled.div`
display: flex;
flex-direction: column;
align-items: center;
position: relative;
margin-bottom: 14px;
margin-top: 24px;
`;
export const Text = styled.h4`
    font-size: 18px;
    font-weight: 500;
`