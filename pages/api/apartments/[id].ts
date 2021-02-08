import { NextApiRequest, NextApiResponse } from 'next';

import { getFullPrice, getImageUrl } from '../../../services/api/helpers';
import { fakeDelay } from '../../../services/utils';
import data from '../mock-data.json';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { id }
  } = req;

  const rawApartmentId = Array.isArray(id) ? id[0] : id;
  const apartmentId = rawApartmentId?.toLowerCase();
  const apartmentData = data.find((item) => item?.id?.toLowerCase() === apartmentId);
  const apartment = apartmentData
    ? {
        ...apartmentData,
        priceTag: getFullPrice(apartmentData.price),
        imageUrl: getImageUrl(apartmentData.image)
      }
    : null;

  await fakeDelay();

  res.statusCode = 200;
  res.json({
    apartment
  });
};
