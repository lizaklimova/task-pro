import { useState } from 'react';
import { useTranslation } from 'react-i18next';
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

const Filters = ({ onChange, filterValue }) => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const { t } = useTranslation();

  return (
    <>
      {isModalOpen && (
        <ModalWrapper width={300} onClose={() => setIsModalOpen(false)}>
          <TitleContainer>
            <Title>{t('boards.filterButton')}</Title>
          </TitleContainer>
          <ClearFilterBox>
            <ClearTitle>{t('boards.filter.label')}</ClearTitle>
            <ClearButton type="button" onClick={() => onChange('default')}>
              {t('boards.filter.all')}
            </ClearButton>
          </ClearFilterBox>
          <RadioButtonBox>
            <PriorityFilterLabel className="gray">
              <RadioButton
                type="radio"
                name="priority"
                value="without"
                checked={filterValue === 'without'}
                onChange={() => onChange('without')}
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
                onChange={() => onChange('low')}
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
                onChange={() => onChange('medium')}
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
                onChange={() => onChange('high')}
                className="green"
              />
              <StyledMarker className="green"></StyledMarker>
              {t('boards.filter.high')}
            </PriorityFilterLabel>
          </RadioButtonBox>
        </ModalWrapper>
      )}
    </>
  );
};

export default Filters;
