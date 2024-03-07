import styled from 'styled-components';
export const DevContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 32px;

  @media screen and (min-width: 1440px) {
    margin-bottom: 20px;
  }
`;

export const DevName = styled.h2`
  font-size: 20px;
  font-weight: bold;
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 14px;
  }
`;

export const DevRole = styled.p`
  font-size: 16px;
  margin-bottom: 12px;
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 12px;
    margin-bottom: 8px;
  }
`;

export const DevImage = styled.img`
  width: 200px;
  height: 200px;
  border: 2px solid #ccc;
  border-radius: 50%;
  margin-bottom: 8px;

  @media screen and (min-width: 768px) {
    width: 150px;
    height: 150px;
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
  transition: transform 0.3s ease;

  @media screen and (min-width: 768px) {
    &:hover,
    &:focus {
      transform: scale(1.2);
    }
  }
`;
