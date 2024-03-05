import styled from 'styled-components';

export const DevContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* max-width: 180px; */
`;

// export const Wrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
// `;

export const DevName = styled.h2`
  font-size: 14px;
  font-weight: bold;
  text-align: center;
`;

export const DevRole = styled.p`
  font-size: 12px;
  margin-bottom: 10px;
  text-align: center;
`;

export const DevImage = styled.img`
  width: 150px;
  height: 150px;
  border: 2px solid #ccc;
  border-radius: 50%;
  margin-bottom: 10px;
`;

export const DevLinkContainer = styled.div`
  display: flex;
  gap: 8px;
`;

export const DevLink = styled.a`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-bottom: 5px;
`;
