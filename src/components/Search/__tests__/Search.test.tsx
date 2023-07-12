import React from 'react';

import { fireEvent, render, screen } from '../../../utils/testUtils';
import Search from '../Search';

describe('Search', () => {
  it('Should match snapshot Search component', () => {
    const { container } = render(<Search />);

    expect(container).toMatchSnapshot();
  });
  it('Should render Search component', () => {
    render(<Search />);

    const divElement = screen.getByTestId('search');
    expect(divElement).toBeInTheDocument();
  });

  it('calls Search with the correct search value', async () => {
    render(<Search />);

    const input = await screen.getByTestId('search-input');
    fireEvent.change(input, { target: { value: 'Book' } });

    expect(input).toHaveValue('Book');
  });

  it('calls Search and redirect to search result page', async () => {
    const handleKeyPress = jest.fn();
    Object.defineProperty(window, 'location', {
      value: { assign: handleKeyPress },
    });
    render(<Search />);

    const input = await screen.getByTestId('search-input');
    fireEvent.change(input, { target: { value: 'Book' } });
    fireEvent.keyDown(input, { key: 'Enter', code: 13, charCode: 13 });

    expect(handleKeyPress).toBeCalledWith(`/search-result?search=Book`);
  });
});
