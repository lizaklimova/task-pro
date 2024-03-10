import styled from 'styled-components';

export const Card = styled.div`
  width: 100%;
  border-radius: 10px;
  padding: 24px 14px;
  background-color: var(--card-bg);
  border-left: 7px solid var(--accent-color);

  & p {
    margin-bottom: 12px;
  }

  & ul {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    min-width: 100%;
  }
`;
