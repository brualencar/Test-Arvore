import React from 'react';
import { RouterProvider } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';

import { theme } from './assets/styles/globalStyle';
import { routes } from './routes';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={routes} />
    </ThemeProvider>
  );
}

export default App;
