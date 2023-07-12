import React from 'react';

import { GetVolume } from '../../../services/GetVolumes/GetVolumes';
import { act, fireEvent, render, screen } from '../../../utils/testUtils';
import Home from '../Home';

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

jest.mock('../../../services/GetVolumes/GetVolumes', () => ({
  GetVolume: jest.fn(),
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

describe('Home', () => {
  it('Should match snapshot Home component', async () => {
    (GetVolume as jest.Mock).mockResolvedValue({});
    const { container } = render(<Home />);

    await act(async () => {
      await new Promise(process.nextTick);
      expect(container).toMatchSnapshot();
    });
  });
});
