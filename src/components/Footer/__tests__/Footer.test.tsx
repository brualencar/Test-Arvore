import React from 'react';

import { render, screen } from '../../../utils/testUtils';
import Footer from '../Footer';

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

describe('Footer', () => {
  it('should render snapshot', () => {
    const { container } = render(<Footer />);
    expect(container).toMatchSnapshot();
  });

  it('Should render Footer component', () => {
    render(<Footer />);
    const divElement = screen.getByTestId('footer');
    expect(divElement).toBeInTheDocument();
  });
});
