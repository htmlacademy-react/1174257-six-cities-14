import classNames from 'classnames';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import uniqid from 'uniqid';
import Layout from '../../components/layout/layout';
import Map from '../../components/map/map';
import PlaceCard, { PlaceCardProps } from '../../components/place-card/place-card';
import { ReviewItemProps } from '../../components/reviews/components/review-item/review-item';
import Reviews from '../../components/reviews/reviews';
import StarLabel, { StarLabelProps } from '../../components/star-label/star-label';
import { OffersProps } from '../../types';
import Button from '../../ui/button/button';
import Image from '../../ui/image/image';
import { capitalizeFirstLetter } from '../../utils';
import NotFound from '../not-found/not-found';
import OfferGallery from './components/offer-gallery/offer-gallery';

export type OfferPageProps = {
  offers: OffersProps;
  nears: {
    cards: OffersProps;
  };
  reviews: ReviewItemProps[];
}

export default function Offer({
  offers,
  nears,
  reviews,
}: OfferPageProps): JSX.Element {
  const { id } = useParams();
  const offer = offers[Number(id) - 1];

  if (!offer) {
    return <NotFound />;
  }

  const features = [
    {text: capitalizeFirstLetter(offer.type), icon: 'entire'},
    {text: `${offer.bedrooms} Bedrooms`, icon: 'bedrooms'},
    {text: `Max ${offer.maxAdults} adults`, icon: 'adults'},
  ];

  const starLabel: StarLabelProps = {
    value: offer.rating,
    showValueBlock: true,
    parentClassName: 'offer',
  };

  return (
    <Layout
      mainElClassName={{mod: 'offer'}}
    >
      <>
        <Helmet>
          <title>6 cities: offer</title>
        </Helmet>

        <section className="offer">

          <OfferGallery images={offer.images} />

          <div className="offer__container container">
            <div className="offer__wrapper">
              {offer.isPremium && (
                <div className="offer__mark">
                  <span>Premium</span>
                </div>
              )}
              <div className="offer__name-wrapper">
                <h1 className="offer__name">{offer.title}</h1>

                <Button className={classNames('offer__bookmark-button', offer.isFavorite && 'offer__bookmark-button--active')}>
                  <svg className="offer__bookmark-icon" width={31} height={33}>
                    <use xlinkHref="#icon-bookmark" />
                  </svg>
                  <span className="visually-hidden">{offer.isFavorite ? 'In bookmarks' : 'To bookmarks'}</span>
                </Button>

              </div>

              <StarLabel {...starLabel} />

              <ul className="offer__features">
                {features.map((item) => (
                  <li
                    key={uniqid()}
                    className={`offer__feature offer__feature--${item.icon}`}
                  >
                    {item.text}
                  </li>
                ))}
              </ul>

              <div className="offer__price">
                <b className="offer__price-value">€{offer.price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>

              <div className="offer__inside">
                <h2 className="offer__inside-title">What&rsquo;s inside</h2>
                <ul className="offer__inside-list">
                  {offer.goods.map((item) => (
                    <li className="offer__inside-item" key={uniqid()}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>

                <div className="offer__host-user user">
                  <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                    <Image
                      className="offer__avatar user__avatar"
                      src={offer.host.avatarUrl}
                      width={74}
                      height={74}
                      alt="Host avatar"
                    />
                  </div>
                  <span className="offer__user-name">{offer.host.name}</span>
                  {offer.host.isPro &&
                    <span className="offer__user-status">Pro</span>}
                </div>

                <div className="offer__description">
                  <p className="offer__text">
                    {offer.description}
                  </p>
                </div>
              </div>

              <Reviews reviewItems={reviews} className='offer__reviews' />
            </div>
          </div>

          <Map className='offer__map'/>

        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              {nears.cards
                .filter((card: PlaceCardProps) => card.id !== Number(id))
                .splice(0, 3)
                .map((card: PlaceCardProps) => <PlaceCard {...card} className='cities__card' imageClassName='cities__image-wrapper' key={uniqid()}/>)}
            </div>
          </section>
        </div>
      </>
    </Layout>
  );
}
