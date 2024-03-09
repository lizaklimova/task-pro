import styled from 'styled-components';
export const DevContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 32px;

  @media screen and (min-width: 768px) {
    margin-bottom: 10px;
  }
`;

export const DevName = styled.h2`
  font-size: 20px;
  font-weight: bold;
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`;

export const DevRole = styled.p`
  font-size: 16px;
  margin-bottom: 12px;
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 12px;
  }
`;

export const DevImage = styled.img`
  width: 200px;
  height: 200px;
  border: 2px solid #ccc;
  border-radius: 50%;
  margin-bottom: 8px;

  @media screen and (min-width: 768px) {
    width: 120px;
    height: 120px;
  }
`;

export const DevLinkContainer = styled.div`
  display: flex;
  gap: 12px;
`;

export const DevLink = styled.a`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-bottom: 4px;
  transition: transform var(--easedTransition);

  @media screen and (min-width: 768px) {
    &:hover,
    &:focus {
      transform: scale(1.2);
    }
  }
`;
