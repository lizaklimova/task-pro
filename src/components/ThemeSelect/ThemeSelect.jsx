import { useState } from 'react';
import Select from 'react-select';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { updateTheme } from '../../redux/theme/themeOperation';
import { useTheme } from 'hooks/useTheme';
import './ThemeSelect.css';
import { SelectWrap } from './ThemeSelect.styled';

function ThemeSelect() {
  const [isSelectOpen, setIsSelectOpen] = useState(false);

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

  return (
    <SelectWrap $isMenuOpen={isSelectOpen}>
      <Select
        classNamePrefix="custom-select"
        onChange={event => {
          onChangeTheme(event);
        }}
        options={THEME_OPTIONS}
        placeholder={`${t('header.theme')}`}
        isSearchable={false}
        onMenuOpen={() => setIsSelectOpen(true)}
        onMenuClose={() => setIsSelectOpen(false)}
      />
    </SelectWrap>
  );
}

export default ThemeSelect;
