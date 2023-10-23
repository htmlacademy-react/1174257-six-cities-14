import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import uniqid from 'uniqid';
import FavoritesItem, { FavoritesItemProps } from './components/favorites-item/favorites-item';

export type FavoritesProps = {
  list: FavoritesItemProps[];
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
              {list.map((item: FavoritesItemProps) => <FavoritesItem {...item} key={uniqid()} />)}
            </ul>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
