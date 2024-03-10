import { MainContainer } from 'components/App/App.styled';
import Barchart from 'components/Stats/Barchart';
import {
  CategoryHeader,
  CategoryWrap,
  ChartsContainer,
} from 'components/Stats/ChartsCommon.styled';
import Piechart from 'components/Stats/Piechart';
import SelectBoard from 'components/Stats/SelectBoard';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

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

const tempStats = {
  all: {
    number: 44,
    without: 10,
    low: 8,
    medium: 20,
    high: 6,
    outdated: 3,
    today: 4,
    week: 20,
    month: 37,
    further: 7,
  },
  board1: {
    number: 10,
    without: 4,
    low: 2,
    medium: 2,
    high: 2,
    outdated: 1,
    today: 2,
    week: 9,
    month: 10,
    further: 0,
  },
  board2: {
    number: 34,
    without: 6,
    low: 6,
    medium: 18,
    high: 4,
    outdated: 2,
    today: 2,
    week: 11,
    month: 17,
    further: 7,
  },
};

const StatsPage = () => {
  const { t } = useTranslation();
  const [dataFor, setDataFor] = useState('all');

  const changeData = value => {
    setDataFor(value);
  };

  const dataPriority = [
    {
      name: t('stats.priority.without'),
      value: tempStats[dataFor].without,
    },
    {
      name: t('stats.priority.low'),
      value: tempStats[dataFor].low,
    },
    {
      name: t('stats.priority.medium'),
      value: tempStats[dataFor].medium,
    },
    {
      name: t('stats.priority.high'),
      value: tempStats[dataFor].high,
    },
  ];

  const dataTiming = [
    {
      name: t('stats.timing.outdated'),
      value: tempStats[dataFor].outdated,
    },
    {
      name: t('stats.timing.today'),
      value: tempStats[dataFor].today,
    },
    {
      name: t('stats.timing.week'),
      value: tempStats[dataFor].week,
    },
    {
      name: t('stats.timing.month'),
      value: tempStats[dataFor].month,
    },
    {
      name: t('stats.timing.further'),
      value: tempStats[dataFor].further,
    },
  ];

  const boardsNames = Object.keys(tempStats);

  return (
    <MainContainer>
      <ChartsContainer>
        <h2 style={{ marginBottom: '12px' }}>{t('stats.header')}</h2>
        <SelectBoard onSelect={changeData} name={dataFor} names={boardsNames} />
        <CategoryHeader>{t('stats.headerPriority')}</CategoryHeader>
        <CategoryWrap>
          <Barchart data={dataPriority} colors={colorsForPriority} />
          <Piechart data={dataPriority} colors={colorsForPriority} />
        </CategoryWrap>
        <CategoryHeader>{t('stats.headerTiming')}</CategoryHeader>
        <CategoryWrap>
          <Barchart data={dataTiming} colors={colorsForTiming} />
          <Piechart data={dataTiming} colors={colorsForTiming} />
        </CategoryWrap>
      </ChartsContainer>
    </MainContainer>
  );
};

export default StatsPage;
