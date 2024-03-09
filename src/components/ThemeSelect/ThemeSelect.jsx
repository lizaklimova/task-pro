import { useTheme } from 'hooks/useTheme';
import Select from 'react-select';
import { useTranslation } from 'react-i18next';
import './ThemeSelect.css';
import { useDispatch } from 'react-redux';
import { updateTheme } from '../../redux/theme/themeOperation';

function ThemeSelect() {
  useTheme();
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const THEME_OPTIONS = [
    { value: 'light', label: `${t('header.theme1')}` },
    { value: 'dark', label: `${t('header.theme2')}` },
    { value: 'violet', label: `${t('header.theme3')}` },
  ];

  const onChangeTheme = event => {
    // setTheme(event.value);
    dispatch(updateTheme({ theme: event.value }));
  };
  return (
    <div>
      <Select
        classNamePrefix="custom-select"
        onChange={event => {
          onChangeTheme(event);
        }}
        options={THEME_OPTIONS}
        placeholder={`${t('header.theme')}`}
        isSearchable={false}
      />
    </div>
  );
}

export default ThemeSelect;
