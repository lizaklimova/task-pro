import { Bar, Rectangle, XAxis, YAxis, Tooltip, Cell } from 'recharts';
import { Chart } from './Barchart.styled';

const Barchart = ({ data, colors }) => {
  let chartSize = 280;
  if (window.innerWidth >= 768) {
    chartSize = 600;
  } else if (window.innerWidth >= 375) {
    chartSize = 330;
  } else {
    chartSize = 280;
  }

  return (
    <Chart width={chartSize} height={300} data={data}>
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Bar
        dataKey="value"
        activeBar={
          <Rectangle fill="var(--accent-color)" stroke="var(--loader-color)" />
        }
        label={{ position: 'top' }}
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % 20]} />
        ))}
      </Bar>
    </Chart>
  );
};

export default Barchart;
