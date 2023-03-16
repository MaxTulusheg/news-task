import React from 'react';
import { render } from '@testing-library/react';

import MainPage from './MainPage';

describe('MainPage component', () => {
  it('renders correct structure', () => {
    const { container } = render(<MainPage />);

    expect(container).toMatchSnapshot();
  });
});
