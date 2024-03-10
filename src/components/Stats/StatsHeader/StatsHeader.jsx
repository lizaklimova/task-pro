import { useTranslation } from 'react-i18next';
import { Data, HeaderWrap } from './StatsHeader.styled';

const StatsHeader = ({ dataFor, stats }) => {
  const { t } = useTranslation();

  return (
    <HeaderWrap>
      <h2>{t('stats.header')}</h2>
      <div>
        <h3>
          {dataFor === 'all'
            ? t('stats.youHave')
            : `${dataFor.toUpperCase()} ${t('stats.has')}:`}
        </h3>
        <Data>
          {dataFor === 'all' && (
            <li>
              {Object.keys(stats).length - 1} {t('stats.boards')}
            </li>
          )}
          <li>
            {stats[dataFor]?.number} {t('stats.tasks')}
          </li>
        </Data>
      </div>
    </HeaderWrap>
  );
};

export default StatsHeader;
