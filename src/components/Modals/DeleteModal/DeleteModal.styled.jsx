import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 10px;
`;

export const Title = styled.h4`
  color: var(--text-color);
  font-size: 14px;
  text-align: center;
  font-weight: normal;
  line-height: 1.5;
  margin-bottom: 14px;
`;

export const ConfirmButton = styled.button`
  font-weight: 500;
  font-size: 14px;
  border-radius: 8px;
  padding: 10px;
  background-color: var(--accent-color);
  color: var(--btn-icon-bg);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: var(--easedTransition);

  @media screen and (min-width: 1440px) {
    &:hover,
    &:focus {
      opacity: 0.7;
    }
  }
`;
