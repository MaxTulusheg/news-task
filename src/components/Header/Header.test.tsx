import React from 'react';
import { render } from '@testing-library/react';

import Header from './Header';

describe('Header component', () => {
  it('renders correct structure', () => {
    const { container } = render(<Header />);

    expect(container).toMatchSnapshot();
  });
});
