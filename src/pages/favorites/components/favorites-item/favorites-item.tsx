import PlaceCard, { PlaceCardProps } from '../../../../components/place-card/place-card';
import uniqid from 'uniqid';

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
          <a className="locations__item-link" href={href}>
            <span>{placeCity}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {cards.map((card: PlaceCardProps) => <PlaceCard {...card} key={uniqid()}/>)}
      </div>
    </li>
  );
}