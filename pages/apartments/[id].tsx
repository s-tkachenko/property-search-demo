import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import ApartmentCardFull from '../../components/ApartmentCardFull/ApartmentCardFull';
import { Apartment } from '../../types/apartment';

export default function ApartmentDetails() {
  const router = useRouter();
  const { id } = router.query;

  const [apartment, setApartment] = useState<Apartment>();

  useEffect(() => {
    fetch(`/api/apartments/${id}`)
      .then((response) => response.json())
      .then((data) => setApartment(data?.apartment))
      .catch((error) => {
        console.error('Error:', error);
      });
  }, [id]);

  return <>{apartment && <ApartmentCardFull apartment={apartment} />}</>;
}
