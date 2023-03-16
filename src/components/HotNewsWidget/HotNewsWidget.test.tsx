import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import * as hooks from 'hooks/useNews';

import HotNewsWidget from './HotNewsWidget';

describe('HotNewsWidget component', () => {
  it('renders No data message if there are no news', () => {
    jest.spyOn(hooks, 'useNews').mockImplementation((_) => ({
      news: [],
      error: '',
      isLoading: false,
      refreshNews: jest.fn(),
    }));

    render(<HotNewsWidget />);

    expect(screen.getByTestId('no-data')).toBeInTheDocument();
  });

  it('renders error message if the error is retrieved', () => {
    jest.spyOn(hooks, 'useNews').mockImplementation((_) => ({
      news: [],
      error: 'Error',
      isLoading: false,
      refreshNews: jest.fn(),
    }));

    render(<HotNewsWidget />);

    expect(screen.getByTestId('hot-error')).toBeInTheDocument();
  });

  it('renders loader', () => {
    jest.spyOn(hooks, 'useNews').mockImplementation((_) => ({
      news: [],
      error: 'error',
      isLoading: true,
      refreshNews: jest.fn(),
    }));

    render(<HotNewsWidget />);

    expect(screen.getByTestId('loader')).toBeInTheDocument();
  });

  it('renders list even if there is an error and loading in progress', () => {
    jest.spyOn(hooks, 'useNews').mockImplementation((_) => ({
      news: [
        {
          id: '1',
          title: 'test',
          timestamp: '',
          popularity: 0,
        },
      ],
      error: 'error',
      isLoading: true,
      refreshNews: jest.fn(),
    }));

    render(<HotNewsWidget />);

    expect(screen.getByTestId('hot-list')).toBeInTheDocument();
  });

  it('refreshes hot news on button click', () => {
    const mockRefresh = jest.fn();

    jest.spyOn(hooks, 'useNews').mockImplementation((_) => ({
      news: [],
      error: 'error',
      isLoading: false,
      refreshNews: mockRefresh,
    }));

    render(<HotNewsWidget />);

    fireEvent.click(screen.getByRole('button'));

    expect(mockRefresh).toHaveBeenCalledTimes(1);
  });

  it('does not refresh news if data is still loading', () => {
    const mockRefresh = jest.fn();

    jest.spyOn(hooks, 'useNews').mockImplementation((_) => ({
      news: [],
      error: 'error',
      isLoading: true,
      refreshNews: mockRefresh,
    }));

    render(<HotNewsWidget />);

    fireEvent.click(screen.getByRole('button'));

    expect(mockRefresh).not.toHaveBeenCalled();
  });
});
