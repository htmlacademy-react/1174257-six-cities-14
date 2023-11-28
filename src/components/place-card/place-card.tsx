import classNames from 'classnames';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Path } from '../../data/path';
import { OfferProps } from '../../types';
import { capitalizeFirstLetter } from '../../utils';
import StarLabel from '../star-label/star-label';

export type PlaceCardProps = OfferProps & {
  className?: string;
  imageClassName?: string;
  infoCardClassName?: string;
};

export default function PlaceCard({
  id,
  title,
  previewImage,
  type,
  isPremium,
  price,
  rating,
  isFavorite,
  className,
  imageClassName,
  infoCardClassName,
}: PlaceCardProps) {
  const cardClass = classNames('place-card', className);
  const imageCardClass = classNames('place-card__image-wrapper', imageClassName);
  const infoCardClass = classNames('place-card__info', infoCardClassName);

  const [hoverState, setHoverState] = useState(false);

  const handleMouseEnter = () => {
    setHoverState(true);
  };

  const handleMouseLeave = () => {
    setHoverState(false);
  };


  return (
    <article className={cardClass} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} data-hover={hoverState}>
      {isPremium &&
      <div className="place-card__mark">
        <span>Premium</span>
      </div>}
      <div className={imageCardClass}>
        <img
          className="place-card__image"
          src={previewImage}
          width={260}
          height={200}
          alt="Place image"
        />
      </div>
      <div className={infoCardClass}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{price} </b>
            <span className="place-card__price-text">
                /&nbsp;night
            </span>
          </div>
          <button
            className={`place-card__bookmark-button button ${isFavorite && 'place-card__bookmark-button--active'}`}
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
                isFavorite ?
                  'In bookmarks' :
                  'To bookmarks'
              }
            </span>
          </button>
        </div>

        <StarLabel value={rating} parentClassName='place-card'/>

        <h2 className="place-card__name">
          <Link to={`${Path.Offer}/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{capitalizeFirstLetter(type)}</p>
      </div>
    </article>
  );
}
