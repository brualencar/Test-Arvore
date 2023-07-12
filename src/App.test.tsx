import React from 'react';

import { render, screen } from '@testing-library/react';

import App from './App';

jest.mock('react-flexbox-grid', () => ({
  Grid: ({ ...props }) => {
    const tempProps = { ...props, fluid: 'demo' };

    return (
      <div
        data-testid='grid'
        {...tempProps}
      />
    );
  },
  Row: ({ ...props }) => {
    const tempProps = { ...props };

    return (
      <div
        data-testid='row'
        {...tempProps}
      />
    );
  },
  Col: ({ ...props }) => {
    const tempProps = { ...props };

    return (
      <div
        data-testid='col'
        {...tempProps}
      />
    );
  },
}));

describe('renders learn react link', () => {
  it('snapshot', () => {
    const { container } = render(<App />);

    expect(container).toMatchSnapshot();
  });
});
