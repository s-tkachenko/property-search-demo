import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import ApartmentCard from '../../components/ApartmentCard/ApartmentCard';
import ContentGrid from '../../components/ContentGrid/ContentGrid';
import { Apartment } from '../../types/apartment';

export default function ForSale() {
  const router = useRouter();
  const { location } = router.query;

  const [apartments, setApartments] = useState<Apartment[]>([]);

  useEffect(() => {
    fetch(`/api/search/${location}`)
      .then((response) => response.json())
      .then((data) => {
        const { apartments } = data;
        const apartmentsArr: Apartment[] = Array.isArray(apartments) ? apartments : [];
        setApartments(apartmentsArr);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, [location]);

  return (
    <ContentGrid>
      {apartments.map((apartment: Apartment) => (
        <Link href={`/apartments/${apartment.id}`} key={apartment.id}>
          <a>
            <ApartmentCard apartment={apartment} />
          </a>
        </Link>
      ))}
    </ContentGrid>
  );
}
