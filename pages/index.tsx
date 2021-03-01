import { useEffect, useState } from 'react';

import PageHead from '../components/PageHead/PageHead';
import RecentSearches from '../components/RecentSearches/RecentSearches';
import SearchBar from '../components/SearchBar/SearchBar';
import TITLE from '../constants/titles';
import { getRecentSearchList } from '../services/local-storage/recent-searches';
import type { RecentSearchLocation } from '../types/apartments';

export default function Home() {
  const [list, setList] = useState<RecentSearchLocation[]>([]);

  useEffect(() => {
    setList(getRecentSearchList());
  }, []);

  return (
    <>
      <PageHead title={TITLE.HOME} />
      <SearchBar />
      <RecentSearches list={list} />
    </>
  );
}
