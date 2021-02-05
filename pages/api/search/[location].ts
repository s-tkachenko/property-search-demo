import { NextApiRequest, NextApiResponse } from 'next';

import { getFullPrice, getImageUrl } from '../../../services/mock-helper';
import { fakeDelay } from '../../../services/utils';
import data from '../mock-data.json';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { location }
  } = req;
  const queryLocation = Array.isArray(location) ? location[0] : location;
  const query = queryLocation.toLowerCase();
  const filtered = data.filter((el) => el?.city?.toLowerCase().includes(query));
  const apartments = filtered.map((el) => ({
    id: el.id,
    city: el.city,
    street: el.street,
    bedroom: el.bedroom,
    priceTag: getFullPrice(el.price),
    imageUrl: getImageUrl(el.image)
  }));

  await fakeDelay();

  res.statusCode = 200;
  res.json({
    apartments
  });
};
