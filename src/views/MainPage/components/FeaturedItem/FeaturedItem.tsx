import React, { FC } from 'react';

import Title from 'components/Title/Title';
import Media from 'components/Media/Media';

import styles from './FeaturedItem.module.scss';

type FeaturedItemProps = {
  info: NewsItem;
};

const FeaturedItem: FC<FeaturedItemProps> = ({ info }) => {
  return (
    <a className={styles.wrapper} href={`#${info.id}`} title={info.title}>
      <Media
        src="https://picsum.photos/id/304/600/400"
        alt={info.title}
        className={styles.image}
      />
      <div className={styles.titleWrapper}>
        <Title type="h2" className={styles.title}>
          {info.title}
        </Title>
      </div>
    </a>
  );
};

export default FeaturedItem;
