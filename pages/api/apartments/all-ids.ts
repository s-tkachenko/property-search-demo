import type { NextApiRequest, NextApiResponse } from 'next';

import { STATUS_CODE } from '../../../constants/common';
import data from '../mock-data.json';

export default (req: NextApiRequest, res: NextApiResponse): void => {
  const ids = data.map((el) => el.id);

  res.statusCode = STATUS_CODE.SUCCESS;
  res.json({
    ids
  });
};
