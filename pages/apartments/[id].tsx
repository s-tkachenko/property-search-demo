import ApartmentCardFull from '../../components/ApartmentCardFull/ApartmentCardFull';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import PageHead from '../../components/PageHead/PageHead';
import TITLE from '../../constants/titles';
import { getAllApartmentIds, getApartmentById } from '../../services/api/apartments';
import type { Apartment } from '../../types/apartments';

interface Props {
  apartment: Apartment;
}

export default function ApartmentDetails({ apartment }: Props) {
  return (
    <>
      <PageHead title={TITLE.APARTMENT_DETAILS(apartment.street, apartment.city)} />
      {apartment ? <ApartmentCardFull apartment={apartment} /> : <ErrorMessage />}
    </>
  );
}

export async function getStaticPaths() {
  const paths = await getAllApartmentIds();

  return { paths, fallback: false };
}

interface StaticProps {
  params: {
    id: string;
  };
}

export async function getStaticProps({ params }: StaticProps) {
  const apartment = await getApartmentById(params.id);

  return { props: { apartment } };
}
