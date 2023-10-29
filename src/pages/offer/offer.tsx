import Map from '../../components/map/map';
import { OfferGalleryProps } from './components/offer-gallery/offer-gallery';
import PlaceCard, { PlaceCardProps } from '../../components/place-card/place-card';
import OfferGallery from './components/offer-gallery/offer-gallery';
import Button from '../../ui/button/button';
import StarLabel, { StarLabelProps } from '../../components/star-label/star-label';
import uniqid from 'uniqid';
import Image from '../../ui/image/image';
import Reviews from '../../components/reviews/reviews';
import { ReviewItemProps } from '../../components/reviews/components/review-item/review-item';
import Layout from '../../components/layout/layout';

type OfferFeaturesProps = {
  iconClassName: string;
  text: string;
}[];

export type OfferProps = {
  gallery: OfferGalleryProps;
  placeInfo: {
    title: string;
    mark?: string;
    rate: number;
    priceValue: number;
    priceSuffix: string;
    currencyToken: string;
    features: OfferFeaturesProps;
    starLabel: StarLabelProps;
  };
  placeContent: string[];
  reviewItems: ReviewItemProps[];
  nearPlaces: {
    title: string;
    cards: PlaceCardProps[];
  };
}

export default function Offer({
  gallery,
  placeInfo,
  placeContent,
  reviewItems,
  nearPlaces,
}: OfferProps): JSX.Element {
  return (
    <Layout
      mainElClassName={{mod: 'offer'}}
    >
      <>
        <section className="offer">

          <OfferGallery {...gallery} />

          <div className="offer__container container">
            <div className="offer__wrapper">
              {placeInfo.mark && (
                <div className="offer__mark">
                  <span>{placeInfo.mark}</span>
                </div>
              )}
              <div className="offer__name-wrapper">
                <h1 className="offer__name">Beautiful &amp; luxurious studio at great location</h1>

                <Button className="offer__bookmark-button">
                  <svg className="offer__bookmark-icon" width={31} height={33}>
                    <use xlinkHref="#icon-bookmark" />
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </Button>

              </div>

              <StarLabel {...placeInfo.starLabel} />

              <ul className="offer__features">
                {placeInfo.features.map((item) => (
                  <li
                    key={uniqid()}
                    className={`offer__feature offer__feature--${item.iconClassName}`}
                  >
                    {item.text}
                  </li>
                ))}
              </ul>

              <div className="offer__price">
                <b className="offer__price-value">{placeInfo.currencyToken}{placeInfo.priceValue}</b>
                <span className="offer__price-text">&nbsp;{placeInfo.priceSuffix}</span>
              </div>

              <div className="offer__inside">
                <h2 className="offer__inside-title">What&rsquo;s inside</h2>
                <ul className="offer__inside-list">
                  {placeContent.map((item) => (
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
                      src="img/avatar-angelina.jpg"
                      width={74}
                      height={74}
                      alt="Host avatar"
                    />
                  </div>
                  <span className="offer__user-name">Angelina</span>
                  <span className="offer__user-status">Pro</span>
                </div>

                <div className="offer__description">
                  <p className="offer__text">
                    A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
                  </p>
                  <p className="offer__text">
                    An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.
                  </p>
                </div>
              </div>

              <Reviews reviewItems={reviewItems} className='offer__reviews' />
            </div>
          </div>

          <Map className='offer__map'/>

        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">
              {nearPlaces.title}
            </h2>
            <div className="near-places__list places__list">
              {nearPlaces.cards.map((card: PlaceCardProps) => <PlaceCard {...card} key={uniqid()}/>)}
            </div>
          </section>
        </div>
      </>
    </Layout>
  );
}
