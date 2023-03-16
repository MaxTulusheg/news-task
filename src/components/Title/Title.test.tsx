import React from 'react';
import { render, screen } from '@testing-library/react';

import Title, { TitleProps } from './Title';

describe('Title component', () => {
  const headingTypes: { type: TitleProps['type']; level: number }[] = [
    {
      type: 'h1',
      level: 1,
    },
    {
      type: 'h2',
      level: 2,
    },
    {
      type: 'h3',
      level: 3,
    },
  ];

  headingTypes.forEach((heading) => {
    it(`renders correct heading for ${heading.type} type`, () => {
      render(<Title type={heading.type}>test</Title>);

      expect(
        screen.getByRole('heading', { level: heading.level })
      ).toBeInTheDocument();
    });
  });
});
