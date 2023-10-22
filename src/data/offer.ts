import { OfferProps } from '../pages/offer/offer';

export const offerData: OfferProps = {
  gallery: {
    slides: [
      {
        className: 'offer__image',
        src: 'img/room.jpg',
        alt: 'Photo studio',
      },
      {
        className: 'offer__image',
        src: 'img/apartment-01.jpg',
        alt: 'Photo studio',
      },
      {
        className: 'offer__image',
        src: 'img/apartment-02.jpg',
        alt: 'Photo studio',
      },
      {
        className: 'offer__image',
        src: 'img/apartment-03.jpg',
        alt: 'Photo studio',
      },
      {
        className: 'offer__image',
        src: 'img/studio-01.jpg',
        alt: 'Photo studio',
      },
      {
        className: 'offer__image',
        src: 'img/apartment-01.jpg',
        alt: 'Photo studio',
      },
    ],
  },
  placeInfo: {
    title: 'Beautiful & luxurious studio at great location',
    mark: 'Premium',
    rate: 4.8,
    priceValue: 120,
    priceSuffix: 'night',
    currencyToken: '€',
    starLabel: {
      value: 4.8,
      showValueBlock: true,
      parentClassName: 'offer',
    },
    features: [
      {
        iconClassName: 'entire',
        text: 'Apartment',
      },
      {
        iconClassName: 'bedrooms',
        text: '3 Bedrooms',
      },
      {
        iconClassName: 'adults',
        text: 'Max 4 adults',
      },
    ],
  },
  placeContent: [
    'Wi-Fi',
    'Washing machine',
    'Towels',
    'Heating',
    'Coffee machine',
    'Baby seat',
    'Kitchen',
    'Dishwasher',
    'Cabel TV',
    'Fridge',
  ],
  reviewItems: [
    {
      comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
      date: 'Thu Oct 19 2023 20:08:27 GMT+0300 (Москва, стандартное время)',
      rating: 4,
      user: {
        avatarUrl: 'img/avatar-max.jpg',
        name: 'Max'
      },
    },
  ],
  nearPlaces: {
    title: 'Other places in the neighbourhood',
    cards: [
      {
        className: 'cities__card',
        imageClassName: 'cities__image-wrapper',
        title: 'Wood and stone place',
        placeType: 'Room',
        priceValue: 80,
        priceSuffix: 'night',
        currencyToken: '€',
        starLabel: {
          value: 4,
          parentClassName: 'place-card',
        },
        imageSrc: 'img/room.jpg',
        placeLinkSrc: '#',
        isBookmark: true,
      },
      {
        className: 'cities__card',
        imageClassName: 'cities__image-wrapper',
        title: 'Canal View Prinsengracht',
        placeType: 'Apartment',
        priceValue: 132,
        priceSuffix: 'night',
        currencyToken: '€',
        starLabel: {
          value: 4,
          parentClassName: 'place-card',
        },
        imageSrc: 'img/apartment-02.jpg',
        placeLinkSrc: '#',
        isBookmark: false,
      },
      {
        className: 'cities__card',
        imageClassName: 'cities__image-wrapper',
        title: 'Beautiful & luxurious apartment at great location',
        placeType: 'Apartment',
        mark: 'Premium',
        priceValue: 120,
        priceSuffix: 'night',
        currencyToken: '€',
        starLabel: {
          value: 4,
          parentClassName: 'place-card',
        },
        imageSrc: 'img/apartment-03.jpg',
        placeLinkSrc: '#',
        isBookmark: false,
      },
    ]
  },
};
