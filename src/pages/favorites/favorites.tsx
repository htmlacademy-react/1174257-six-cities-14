import uniqid from 'uniqid';
import FavoritesItem, { FavoritesItemProps } from './components/favorites-item/favorites-item';
import Layout from '../../components/layout/layout';
import { Helmet } from 'react-helmet-async';

export type FavoritesProps = {
  list: FavoritesItemProps[];
}

export default function Favorites({list}: FavoritesProps): JSX.Element {
  return (
    <Layout
      className={{gray: true}}
      mainElClassName={{mod: 'favorites'}}
      hasFooter
    >
      <>
        <Helmet>
          <title>6 cities: favorites</title>
        </Helmet>

        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {list.map((item: FavoritesItemProps) => <FavoritesItem {...item} key={uniqid()} />)}
            </ul>
          </section>
        </div>
      </>
    </Layout>
  );
}
