import uniqid from 'uniqid';
import { MainProps } from '../pages/main/main';
import { MainTabsProps } from '../components/main-tabs/main-tabs';
import { MainSortProps } from '../components/main-sort/main-sort';

export const mainSortData: MainSortProps = {
  options: [
    {
      id: uniqid(),
      text: 'Popular',
    },
    {
      id: uniqid(),
      text: 'Price: low to high',
    },
    {
      id: uniqid(),
      text: 'Price: high to low',
    },
    {
      id: uniqid(),
      text: 'Top rated first',
    },
  ],
};

export const mainTabsData: MainTabsProps = {
  list: [
    {
      href: '#',
      text: 'Paris',
      id: uniqid(),
    },
    {
      href: '#',
      text: 'Cologne',
      id: uniqid(),
    },
    {
      href: '#',
      text: 'Brussels',
      id: uniqid(),
    },
    {
      href: '#',
      isActive: true,
      text: 'Amsterdam',
      id: uniqid(),
    },
    {
      href: '#',
      text: 'Hamburg',
      id: uniqid(),
    },
    {
      href: '#',
      text: 'Dusseldorf',
      id: uniqid(),
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
      id: uniqid(),
      className: 'cities__card',
      imageClassName: 'cities__image-wrapper',
      title: 'Beautiful & luxurious apartment at great location',
      placeType: 'Apartment',
      mark: 'Premium',
      priceValue: 120,
      priceSuffix: 'night',
      currencyToken: '€',
      starRating: 4,
      imageSrc: 'img/apartment-01.jpg',
      placeLinkSrc: '#',
      isBookmark: false,
    },
    {
      id: uniqid(),
      className: 'cities__card',
      imageClassName: 'cities__image-wrapper',
      title: 'Wood and stone place',
      placeType: 'Room',
      priceValue: 80,
      priceSuffix: 'night',
      currencyToken: '€',
      starRating: 4,
      imageSrc: 'img/room.jpg',
      placeLinkSrc: '#',
      isBookmark: true,
    },
    {
      id: uniqid(),
      className: 'cities__card',
      imageClassName: 'cities__image-wrapper',
      title: 'Canal View Prinsengracht',
      placeType: 'Apartment',
      priceValue: 132,
      priceSuffix: 'night',
      currencyToken: '€',
      starRating: 4,
      imageSrc: 'img/apartment-02.jpg',
      placeLinkSrc: '#',
      isBookmark: false,
    },
    {
      id: uniqid(),
      className: 'cities__card',
      imageClassName: 'cities__image-wrapper',
      title: 'Nice, cozy, warm big bed apartment',
      placeType: 'Apartment',
      mark: 'Premium',
      priceValue: 180,
      priceSuffix: 'night',
      currencyToken: '€',
      starRating: 5,
      imageSrc: 'img/apartment-03.jpg',
      placeLinkSrc: '#',
      isBookmark: false,
    },
    {
      id: uniqid(),
      className: 'cities__card',
      imageClassName: 'cities__image-wrapper',
      title: 'Wood and stone place',
      placeType: 'Room',
      priceValue: 80,
      priceSuffix: 'night',
      currencyToken: '€',
      starRating: 4,
      imageSrc: 'img/room.jpg',
      placeLinkSrc: '#',
      isBookmark: true,
    },
  ],
};
