// import { useState } from 'react';
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

const Filters = ({ onClose, onChange, filterValue }) => {
  //   const [isModalOpen, setIsModalOpen] = useState(true);
  return (
    <ModalWrapper onClick={onClose}>
      <TitleContainer>
        <Title>Filters</Title>
      </TitleContainer>
      <ClearFilterBox>
        <ClearTitle>Lable color</ClearTitle>
        <ClearButton type="button" onClick={() => onChange('default')}>
          Show all
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
          Without priority
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
          Low
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
          Medium
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
          High
        </PriorityFilterLabel>
      </RadioButtonBox>
    </ModalWrapper>
  );
};

export default Filters;
