import uniqid from 'uniqid';
import { FavoritesProps } from '../pages/favorites/favorites';

export const favoritesData: FavoritesProps = {
  list: [
    {
      placeCity: 'Amsterdam',
      cards: [
        {
          id: uniqid(),
          className: 'favorites__card',
          imageClassName: 'favorites__image-wrapper',
          infoCardClassName: 'favorites__card-info',
          title: 'Nice, cozy, warm big bed apartment',
          placeType: 'Apartment',
          mark: 'Premium',
          priceValue: 180,
          priceSuffix: 'night',
          currencyToken: '€',
          starRating: 5,
          imageSrc: 'img/apartment-small-03.jpg',
          placeLinkSrc: '#',
          isBookmark: true,
        },
        {
          id: uniqid(),
          className: 'favorites__card',
          imageClassName: 'favorites__image-wrapper',
          infoCardClassName: 'favorites__card-info',
          title: 'Wood and stone place',
          placeType: 'Room',
          priceValue: 80,
          priceSuffix: 'night',
          currencyToken: '€',
          starRating: 4,
          imageSrc: 'img/room-small.jpg',
          placeLinkSrc: '#',
          isBookmark: true,
        },
      ],
    },
    {
      placeCity: 'Colonge',
      cards: [
        {
          id: uniqid(),
          className: 'favorites__card',
          imageClassName: 'favorites__image-wrapper',
          infoCardClassName: 'favorites__card-info',
          title: 'White castle',
          placeType: 'Apartment',
          priceValue: 180,
          priceSuffix: 'night',
          currencyToken: '€',
          starRating: 5,
          imageSrc: 'img/apartment-small-04.jpg',
          placeLinkSrc: '#',
          isBookmark: true,
        },
      ],
    },
  ],
};
