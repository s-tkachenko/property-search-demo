import type { NextApiRequest, NextApiResponse } from 'next';

import { DEFAULT, STATUS_CODE } from '../../../constants/common';
import {
  getFullPrice,
  getImageUrl,
  getRouterParamIntValue,
  getRouterParamStringValue
} from '../../../services/api/helpers';
import data from '../mock-data.json';

export default (req: NextApiRequest, res: NextApiResponse): void => {
  const {
    query: { location, page }
  } = req;
  const currentPage = getRouterParamIntValue(page) || DEFAULT.PAGE_INDEX;
  const queryLocation = getRouterParamStringValue(location).toLowerCase();
  const filtered = data.filter((el) => el.city.toLowerCase().includes(queryLocation));
  const apartments = filtered.map((el) => ({
    id: el.id,
    city: el.city,
    street: el.street,
    bedroom: el.bedroom,
    priceTag: getFullPrice(el.price),
    imageUrl: getImageUrl(el.image)
  }));

  const limitPerPage = DEFAULT.PAGE_LIMIT;
  const totalElements = apartments.length;
  const totalPages = Math.ceil(totalElements / limitPerPage);
  const paginationStart = limitPerPage * (currentPage - 1);
  const paginationEnd = paginationStart + limitPerPage;
  const elementsList = apartments.slice(paginationStart, paginationEnd);

  res.statusCode = STATUS_CODE.SUCCESS;
  res.json({
    apartments: elementsList,
    page: currentPage,
    totalPages,
    total: totalElements
  });
};
