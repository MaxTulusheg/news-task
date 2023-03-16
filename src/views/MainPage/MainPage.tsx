import React from 'react';

import PageLayout from 'components/PageLayout/PageLayout';
import { useNews } from 'hooks/useNews';

import NewsList from './components/NewsList/NewsList';

const MainPage = () => {
  const { news, error, isLoading } = useNews();

  return (
    <PageLayout>
      <NewsList news={news} isLoading={isLoading} error={error} />
    </PageLayout>
  );
};

export default MainPage;
