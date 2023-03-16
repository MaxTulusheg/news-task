import React, { FC } from 'react';
import cn from 'classnames';

import styles from './Loader.module.scss';

type LoaderProps = {
  className?: string;
};

const Loader: FC<LoaderProps> = ({ className }) => (
  <div className={cn(styles.wrapper, className)} data-testid="loader">
    <div className={cn(styles.loader, className)} />
  </div>
);

export default Loader;
