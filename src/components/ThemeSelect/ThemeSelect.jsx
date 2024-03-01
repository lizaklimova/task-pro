
import { useTheme } from 'hooks/useTheme';
import React from 'react';
import Select from 'react-select';
import './ThemeSelect.css';

const options = [
  { value: 'light', label: 'Light' },
  { value: 'dark', label: 'Dark' },
  { value: 'violet', label: 'Violet' },
];

function ThemeSelect() {
  const { theme, setTheme } = useTheme();
  const onChangeTheme = (event) => {
    setTheme(event.value);
  }
  
  return (
    <div >
      <Select
        classNamePrefix='custom-select'
        onChange={event=>{onChangeTheme(event)}}
        options={options}
        placeholder="Theme"
      />
    </div>
  );
}

export default ThemeSelect;
