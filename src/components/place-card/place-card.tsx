import { Link } from 'react-router-dom';
import classNames from 'classnames';

import StarLabel, { StarLabelProps } from '../star-label/star-label';

export type PlaceCardProps = {
  title: string | JSX.Element;
  placeType: string;
  mark?: string;
  priceValue: number;
  priceSuffix: string;
  currencyToken?: string;
  starLabel: StarLabelProps;
  imageSrc: string;
  placeLinkSrc: string;
  isBookmark: boolean;
  className?: string;
  imageClassName?: string;
  infoCardClassName?: string;
};

export default function PlaceCard({
  title,
  placeType,
  mark,
  priceValue,
  priceSuffix,
  currencyToken = '€',
  starLabel,
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
    <article className={cardClass}>
      {mark &&
      <div className="place-card__mark">
        <span>{mark}</span>
      </div>}
      <div className={imageCardClass}>
        <Link to={placeLinkSrc}>
          <img
            className="place-card__image"
            src={imageSrc}
            width={260}
            height={200}
            alt="Place image"
          />
        </Link>
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

        <StarLabel {...starLabel} />

        <h2 className="place-card__name">
          <Link to={placeLinkSrc}>{title}</Link>
        </h2>
        <p className="place-card__type">{placeType}</p>
      </div>
    </article>
  );
}
