import { useTheme } from 'hooks/useTheme';
import React from 'react';
import Select from 'react-select';
import './ThemeSelect.css';
import { useTranslation } from 'react-i18next';

const options = [
  { value: 'light', label: 'Light' },
  { value: 'dark', label: 'Dark' },
  { value: 'violet', label: 'Violet' },
];

function ThemeSelect() {
  const { setTheme } = useTheme();
  const onChangeTheme = event => {
    setTheme(event.value);
  };
   const { t } = useTranslation();

  return (
    <div>
      <Select
        classNamePrefix="custom-select"
        onChange={event => {
          onChangeTheme(event);
        }}
        options={options}
        placeholder={t('header.theme')}
      />
    </div>
  );
}

export default ThemeSelect;
