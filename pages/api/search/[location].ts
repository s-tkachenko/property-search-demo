import { NextApiRequest, NextApiResponse } from 'next';

import { fakeDelay } from '../../../services/utils';
import data from '../mock-data.json';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { location }
  } = req;
  const queryLocation = Array.isArray(location) ? location[0] : location;
  const query = queryLocation.toLowerCase();
  const filteredData = data.filter((el) => el?.city?.toLowerCase().includes(query));

  await fakeDelay();

  res.statusCode = 200;
  res.json(filteredData);
};
