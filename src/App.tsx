import React from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';

import usePersistedState from './hooks/theme';
import dark from './styles/themes/dark';
import light from './styles/themes/light';

import GlobalStyled from './styles/global';

import Header from './components/Header';

const App: React.FC = () => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>(
    '@ThemeSwitcher',
    light,
  );

  const toggleTheme = (): void =>
    setTheme(theme.title === 'light' ? dark : light);

  return (
    <ThemeProvider theme={theme}>
      <Header toggleTheme={toggleTheme} />
      <GlobalStyled />
    </ThemeProvider>
  );
};

export default App;
