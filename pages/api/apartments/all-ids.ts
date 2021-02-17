import { NextApiRequest, NextApiResponse } from 'next';

import data from '../mock-data.json';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const ids = data.map((el) => el.id);

  res.statusCode = 200;
  res.json({
    ids
  });
};
