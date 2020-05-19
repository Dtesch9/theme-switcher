import React from 'react';

import AppProvider from './hooks';

import GlobalStyled from './styles/global';

import Header from './components/Header';

const App: React.FC = () => {
  return (
    <AppProvider>
      <Header />
      <GlobalStyled />
    </AppProvider>
  );
};

export default App;
