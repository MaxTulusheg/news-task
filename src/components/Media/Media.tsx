import React, { FC, useEffect, useState } from 'react';
import cn from 'classnames';

import Loader from 'components/Loader/Loader';

import styles from './Media.module.scss';

type MediaProps = {
  className?: string;
  alt?: string;
  src: string;
};

const LOADER_DELAY_MS = 500;
const LOADED_DELAY_MS = 500;

const Media: FC<MediaProps> = ({ className, src, ...props }) => {
  const [isLoaded, setLoaded] = useState(false);

  useEffect(() => {
    let loadedTime: ReturnType<typeof setTimeout>;

    const loadingTime = setTimeout(() => {
      setLoaded(false);
    }, LOADER_DELAY_MS);

    const img = new Image();

    img.onload = () => {
      // If image loaded faster than LOADER_DELAY_MS we don't need the loader
      clearTimeout(loadingTime);

      loadedTime = setTimeout(() => {
        setLoaded(true);
      }, LOADED_DELAY_MS);
    };

    img.src = src;

    return () => clearTimeout(loadedTime);
  }, [src]);

  return isLoaded ? (
    <img src={src} className={cn(styles.image, className)} {...props} />
  ) : (
    <div className={cn(styles.loaderWrapper, className)}>
      <Loader className={styles.loader} />
    </div>
  );
};

export default Media;
