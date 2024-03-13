import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import { useTranslation } from 'react-i18next';
import { updateTheme } from '../../redux/theme/themeOperation';
import { selectTheme } from '../../redux/theme/themeSelector';
import { useTheme } from 'hooks/useTheme';
import './ThemeSelect.css';
import { SelectWrap } from './ThemeSelect.styled';

function ThemeSelect() {
  const [isSelectOpen, setIsSelectOpen] = useState(false);

  const themeBack = useSelector(selectTheme);

  useTheme();
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const THEME_OPTIONS = [
    { value: 'light', label: `${t('header.theme1')}` },
    { value: 'dark', label: `${t('header.theme2')}` },
    { value: 'violet', label: `${t('header.theme3')}` },
  ];

  const onChangeTheme = event => {
    dispatch(updateTheme({ theme: event.value }));
  };

  const defaultValue = THEME_OPTIONS.find(option => option.value === themeBack);

  return (
    <SelectWrap $isMenuOpen={isSelectOpen}>
      <Select
        classNamePrefix="custom-select"
        onChange={event => {
          onChangeTheme(event);
        }}
        options={THEME_OPTIONS}
        defaultValue={defaultValue}
        placeholder={`${t('header.theme')}`}
        isSearchable={false}
        onMenuOpen={() => setIsSelectOpen(true)}
        onMenuClose={() => setIsSelectOpen(false)}
      />
    </SelectWrap>
  );
}

export default ThemeSelect;
