import { NextApiRequest, NextApiResponse } from 'next';

import { fakeDelay } from '../../../services/utils';
import data from '../mock-data.json';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const ids = data.map((el) => el.id);

  await fakeDelay();

  res.statusCode = 200;
  res.json({
    ids
  });
};
