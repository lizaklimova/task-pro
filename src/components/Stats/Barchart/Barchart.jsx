import { useTranslation } from 'react-i18next';
import { Bar, Rectangle, XAxis, YAxis, Tooltip, Cell } from 'recharts';
import { Chart } from './Barchart.styled';

const Barchart = () => {
  const { t } = useTranslation();

  const data = [
    {
      name: t('boards.filter.without'),
      value: 6,
    },
    {
      name: t('boards.filter.low'),
      value: 6,
    },
    {
      name: t('boards.filter.medium'),
      value: 18,
    },
    {
      name: t('boards.filter.high'),
      value: 4,
    },
  ];

  const colors = [
    'var(--priority-gray)',
    'var(--priority-blue)',
    'var(--priority-pink)',
    'var(--priority-green)',
  ];

  return (
    <Chart width={300} height={300} data={data}>
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
