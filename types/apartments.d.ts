export interface Apartment {
    id: string;
    city: string;
    street: string;
    bedroom: number;
    priceTag: string;
    imageUrl: string;
    phone: string;
    agent: string;
}

export interface RecentSearchLocation {
    value: string;
    timestamp: number;
}

export interface ServerResponseApartmentList {
    apartments: Apartment[];
    page: number;
    totalPages: number;
}

export interface ServerResponseApartmentDetails {
    apartment?: Apartment;
}

export interface ServerResponseApartmentIds {
    ids?: string[];
}

export interface ApartmentId {
    params: {
      id: string
    };
}