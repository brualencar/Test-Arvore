import React from 'react';

import { render, screen } from '@testing-library/react';

import App from './App';

describe('renders learn react link', () => {
  it('snapshot', () => {
    render(<App />);
    const linkElement = screen.getByText('New App');
    expect(linkElement).toMatchSnapshot();
  });

  it('should render', () => {
    render(<App />);
    const linkElement = screen.getByText('New App');
    expect(linkElement).toBeTruthy();
  });
});
