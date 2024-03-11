import styled from 'styled-components';

export const HeaderWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;

  & h2 {
    margin-bottom: 24px;
    margin-right: 36px;
  }

  & h3 {
    margin-bottom: 8px;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    margin-right: 80px;
  }
`;

export const Data = styled.ul`
  margin-right: 40px;

  @media screen and (min-width: 768px) {
    margin-right: 60px;
  }
`;
