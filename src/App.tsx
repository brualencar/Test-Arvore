import React from 'react';

import { ThemeProvider } from 'styled-components';

import * as Styled from './App.style';
import { theme } from './assets/styles/globalStyle';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Styled.Text>Árvore - Leitura transforma</Styled.Text>
    </ThemeProvider>
  );
}

export default App;
