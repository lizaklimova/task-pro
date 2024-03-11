import { BarChart } from 'recharts';
import styled from 'styled-components';

export const Chart = styled(BarChart)`
  margin-left: -40px;
  font-size: 8px;

  @media screen and (min-width: 768px) {
    font-size: 12px;
  }
`;
