import React, { FC, PropsWithChildren } from 'react';

import Header from 'components/Header/Header';
import HotNewsWidget from 'components/HotNewsWidget/HotNewsWidget';

import styles from './PageLayout.module.scss';

const PageLayout: FC<PropsWithChildren> = ({ children }) => (
  <>
    <Header className={styles.header} />
    <div className={styles.wrapper}>
      <main className={styles.content}>{children}</main>
      <HotNewsWidget className={styles.aside} />
    </div>
  </>
);

export default PageLayout;
