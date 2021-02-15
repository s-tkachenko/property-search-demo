import Link from 'next/link';

import MSG from '../../constants/messages';
import { CLIENT } from '../../constants/routes';
import { Apartment } from '../../types/apartments';
import ApartmentCard from '../ApartmentCard/ApartmentCard';
import ContentGrid from '../ContentGrid/ContentGrid';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import Pagination from '../Pagination/Pagination';

type Props = {
  error: Error;
  data: {
    apartments: Apartment[];
    page: number;
    totalPages: number;
  };
  location: string;
};

export default function ApartmentsList({ error, data, location }: Props) {
  const isNoResults = !Array.isArray(data?.apartments) || data.apartments.length === 0;

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
