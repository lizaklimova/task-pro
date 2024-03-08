import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getOneBoard, filterCards } from '../../../redux/board/boardOperations';
import { LABEL_ARR } from 'constants';
import ModalWrapper from 'components/Modals/ModalWrapper/ModalWrapper';
import {
  TitleContainer,
  Title,
  ClearFilterBox,
  ClearTitle,
  ClearButton,
  PriorityFilterBox,
  PriorityFilterItem,
  RadioButton,
  PriorityFilterLabel,
} from './Filters.styled';

const Filters = ({ boardId, onClose }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const [filterValue, setFilterValue] = useState('');
  console.log(filterValue);
  const newLabelArr = [
    { ...LABEL_ARR.find(item => item.id === 3), priority: 'without' },
    ...LABEL_ARR.filter(item => item.id !== 3),
  ];

  console.log(boardId);

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
      <PriorityFilterBox>
        {newLabelArr.map(({ id, priority, color }) => (
          <PriorityFilterItem key={id} className={color}>
            <RadioButton
              $color={color}
              id="priority"
              type="radio"
              name="priority"
              value={priority}
              checked={filterValue === priority}
              onChange={() => handleFilterChange(priority)}
              className={color}
            />
            <PriorityFilterLabel $color={color} />
            {t(`boards.filter.${priority}`)}
          </PriorityFilterItem>
        ))}
      </PriorityFilterBox>
    </ModalWrapper>
  );
};

export default Filters;
