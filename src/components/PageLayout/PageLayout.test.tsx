import React from 'react';
import { render } from '@testing-library/react';

import PageLayout from './PageLayout';

describe('PageLayout component', () => {
  it('renders correct structure', () => {
    const { container } = render(<PageLayout>test</PageLayout>);

    expect(container).toMatchSnapshot();
  });
});
