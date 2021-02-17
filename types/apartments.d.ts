export type Apartment = {
  id: string;
  city: string;
  street: string;
  bedroom: number;
  priceTag: string;
  imageUrl: string;
  phone: string;
  agent: string;
};

export type RecentSearchLocation = {
  value: string;
  timestamp: number;
};

export type ServerResponseApartmentList = {
  apartments: Apartment[];
  page: number;
  totalPages: number;
}

export type ApartmentId = {
  params: string;
};