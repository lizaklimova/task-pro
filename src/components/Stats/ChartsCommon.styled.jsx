import styled from 'styled-components';

export const CategoryWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    justify-content: space-around;
  }
`;

export const CategoryHeader = styled.h3`
  margin: 0 auto 20px auto;
  text-align: center;
`;

export const ChartsContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-y: scroll;
  scroll-behavior: smooth;

  &::-webkit-scrollbar-thumb {
    border-radius: 12px;
  }

  &::-webkit-scrollbar {
    height: 12px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 12px;
  }
`;
