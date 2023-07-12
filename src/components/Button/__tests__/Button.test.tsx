import React from 'react';

import { render } from '../../../utils/testUtils';
import Button from '../Button';

describe('Buttoon', () => {
  it('should render snapshot', () => {
    const { container } = render(<Button variant='primary' />);
    expect(container).toMatchSnapshot();
  });
});
