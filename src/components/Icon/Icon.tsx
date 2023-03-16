import React, { FC } from 'react';
import cn from 'classnames';

import fireIcon from 'assets/icons/fire.svg';
import loaderIcon from 'assets/icons/loader.svg';
import chevronRightIcon from 'assets/icons/chevron-right.svg';
import refreshIcon from 'assets/icons/refresh.svg';

import styles from './Icon.module.scss';

const icons = {
  fire: fireIcon,
  loader: loaderIcon,
  chevronRight: chevronRightIcon,
  refresh: refreshIcon,
};

type IconType = 'fire' | 'loader' | 'chevronRight' | 'refresh';

type IconProps = {
  className?: string;
  type: IconType;
  alt?: string;
};

const Icon: FC<IconProps> = ({ className, type, alt }) => {
  return (
    <img
      src={icons[type]}
      alt={alt || 'Icon'}
      className={cn(styles.icon, className)}
    />
  );
};

export default Icon;
