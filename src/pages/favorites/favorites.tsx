import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import uniqid from 'uniqid';
import PlaceCard, { PlaceCardProps } from '../../components/place-card/place-card';

export type FavoritesProps = {
  list: {
    placeCity: string;
    cards: PlaceCardProps[];
  }[];
}

export default function Favorites({list}: FavoritesProps): JSX.Element {
  return (
    <div className="page">
      <Header />

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {list.map((item) => (
                <li className="favorites__locations-items" key={uniqid()}>
                  <div className="favorites__locations locations locations--current">
                    <div className="locations__item">
                      <a className="locations__item-link" href="#">
                        <span>{item.placeCity}</span>
                      </a>
                    </div>
                  </div>
                  <div className="favorites__places">
                    {item.cards.map((card: PlaceCardProps) => <PlaceCard {...card} key={card.id}/>)}
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
