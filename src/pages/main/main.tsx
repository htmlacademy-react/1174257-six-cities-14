import { Helmet } from 'react-helmet-async';
import uniqid from 'uniqid';
import Layout from '../../components/layout/layout';
import Map from '../../components/map/map';
import PlaceCard, { PlaceCardProps } from '../../components/place-card/place-card';
import { OffersProps } from '../../types';
import MainSort, { MainSortProps } from './components/main-sort/main-sort';
import MainTabs, { MainTabsProps } from './components/main-tabs/main-tabs';

export type MainPageProps = {
  cards: OffersProps;
  mainTabs: MainTabsProps;
  mainSort: MainSortProps;
}

export default function Main({
  cards,
  mainTabs,
  mainSort,
}: MainPageProps): JSX.Element {
  return (
    <Layout
      isMainPage
      className={{gray: true, page: 'main'}}
      mainElClassName={{mod: 'index'}}
    >
      <>
        <Helmet>
          <title>6 cities</title>
        </Helmet>

        <h1 className="visually-hidden">Cities</h1>

        <MainTabs {...mainTabs}/>

        <div className="cities">
          <div className="cities__places-container container">

            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{cards.length} places to stay in {mainTabs.list.find((item) => item.isActive)?.text}</b>

              <MainSort {...mainSort} />

              <div className="cities__places-list places__list tabs__content">
                {cards.map((card: PlaceCardProps) => <PlaceCard {...card} className='cities__card' imageClassName='cities__image-wrapper' key={uniqid()}/>)}
              </div>
            </section>

            <div className="cities__right-section">
              <Map className='cities__map' />
            </div>

          </div>
        </div>
      </>
    </Layout>
  );
}
