import { useState } from 'react';
import {
  Option,
  Options,
  Select,
  SelectContainer,
  SelectWrap,
} from './SelectBoard.styled';
import { IoIosArrowDown } from 'react-icons/io';
import { nanoid } from '@reduxjs/toolkit';
import { useTranslation } from 'react-i18next';

const SelectBoard = ({ onSelect, name, names }) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const onSelectChange = event => {
    const value = event.currentTarget.dataset.value;

    onSelect(value);
    toggleDropdown();
  };

  const toggleDropdown = () => {
    setIsOpen(prev => !prev);
  };
  return (
    <>
      <SelectWrap>
        <p>{t('stats.selectHeader')}</p>
        <SelectContainer>
          <Select onClick={toggleDropdown}>
            {name === 'all' ? t('stats.all') : name} <IoIosArrowDown />
          </Select>

          {isOpen && (
            <Options>
              {names.map(item => (
                <Option
                  key={nanoid()}
                  data-value={item}
                  onClick={onSelectChange}
                >
                  {item === 'all' ? t('stats.all') : item}
                </Option>
              ))}
            </Options>
          )}
        </SelectContainer>
      </SelectWrap>
    </>
  );
};

export default SelectBoard;
