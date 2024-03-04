import { useTranslation } from 'react-i18next';
import { FilterButton, HeaderWrap } from './BoardHeader.styled';

import Filter from 'components/Icons/Filter';

const BoardHeader = ({ title }) => {
  const { t } = useTranslation();

  return (
    <>
      <HeaderWrap>
        <h2>{title}</h2>
        <FilterButton type="button">
          <Filter width={14} height={14} />
          {t('boards.filterButton')}
        </FilterButton>
      </HeaderWrap>
    </>
  );
};

export default BoardHeader;
