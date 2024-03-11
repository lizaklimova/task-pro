import { useEffect, useLayoutEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getTheme } from '../redux/theme/themeOperation';
import { selectTheme } from '../redux/theme/themeSelector';
import { useAuth } from './useAuth';

export const useTheme = () => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useAuth();
  const themeBack = useSelector(selectTheme);

  useEffect(() => {
    isLoggedIn && dispatch(getTheme());
  }, [dispatch, isLoggedIn, themeBack]);

  useLayoutEffect(() => {
    if (themeBack) {
      document.documentElement.setAttribute('data-theme', themeBack);
      localStorage.setItem('app-them', themeBack);
    }
  }, [themeBack]);

  return { themeBack };
};
