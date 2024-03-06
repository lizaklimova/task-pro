import { useEffect, useLayoutEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getTheme, updateTheme } from '../redux/theme/themeOperation';
import { selectTheme } from '../redux/theme/themeSelector';

export function getThemeSystem() {
  if (window.matchMedia && window.matchMedia("(prefers-color-scheme:dark)").matches) {
    return "dark";
  } else {
    return "light";
  }
}
export const useTheme = () => {
  const dispatch = useDispatch();
useEffect(() => {
  dispatch(getTheme());
}, [dispatch])

  const themeBack = useSelector(selectTheme);

const [theme, setTheme] = useState(localStorage.getItem('app-them') || themeBack);

  useLayoutEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    dispatch(updateTheme({theme}));
    localStorage.setItem('app-them', theme);
  }, [theme,dispatch]);

  return { theme, setTheme };
};
