import { Helmet } from 'react-helmet-async';
import uniqid from 'uniqid';
import Layout from '../../components/layout/layout';
import { mainTabsData } from '../../data/main';
import { OffersProps } from '../../types';
import FavoritesItem from './components/favorites-item/favorites-item';

export type FavoritesPageProps = {
  list: OffersProps;
}

export default function Favorites({list}: FavoritesPageProps): JSX.Element {

  return (
    <Layout
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
              {
                mainTabsData.list
                  .map((city) => list.filter((card) => (card.city.name.toLowerCase() === city.text.toLowerCase())))
                  .map((favoritesItem) => (
                    !!favoritesItem.length &&
                    <FavoritesItem
                      cards={favoritesItem}
                      placeCity={favoritesItem[0].city.name}
                      href={mainTabsData.list.find((item) => (
                        item.text.toLowerCase() === favoritesItem[0].city.name.toLowerCase()
                      ))?.href ?? '#'}
                      key={uniqid()}
                    />)
                  )
              }
            </ul>
          </section>
        </div>
      </>
    </Layout>
  );
}
