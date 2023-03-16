import { formatTime, formatNewsItem } from '../formatters';

describe('formatTime function', () => {
  it('formats time correctly', () => {
    const expectedResult = '19:23';
    const actualResult = formatTime('2023-03-18T18:23:43.902Z');

    expect(actualResult).toBe(expectedResult);
  });

  it('throws an error if timestamp is wrong', () => {
    expect(() => formatTime('error')).toThrow();
  });
});

describe('formatNewsItem function', () => {
  const mockNewsItem = {
    id: '1',
    title: 'test',
    timestamp: '2023-03-18T18:23:43.902Z\r',
    popularity: '1',
  };

  it('formats object into a NewsItem', () => {
    const expectedResult = {
      id: '1',
      title: 'test',
      timestamp: '2023-03-18T18:23:43.902Z',
      popularity: 1,
    };
    const actualResult = formatNewsItem(mockNewsItem);

    expect(actualResult).toStrictEqual(expectedResult);
  });

  it('sets popularity as 0 if it is not a valid number', () => {
    const expectedResult = {
      id: '1',
      title: 'test',
      timestamp: '2023-03-18T18:23:43.902Z',
      popularity: 0,
    };
    const actualResult = formatNewsItem({
      ...mockNewsItem,
      popularity: 'error',
    });

    expect(actualResult).toStrictEqual(expectedResult);
  });
});
