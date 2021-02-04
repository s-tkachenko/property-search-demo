import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import ApartmentCard from '../../components/ApartmentCard/ApartmentCard';
import ContentGrid from '../../components/ContentGrid/ContentGrid';
import { Apartment } from '../../types/apartment';

export default function ForSale() {
  const router = useRouter();
  const { location } = router.query;

  const [apartments, setApartments] = useState([]);

  useEffect(() => {
    fetch(`/api/search/${location}`)
      .then((response) => response.json())
      .then((data) => {
        setApartments(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, [location]);

  return (
    <ContentGrid>
      {apartments.map((item: Apartment) => (
        <ApartmentCard key={item.id} item={item} />
      ))}
    </ContentGrid>
  );
}
