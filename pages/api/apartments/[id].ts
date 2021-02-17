import { NextApiRequest, NextApiResponse } from 'next';

import { STATUS_CODE } from '../../../constants/common';
import { getFullPrice, getImageUrl } from '../../../services/api/helpers';
import data from '../mock-data.json';

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
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

  res.statusCode = STATUS_CODE.SUCCESS;
  res.json({
    apartment
  });
};
