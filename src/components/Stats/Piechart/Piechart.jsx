import { PieChart, Pie, Cell } from 'recharts';

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const Piechart = ({ data, colors }) => {
  let chartSize = 280;
  if (window.innerWidth >= 768) {
    chartSize = 500;
  } else if (window.innerWidth >= 375) {
    chartSize = 330;
  } else {
    chartSize = 280;
  }

  const outerRadius = chartSize * 0.3;

  return (
    <PieChart
      width={chartSize}
      height={chartSize}
      cx={chartSize * 0.8}
      cy={chartSize * 0.8}
    >
      <Pie
        data={data}
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={outerRadius}
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
        ))}
      </Pie>
    </PieChart>
  );
};

export default Piechart;
