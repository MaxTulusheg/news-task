/**
 * Formats news from file into a NewsItem type
 */
export const formatNewsItem = (item: { [key: string]: string }): NewsItem => {
  return {
    ...item,
    timestamp: item.timestamp.replaceAll('\r', ''),
    popularity: Number(item.popularity) || 0,
  } as NewsItem;
};

/**
 * Formats timestamp into HH:mm format
 */
export const formatTime = (timestamp: string): string => {
  const date = new Date(timestamp);

  if (isNaN(date.getTime())) throw new Error('Incorrect timestamp');

  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');

  return `${hours}:${minutes}`;
};
