import Link from 'next/link';

import { CLIENT } from '../../constants/routes';
import { Apartment } from '../../types/apartments';
import ApartmentCard from '../ApartmentCard/ApartmentCard';
import ContentGrid from '../ContentGrid/ContentGrid';

type Props = {
  apartments: Apartment[];
};

export default function ApartmentsGrid({ apartments }: Props) {
  return (
    <ContentGrid>
      {apartments.map((apartment: Apartment) => (
        <Link href={CLIENT.APARTMENT_BY_ID(apartment.id)} key={apartment.id}>
          <a>
            <ApartmentCard apartment={apartment} />
          </a>
        </Link>
      ))}
    </ContentGrid>
  );
}
