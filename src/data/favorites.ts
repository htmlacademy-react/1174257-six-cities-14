import { offersMocks } from '../mocks/offers';
import { FavoritesPageProps } from '../pages/favorites/favorites';

export const favoritesData: FavoritesPageProps = {
  list: offersMocks.filter((card) => card.isFavorite),
};
