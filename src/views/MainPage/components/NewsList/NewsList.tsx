import React, { FC } from 'react';

import Loader from 'components/Loader/Loader';
import Title from 'components/Title/Title';

import FeaturedItem from '../FeaturedItem/FeaturedItem';

import styles from './NewsList.module.scss';

type NewsListProps = {
  news: NewsItem[];
  isLoading: boolean;
  error: string;
};

const NewsList: FC<NewsListProps> = ({ news, isLoading, error }) => {
  const getContent = () => {
    if (!news.length && !isLoading && !error) {
      return <p>Sorry, there are no news for now.</p>;
    }
    if (!news.length && isLoading) {
      return <Loader className={styles.loader} />;
    }
    if (!news.length && error) {
      return <p>Whoops, an error occured while getting the news.</p>;
    }

    const featuredArticle = news[0];
    const list = news.slice(1);

    return (
      <>
        <FeaturedItem info={featuredArticle} />

        <div className={styles.list}>
          {list.map((item) => (
            <div className={styles.item} key={item.id}>
              <a
                className={styles.link}
                href={`#${item.id}`}
                title={item.title}
              >
                {item.title}
              </a>
            </div>
          ))}
        </div>
      </>
    );
  };

  return (
    <section className={styles.wrapper}>
      <Title type="h1" className={styles.title}>
        <a href="/" title="See all news">
          Most popular News
        </a>
      </Title>
      {getContent()}
    </section>
  );
};

export default NewsList;
