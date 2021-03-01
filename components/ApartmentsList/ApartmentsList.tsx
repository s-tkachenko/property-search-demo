import { useRouter } from 'next/router';

import MSG from '../../constants/messages';
import { CLIENT } from '../../constants/routes';
import type { ServerResponseApartmentList } from '../../types/apartments';
import ApartmentsGrid from '../ApartmentsGrid/ApartmentsGrid';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import Pagination from '../Pagination/Pagination';

interface Props {
  error?: Error;
  data?: ServerResponseApartmentList;
  location: string;
}

export default function ApartmentsList({ error, data, location }: Props) {
  const router = useRouter();

  const isNoResults = !Array.isArray(data?.apartments) || data?.apartments.length === 0;

  const handleRedirectToPage = async (page: number) =>
    router.push({
      pathname: CLIENT.FIND_APARTMENTS_BY_QUERY(location),
      query: { page }
    });

  if (error) {
    return <ErrorMessage message={MSG.ERROR_FAIL_TO_LOAD} />;
  }
  if (!data) {
    return <LoadingSpinner />;
  }
  if (isNoResults) {
    return <ErrorMessage message={MSG.ERROR_NO_RESULTS(location)} />;
  }

  return (
    <>
      <ApartmentsGrid apartments={data.apartments} />
      <Pagination
        currentPage={data.page}
        totalPages={data.totalPages}
        onClick={handleRedirectToPage}
      />
    </>
  );
}
