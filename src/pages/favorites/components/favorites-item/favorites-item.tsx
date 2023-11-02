import { Link } from 'react-router-dom';
import uniqid from 'uniqid';

import PlaceCard, { PlaceCardProps } from '../../../../components/place-card/place-card';

export type FavoritesItemProps = {
  href: string;
  placeCity: string;
  cards: PlaceCardProps[];
};

export default function FavoritesItem({
  href,
  placeCity,
  cards,
}: FavoritesItemProps): JSX.Element {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <Link className="locations__item-link" to={href}>
            <span>{placeCity}</span>
          </Link>
        </div>
      </div>
      <div className="favorites__places">
        {cards.map((card: PlaceCardProps) => <PlaceCard {...card} key={uniqid()}/>)}
      </div>
    </li>
  );
}
