import { MainContainer } from 'components/App/App.styled';
import Barchart from 'components/Stats/Barchart';
import {
  CategoryHeader,
  CategoryWrap,
  ChartsContainer,
} from 'components/Stats/ChartsCommon.styled';
import Piechart from 'components/Stats/Piechart';
import SelectBoard from 'components/Stats/SelectBoard';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { getStatistics } from '../redux/cards/cardsOperations';
import { useSelector } from 'react-redux';
import { selectStats } from '../redux/board/boardSelectors';
import StatsHeader from 'components/Stats/StatsHeader';

const colorsForPriority = [
  'var(--priority-gray)',
  'var(--priority-blue)',
  'var(--priority-pink)',
  'var(--priority-green)',
];

const colorsForTiming = [
  'var(--timing1)',
  'var(--timing2)',
  'var(--timing3)',
  'var(--timing4)',
  'var(--timing5)',
];

const StatsPage = () => {
  const { t } = useTranslation();
  const [dataFor, setDataFor] = useState('all');
  const stats = useSelector(selectStats);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStatistics());
  }, [dispatch]);

  const changeData = value => {
    setDataFor(value);
  };

  const dataPriority = [
    {
      name: t('stats.priority.without'),
      value: stats[dataFor]?.without,
    },
    {
      name: t('stats.priority.low'),
      value: stats[dataFor]?.low,
    },
    {
      name: t('stats.priority.medium'),
      value: stats[dataFor]?.medium,
    },
    {
      name: t('stats.priority.high'),
      value: stats[dataFor]?.high,
    },
  ];

  const dataTiming = [
    {
      name: t('stats.timing.outdated'),
      value: stats[dataFor]?.outdated,
    },
    {
      name: t('stats.timing.today'),
      value: stats[dataFor]?.today,
    },
    {
      name: t('stats.timing.week'),
      value: stats[dataFor]?.week,
    },
    {
      name: t('stats.timing.month'),
      value: stats[dataFor]?.month,
    },
    {
      name: t('stats.timing.further'),
      value: stats[dataFor]?.further,
    },
  ];

  const boardsNames = Object.keys(stats);

  return (
    <MainContainer>
      <ChartsContainer>
        <StatsHeader dataFor={dataFor} stats={stats} />
        {stats?.all?.number === 0 ? (
          <p style={{ color: 'var(--accent-color)' }}>{t('stats.noTasks')}</p>
        ) : (
          <>
            <SelectBoard
              onSelect={changeData}
              name={dataFor}
              names={boardsNames}
            />
            <CategoryHeader>{t('stats.headerPriority')}</CategoryHeader>
            <CategoryWrap>
              <Barchart data={dataPriority} colors={colorsForPriority} />
              <Piechart data={dataPriority} colors={colorsForPriority} />
            </CategoryWrap>
            <CategoryHeader>{t('stats.headerTiming')}</CategoryHeader>
            <CategoryWrap>
              <Barchart data={dataTiming} colors={colorsForTiming} />
            </CategoryWrap>
          </>
        )}
      </ChartsContainer>
    </MainContainer>
  );
};

export default StatsPage;
