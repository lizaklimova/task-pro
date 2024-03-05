import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FilterButton, HeaderWrap } from './BoardHeader.styled';
import Filter from 'components/Icons/Filter';
import Filters from '../Filters/Filters';

const BoardHeader = ({ title }) => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <HeaderWrap>
        <h2>{title}</h2>
        <FilterButton type="button" onClick={openModal}>
          <Filter width={14} height={14} />
          {t('boards.filterButton')}
        </FilterButton>
      </HeaderWrap>
      {isModalOpen && <Filters onClose={() => setIsModalOpen(false)} />}
    </>
  );
};

export default BoardHeader;
