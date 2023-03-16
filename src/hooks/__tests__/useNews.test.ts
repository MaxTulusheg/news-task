import { renderHook, waitFor } from '@testing-library/react';

import { useNews } from '../useNews';

describe('useNews hook', () => {
  const mockedData = '';

  beforeEach(() => {
    global.fetch = jest.fn();

    (global.fetch as jest.Mock).mockResolvedValue({
      text: jest.fn().mockResolvedValue(mockedData),
    });
  });

  it('returns valid structure', async () => {
    const expectedData: NewsItem[] = [];
    const { result } = renderHook(() => useNews());

    await waitFor(() => {
      const { refreshNews, ...data } = result.current;

      expect(data).toEqual({
        news: expectedData,
        error: '',
        isLoading: false,
      });
    });
  });
});
