import React from 'react';

import { render, screen } from '../../../utils/testUtils';
import Header from '../Header';

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

describe('Header', () => {
  it('Should match snapshot Header component', () => {
    const { container } = render(<Header />);
    expect(container).toMatchSnapshot();
  });
  it('Should render Header component', () => {
    render(<Header />);
    const divElement = screen.getByTestId('header');
    expect(divElement).toBeInTheDocument();
  });
});
