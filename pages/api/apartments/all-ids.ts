import { NextApiRequest, NextApiResponse } from 'next';

import { STATUS_CODE } from '../../../constants/common';
import data from '../mock-data.json';

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  const ids = data.map((el) => el.id);

  res.statusCode = STATUS_CODE.SUCCESS;
  res.json({
    ids
  });
};
