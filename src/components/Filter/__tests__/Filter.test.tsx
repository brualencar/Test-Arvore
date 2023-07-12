import React from 'react';

import { render } from '../../../utils/testUtils';
import Filter from '../Filter';

describe('Filter', () => {
  it('should render snapshot', () => {
    const { container } = render(
      <Filter
        mainTitle='Title'
        clearFilter={() => undefined}
        onFilterChange={() => undefined}
        filters={[
          {
            title: 'Preço',
            id: 'price',
            items: [
              {
                text: 'de R$0 até R$30',
                value: '30',
                complexValue: {
                  from: 0,
                  to: 30,
                },
              },
              {
                text: 'de R$31 até R$50',
                value: '50',
                complexValue: {
                  from: 31,
                  to: 50,
                },
              },
              {
                text: 'de R$51 até R$100',
                value: '100',
                complexValue: {
                  from: 51,
                  to: 100,
                },
              },
              {
                text: 'Mais de R$100',
                value: '101',
                complexValue: {
                  from: 101,
                },
              },
            ],
          },
        ]}
      />
    );
    expect(container).toMatchSnapshot();
  });
});
