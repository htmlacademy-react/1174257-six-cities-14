import { FavoritesProps } from '../pages/favorites/favorites';

export const favoritesData: FavoritesProps = {
  list: [
    {
      placeCity: 'Amsterdam',
      href: '#',
      cards: [
        {
          className: 'favorites__card',
          imageClassName: 'favorites__image-wrapper',
          infoCardClassName: 'favorites__card-info',
          title: 'Nice, cozy, warm big bed apartment',
          placeType: 'Apartment',
          mark: 'Premium',
          priceValue: 180,
          priceSuffix: 'night',
          currencyToken: '€',
          starLabel: {
            value: 5,
            parentClassName: 'place-card',
          },
          imageSrc: 'img/apartment-small-03.jpg',
          placeLinkSrc: '/offer/213',
          isBookmark: true,
        },
        {
          className: 'favorites__card',
          imageClassName: 'favorites__image-wrapper',
          infoCardClassName: 'favorites__card-info',
          title: 'Wood and stone place',
          placeType: 'Room',
          priceValue: 80,
          priceSuffix: 'night',
          currencyToken: '€',
          starLabel: {
            value: 5,
            parentClassName: 'place-card',
          },
          imageSrc: 'img/room-small.jpg',
          placeLinkSrc: '/offer/532',
          isBookmark: true,
        },
      ],
    },
    {
      placeCity: 'Colonge',
      href: '#',
      cards: [
        {
          className: 'favorites__card',
          imageClassName: 'favorites__image-wrapper',
          infoCardClassName: 'favorites__card-info',
          title: 'White castle',
          placeType: 'Apartment',
          priceValue: 180,
          priceSuffix: 'night',
          currencyToken: '€',
          starLabel: {
            value: 4,
            parentClassName: 'place-card',
          },
          imageSrc: 'img/apartment-small-04.jpg',
          placeLinkSrc: '/offer/25',
          isBookmark: true,
        },
      ],
    },
  ],
};
