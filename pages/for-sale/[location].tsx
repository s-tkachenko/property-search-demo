import Link from 'next/link';
import { useRouter } from 'next/router';
import useSWR from 'swr';

import ApartmentCard from '../../components/ApartmentCard/ApartmentCard';
import ContentGrid from '../../components/ContentGrid/ContentGrid';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import PageHead from '../../components/PageHead/PageHead';
import Pagination from '../../components/Pagination/Pagination';
import { DEFAULT } from '../../constants/common';
import MSG from '../../constants/messages';
import { API, CLIENT } from '../../constants/routes';
import TITLE from '../../constants/titles';
import {
  fetcher,
  getRouterParamIntValue,
  getRouterParamStringValue
} from '../../services/api/helpers';
import { Apartment } from '../../types/apartment';

export default function ForSale() {
  const router = useRouter();
  const location = getRouterParamStringValue(router?.query?.location);
  const pageIndex = getRouterParamIntValue(router?.query?.page) || DEFAULT.PAGE_INDEX;

  const { data, error } = useSWR(API.LOCATION_SEARCH(location, pageIndex), fetcher);
  const isNoResults = !Array.isArray(data?.apartments) || data.apartments.length === 0;

  if (error) return <ErrorMessage message={MSG.ERROR_FAIL_TO_LOAD} />;
  if (!data) return <LoadingSpinner />;
  if (isNoResults) return <ErrorMessage message={MSG.ERROR_NO_RESULTS(location)} />;

  return (
    <>
      <PageHead title={TITLE.SEARCH_RESULTS(location)} />
      <ContentGrid>
        {data.apartments.map((apartment: Apartment) => (
          <Link href={CLIENT.APARTMENT_BY_ID(apartment.id)} key={apartment.id}>
            <a>
              <ApartmentCard apartment={apartment} />
            </a>
          </Link>
        ))}
      </ContentGrid>
      <Pagination
        currentPage={data.page}
        totalPages={data.totalPages}
        baseUrl={CLIENT.FIND_APARTMENTS_BY_QUERY(location)}
      />
    </>
  );
}
