import React, { FC, memo } from 'react';
import cn from 'classnames';

import Icon from 'components/Icon/Icon';
import Title from 'components/Title/Title';
import Loader from 'components/Loader/Loader';

import { useNews } from 'hooks/useNews';
import { formatTime } from 'utils/formatters';

import styles from './HotNewsWidget.module.scss';

type HotNewsWidgetProps = {
  className?: string;
};

const HotNewsWidget: FC<HotNewsWidgetProps> = ({ className }) => {
  const { news, isLoading, error, refreshNews } = useNews('hot');

  const generateNewsItem = (item: NewsItem) => {
    let time = '00:00';

    try {
      time = formatTime(item.timestamp);
    } catch (_) {}

    return (
      <li key={item.id} className={styles.item}>
        <a href={`#${item.id}`} className={styles.link}>
          <time className={styles.time}>{time}</time>
          <div className={styles.itemTitleWrapper} title={item.title}>
            <span className={styles.itemTitle}>{item.title}</span>
            <Icon type="chevronRight" className={styles.arrow} />
          </div>
        </a>
      </li>
    );
  };

  const getContent = () => {
    if (error && !isLoading) {
      return <p data-testid="hot-error">Error, while getting news.</p>;
    }

    if (isLoading && !news.length) {
      return <Loader className={styles.loader} />;
    }

    if (!news.length) {
      return <p data-testid="no-data">Looks like there are no news.</p>;
    }

    return (
      <ul className={styles.list} data-testid="hot-list">
        {news.map(generateNewsItem)}
      </ul>
    );
  };

  return (
    <aside className={cn(styles.wrapper, className)}>
      <Title type="h3" className={styles.heading}>
        <Icon type="fire" className={styles.icon} />
        <a className={styles.title} href="#hot-news" title="See all hot news">
          Hot News
        </a>
        <Icon type="fire" className={styles.icon} />
      </Title>

      {getContent()}

      <button
        className={styles.refresh}
        title="Refresh hot news"
        onClick={refreshNews}
        disabled={isLoading}
      >
        Refresh
        <Icon
          type="refresh"
          className={cn(styles.refreshIcon, {
            [styles.refreshLoad]: isLoading,
          })}
        />
      </button>
    </aside>
  );
};

export default memo(HotNewsWidget);
