import styled from 'styled-components';

export const HeaderWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
`;

export const Data = styled.ul`
  margin-right: 20px;

  @media screen and (min-width: 768px) {
    margin-right: 80px;
  }
`;
