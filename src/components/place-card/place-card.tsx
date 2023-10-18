import classNames from 'classnames';

export type PlaceCardProps = {
  id: string;
  title: string | JSX.Element;
  placeType: string;
  mark?: string;
  priceValue: number;
  priceSuffix: string;
  currencyToken?: string;
  starRating: 1 | 2 | 3 | 4 | 5;
  imageSrc: string;
  placeLinkSrc: string;
  isBookmark: boolean;
  className?: string;
  imageClassName?: string;
  infoCardClassName?: string;
};

export default function PlaceCard({
  id,
  title,
  placeType,
  mark,
  priceValue,
  priceSuffix,
  currencyToken = '€',
  starRating,
  imageSrc,
  placeLinkSrc,
  isBookmark,
  className,
  imageClassName,
  infoCardClassName,
}: PlaceCardProps) {
  const cardClass = classNames('place-card', className);
  const imageCardClass = classNames('place-card__image-wrapper', imageClassName);
  const infoCardClass = classNames('place-card__info', infoCardClassName);

  return (
    <article className={cardClass} key={id}>
      {mark &&
      <div className="place-card__mark">
        <span>{mark}</span>
      </div>}
      <div className={imageCardClass}>
        <a href={placeLinkSrc}>
          <img
            className="place-card__image"
            src={imageSrc}
            width={260}
            height={200}
            alt="Place image"
          />
        </a>
      </div>
      <div className={infoCardClass}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">{currencyToken}{priceValue} </b>
            <span className="place-card__price-text">
                /&nbsp;{priceSuffix}
            </span>
          </div>
          <button
            className={`place-card__bookmark-button button ${isBookmark && 'place-card__bookmark-button--active'}`}
            type="button"
          >
            <svg
              className="place-card__bookmark-icon"
              width={18}
              height={19}
            >
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">
              {
                isBookmark ?
                  'In bookmarks' :
                  'To bookmarks'
              }
            </span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${String(starRating * 20)}%`}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href={placeLinkSrc}>{title}</a>
        </h2>
        <p className="place-card__type">{placeType}</p>
      </div>
    </article>
  );
}
