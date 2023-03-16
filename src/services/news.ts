import newsSource from 'data/newsSource.csv';

import { csvToArray } from 'utils/csvToArray';
import { formatNewsItem } from 'utils/formatters';

/**
 * Returns array of news
 */
export const getNews = async (): Promise<NewsItem[]> => {
  try {
    const file = await fetch(newsSource);
    const textInfo = await file.text();

    const parsedData = csvToArray(textInfo);

    return parsedData.map((item) => formatNewsItem(item));
  } catch (err) {
    throw new Error('Cannot get news');
  }
};
