import { useEffect, useLayoutEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getTheme, updateTheme } from '../redux/theme/themeOperation';
import { selectTheme } from '../redux/theme/themeSelector';
import { useAuth } from './useAuth';

export function getThemeSystem() {
  if (window.matchMedia && window.matchMedia("(prefers-color-scheme:dark)").matches) {
    return "dark";
  } else {
    return "light";
  }
}
export const useTheme = () => {

  const dispatch = useDispatch();
  const { isLoggedIn } = useAuth();
  useEffect(() => {
     isLoggedIn && dispatch(getTheme());
   
  }, [dispatch, isLoggedIn]);

  const themeBack = useSelector(selectTheme);

  const [theme, setTheme] = useState(
    localStorage.getItem('app-them') || themeBack || getTheme());

  useLayoutEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    
      isLoggedIn && dispatch(updateTheme({ theme }));
      localStorage.setItem('app-them', theme);
    
    
   
  }, [theme, dispatch, isLoggedIn]);

  return { theme, setTheme };
};
