import { useRouter } from 'next/router';
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

export default function ForSale() {
  const router = useRouter();
  const location = getRouterParamStringValue(router?.query?.location);
  const pageIndex = getRouterParamIntValue(router?.query?.page) || DEFAULT.PAGE_INDEX;

  const { data, error } = useSWR(API.LOCATION_SEARCH(location, pageIndex), fetcher);

  return (
    <>
      <PageHead title={TITLE.SEARCH_RESULTS(location)} />
      <SearchBar value={location} />
      <ApartmentsList error={error} data={data} location={location} />
    </>
  );
}
