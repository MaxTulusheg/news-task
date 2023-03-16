import React, { FC } from 'react';
import cn from 'classnames';

import logo from 'assets/images/logo.svg';

import styles from './Header.module.scss';

type HeaderProps = {
  className?: string;
};

const Header: FC<HeaderProps> = ({ className }) => (
  <header className={cn(styles.wrapper, className)}>
    <nav className={styles.navigation}>
      <a href="/" title="News" className={styles.link}>
        <img src={logo} alt="News logo" className={styles.logo} />
      </a>
    </nav>
  </header>
);

export default Header;
