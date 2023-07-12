import React from 'react';

import { render, screen } from '../../../utils/testUtils';
import Shelf from '../Shelf';

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

jest.mock('react-slick', () => ({
  Slider: ({ ...props }) => {
    const tempProps = { ...props };

    return (
      <div
        data-testid='slider'
        {...tempProps}
      />
    );
  },
}));

describe('renders learn react link', () => {
  // todo: mock slider component
  it.skip('snapshot', () => {
    const { container } = render(
      <Shelf
        books={[
          {
            id: 't636zwEACAAJ',
            volumeInfo: {
              title: 'O mundo segundo Star Wars',
              authors: ['Cass R. Sunstein'],
              categories: ['Fiction'],
            },
            saleInfo: {
              saleability: 'NOT_FOR_SALE',
              retailPrice: {
                amount: 12,
              },
            },
            accessInfo: {
              epub: {
                isAvailable: true,
              },
              pdf: {
                isAvailable: true,
              },
            },
          },
        ]}
      />
    );

    expect(container).toMatchSnapshot();
  });
});
