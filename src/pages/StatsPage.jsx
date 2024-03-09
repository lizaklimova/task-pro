import { MainContainer } from 'components/App/App.styled';
import Barchart from 'components/Stats/Barchart';
import { useTranslation } from 'react-i18next';

// const tempStats = {
//   all: {
//     number: 44,
//     without: 10,
//     low: 8,
//     medium: 20,
//     high: 6,
//     outdated: 3,
//     today: 4,
//     week: 20,
//     month: 37,
//     further: 7,
//   },
//   board1: {
//     number: 10,
//     without: 4,
//     low: 2,
//     medium: 2,
//     high: 2,
//     outdated: 1,
//     today: 2,
//     week: 9,
//     month: 10,
//     further: 0,
//   },
//   board2: {
//     number: 34,
//     without: 6,
//     low: 6,
//     medium: 18,
//     high: 4,
//     outdated: 2,
//     today: 2,
//     week: 11,
//     month: 17,
//     further: 7,
//   },
// };

const StatsPage = () => {
  const { t } = useTranslation();

  return (
    <MainContainer>
      <h2>{t('stats.header')}</h2>

      <Barchart />
    </MainContainer>
  );
};

export default StatsPage;
