import MainTabs, { MainTabsProps } from './components/main-tabs/main-tabs';
import PlaceCard, { PlaceCardProps } from '../../components/place-card/place-card';
import Map from '../../components/map/map';
import MainSort, { MainSortProps } from './components/main-sort/main-sort';
import uniqid from 'uniqid';
import Layout from '../../components/layout/layout';
import { Helmet } from 'react-helmet-async';

export type MainProps = {
  placesCount: number;
  placesCity: string;
  cards: PlaceCardProps[];
  mainTabs: MainTabsProps;
  mainSort: MainSortProps;
}

export default function Main({
  placesCount,
  placesCity,
  cards,
  mainTabs,
  mainSort,
}: MainProps): JSX.Element {
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
              <b className="places__found">{placesCount} places to stay in {placesCity}</b>

              <MainSort {...mainSort} />

              <div className="cities__places-list places__list tabs__content">
                {cards.map((card: PlaceCardProps) => <PlaceCard {...card} key={uniqid()}/>)}
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
