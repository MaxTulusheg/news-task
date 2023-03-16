import React, { FC, PropsWithChildren } from 'react';
import cn from 'classnames';

import styles from './Title.module.scss';

export type TitleProps = {
  type: 'h1' | 'h2' | 'h3';
  className?: string;
};

const Title: FC<PropsWithChildren<TitleProps>> = ({
  type,
  className,
  children,
  ...props
}) => {
  const Heading = type;

  return (
    <Heading
      className={cn(styles.title, className, { [styles[type]]: true })}
      {...props}
    >
      {children}
    </Heading>
  );
};

export default Title;
