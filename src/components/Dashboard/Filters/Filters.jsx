import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { LABEL_ARR } from 'constants';
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

  const newLabelArr = [
    { ...LABEL_ARR.find(item => item.id === 3), priority: 'without' },
    ...LABEL_ARR.filter(item => item.id !== 3),
  ];

  const handleFilterChange = newValue => {
    setFilterValue(newValue);
    dispatch(filterCards({ boardId: boardId, priority: newValue }));
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
        {newLabelArr.map(({ id, priority, color }) => (
          <PriorityFilterLabel key={id} $color={color}>
            <RadioButton
              type="radio"
              name="priority"
              value={priority}
              checked={filterValue === priority}
              $color={color}
              onChange={() => handleFilterChange(priority)}
            />
            <StyledMarker $color={color}></StyledMarker>
            {t(`boards.filter.${priority}`)}
          </PriorityFilterLabel>
        ))}
      </RadioButtonBox>
    </ModalWrapper>
  );
};

export default Filters;
