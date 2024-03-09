import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { getOneBoard, filterCards } from '../../../redux/board/boardOperations';
import ModalWrapper from 'components/Modals/ModalWrapper/ModalWrapper';
import {
  TitleContainer,
  Title,
  ClearFilterBox,
  ClearTitle,
  ClearButton,
  RadioButtonBox,
  RadioButton,
  PriorityFilterLabel,
  StyledMarker,
} from './Filters.styled';

const Filters = ({ boardId, onClose }) => {
  const [filterValue, setFilterValue] = useState('default');
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const handleFilterChange = newValue => {
    setFilterValue(newValue);
    dispatch(filterCards({ boardId: boardId, priority: newValue }));
    onClose();
  };

  const handleDefaultFilter = () => {
    dispatch(getOneBoard(boardId));
    onClose();
  };

  return (
    <ModalWrapper width={300} onClose={onClose}>
      <TitleContainer>
        <Title>{t('boards.filterButton')}</Title>
      </TitleContainer>
      <ClearFilterBox>
        <ClearTitle>{t('boards.filter.label')}</ClearTitle>
        <ClearButton type="button" onClick={handleDefaultFilter}>
          {t('boards.filter.all')}
        </ClearButton>
      </ClearFilterBox>
      <RadioButtonBox>
        <PriorityFilterLabel className="gray">
          <RadioButton
            type="radio"
            name="priority"
            value="without priority"
            checked={filterValue === 'without priority'}
            onChange={() => handleFilterChange('without priority')}
            className="gray"
          />
          <StyledMarker className="gray"></StyledMarker>
          {t('boards.filter.without')}
        </PriorityFilterLabel>
        <PriorityFilterLabel className="blue">
          <RadioButton
            type="radio"
            name="priority"
            value="low"
            checked={filterValue === 'low'}
            onChange={() => handleFilterChange('low')}
            className="blue"
          />
          <StyledMarker className="blue"></StyledMarker>
          {t('boards.filter.low')}
        </PriorityFilterLabel>
        <PriorityFilterLabel className="red">
          <RadioButton
            type="radio"
            name="priority"
            value="medium"
            checked={filterValue === 'medium'}
            onChange={() => handleFilterChange('medium')}
            className="red"
          />
          <StyledMarker className="red"></StyledMarker>
          {t('boards.filter.medium')}
        </PriorityFilterLabel>
        <PriorityFilterLabel className="green">
          <RadioButton
            type="radio"
            name="priority"
            value="high"
            checked={filterValue === 'high'}
            onChange={() => handleFilterChange('high')}
            className="green"
          />
          <StyledMarker className="green"></StyledMarker>
          {t('boards.filter.high')}
        </PriorityFilterLabel>
      </RadioButtonBox>
    </ModalWrapper>
  );
};

export default Filters;
