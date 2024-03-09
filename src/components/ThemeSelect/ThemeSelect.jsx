import { useState } from 'react';
import Select from 'react-select';
import { useTranslation } from 'react-i18next';
import { useTheme } from 'hooks/useTheme';
import { SelectWrap } from './ThemeSelect.styled';
import './ThemeSelect.css';

function ThemeSelect() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const { setTheme } = useTheme();
  const { t } = useTranslation();

  const THEME_OPTIONS = [
    { value: 'light', label: `${t('header.theme1')}` },
    { value: 'dark', label: `${t('header.theme2')}` },
    { value: 'violet', label: `${t('header.theme3')}` },
  ];

  const handleDropdownToggle = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const onChangeTheme = event => {
    setTheme(event.value);
  };

  return (
    <SelectWrap $isMenuOpen={isDropdownOpen}>
      <Select
        classNamePrefix="custom-select"
        onChange={event => {
          onChangeTheme(event);
        }}
        options={THEME_OPTIONS}
        placeholder={`${t('header.theme')}`}
        isSearchable={false}
        onMenuOpen={handleDropdownToggle}
        onMenuClose={handleDropdownToggle}
      />
    </SelectWrap>
  );
}

export default ThemeSelect;
