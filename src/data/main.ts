import { MainProps } from '../pages/main/main';
import { MainTabsProps } from '../pages/main/components/main-tabs/main-tabs';
import { MainSortProps } from '../pages/main/components/main-sort/main-sort';

export const mainSortData: MainSortProps = {
  options: [
    {
      text: 'Popular',
    },
    {
      text: 'Price: low to high',
    },
    {
      text: 'Price: high to low',
    },
    {
      text: 'Top rated first',
    },
  ],
};

export const mainTabsData: MainTabsProps = {
  list: [
    {
      href: '#',
      text: 'Paris',
    },
    {
      href: '#',
      text: 'Cologne',
    },
    {
      href: '#',
      text: 'Brussels',
    },
    {
      href: '#',
      isActive: true,
      text: 'Amsterdam',
    },
    {
      href: '#',
      text: 'Hamburg',
    },
    {
      href: '#',
      text: 'Dusseldorf',
    },
  ],
};

export const mainData: MainProps = {
  placesCount: 312,
  placesCity: 'Amsterdam',
  mainTabs: mainTabsData,
  mainSort: mainSortData,
  cards: [
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
      imageSrc: 'img/apartment-01.jpg',
      placeLinkSrc: '#',
      isBookmark: false,
    },
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
      imageSrc: 'img/apartment-03.jpg',
      placeLinkSrc: '#',
      isBookmark: false,
    },
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
  ],
};
