export type MapLocationProps = {
  latitude: number;
  longitude: number;
  zoom: number;
}

export type OfferProps = {
  bedrooms: number;
  city: {
    location: MapLocationProps;
    name: string;
  };
  description: string;
  goods: string[];
  host: {
    avatarUrl: string;
    id: number;
    isPro: boolean;
    name: string;
  };
  id: number;
  images: string[];
  isFavorite: boolean;
  isPremium: boolean;
  location: MapLocationProps;
  maxAdults: number;
  previewImage: string;
  price: number;
  rating: number;
  title: string;
  type: string;
}

export type OffersProps = OfferProps[]
