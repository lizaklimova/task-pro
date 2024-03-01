import { useLayoutEffect, useState } from 'react';

function getTheme() {
  if (window.matchMedia && window.matchMedia("(prefers-color-scheme:dark)").matches) {
    return "dark";
  } else {
    return "light";
  }
}
export const useTheme = () => {
  const [theme, setTheme] = useState(localStorage.getItem('app-them') || getTheme());

  useLayoutEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('app-them', theme);
  }, [theme]);

  return { theme, setTheme };
};
