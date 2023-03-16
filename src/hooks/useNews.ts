import { useEffect, useState } from 'react';

import { getNews } from 'services/news';
import { MAX_HOT_NEWS } from 'utils/constants';

export const useNews = (category: 'popular' | 'hot' = 'popular') => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const loadNewsData = async () => {
    setLoading(true);

    try {
      const data = await getNews();

      setNews(data);
      setError('');
    } catch (err) {
      setError('Cannot load news');
    }

    setLoading(false);
  };

  useEffect(() => {
    loadNewsData();
  }, []);

  const refreshNews = () => {
    loadNewsData();
  };

  let categoryNews: NewsItem[] = [];

  // Idealy this should be done on the server
  if (category === 'hot') {
    categoryNews = [...news]
      .sort(
        (first, second) =>
          Number(new Date(second.timestamp)) - Number(new Date(first.timestamp))
      )
      .slice(0, MAX_HOT_NEWS);
  } else {
    categoryNews = [...news].sort(
      (first, second) => second.popularity - first.popularity
    );
  }

  return {
    news: categoryNews,
    isLoading,
    error,
    refreshNews,
  };
};
