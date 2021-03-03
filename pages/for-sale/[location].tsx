import { useRouter } from 'next/router';
import { useEffect } from 'react';
import useSWR from 'swr';

import ApartmentsList from '../../components/ApartmentsList/ApartmentsList';
import PageHead from '../../components/PageHead/PageHead';
import SearchBar from '../../components/SearchBar/SearchBar';
import { DEFAULT } from '../../constants/common';
import { API } from '../../constants/routes';
import TITLE from '../../constants/titles';
import {
  fetcher,
  getRouterParamIntValue,
  getRouterParamStringValue
} from '../../services/api/helpers';
import { saveRecentSearchQuery } from '../../services/local-storage/recent-searches';
import { ServerResponseApartmentList } from '../../types/apartments';

export default function ApartmentsListByLocation() {
  const router = useRouter();
  const location = getRouterParamStringValue(router.query.location);
  const pageIndex = getRouterParamIntValue(router.query.page) || DEFAULT.PAGE_INDEX;

  useEffect(() => {
    if (location) {
      saveRecentSearchQuery(location);
    }
  }, [location]);

  const { data, error } = useSWR<ServerResponseApartmentList, Error>(
    API.LOCATION_SEARCH(location, pageIndex),
    fetcher
  );

  return (
    <>
      <PageHead title={TITLE.SEARCH_RESULTS(location)} />
      <SearchBar value={location} />
      <ApartmentsList error={error} data={data} location={location} />
    </>
  );
}
