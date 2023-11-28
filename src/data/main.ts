import { offersMocks } from '../mocks/offers';
import { MainSortProps } from '../pages/main/components/main-sort/main-sort';
import { MainTabsProps } from '../pages/main/components/main-tabs/main-tabs';
import { MainPageProps } from '../pages/main/main';

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

export const mainData: MainPageProps = {
  mainTabs: mainTabsData,
  mainSort: mainSortData,
  cards: offersMocks,
};
