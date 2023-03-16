export {};

declare global {
  type NewsItem = {
    id: string;
    title: string;
    timestamp: string;
    popularity: number;
  };
}
