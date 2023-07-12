import React, { PropsWithChildren } from 'react';

import { ThemeProvider } from 'styled-components';

import { render as rtlRender, RenderOptions } from '@testing-library/react';

import { theme } from '../assets/styles/globalStyle';

function render(ui: React.ReactElement, renderOptions?: RenderOptions) {
  function Wrapper({ children }: PropsWithChildren<object>): JSX.Element {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

export * from '@testing-library/react';
export { render };
