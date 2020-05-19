import React, { createContext, useContext, useCallback } from 'react';
import { ThemeProvider as StyledTheme, DefaultTheme } from 'styled-components';

import usePersistedTheme from './persistedTheme';

import dark from '../styles/themes/dark';
import light from '../styles/themes/light';

interface ThemeContextData {
  toggleTheme(): void;
}

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = usePersistedTheme<DefaultTheme>(
    '@ThemeSwitcher',
    light,
  );

  const toggleTheme = useCallback(() => {
    setTheme(theme.title === 'light' ? dark : light);
  }, [setTheme, theme.title]);

  return (
    <ThemeContext.Provider value={{ toggleTheme }}>
      <StyledTheme theme={theme}>{children}</StyledTheme>
    </ThemeContext.Provider>
  );
};

function useTheme(): ThemeContextData {
  const context = useContext(ThemeContext);

  if (!context) throw Error('useTheme must be used within an ThemeProvider');

  return context;
}

export { ThemeProvider, useTheme };
