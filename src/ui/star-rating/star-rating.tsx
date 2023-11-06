import { Fragment } from 'react';
import classNames from 'classnames';
import uniqid from 'uniqid';

type StarRatingProps = {
  className: string;
  starsCount?: number;
}
export default function StarRating({
  className,
  starsCount = 5,
}: StarRatingProps): JSX.Element {
  const starClass = classNames('form__rating', className);
  const elements = Array(starsCount).fill('');

  return (
    <div className={starClass}>
      {elements.map((_item, i, array) => (
        <Fragment key={uniqid()}>
          <input
            className="form__rating-input visually-hidden"
            name="rating"
            defaultValue={array.length - i}
            id={`${array.length - i}-stars`}
            type="radio"
          />
          <label
            htmlFor={`${array.length - i}-stars`}
            className="form__rating-label"
            title="perfect"
          >
            <svg className="form__star-image" width={37} height={33}>
              <use xlinkHref="#icon-star" />
            </svg>
          </label>
        </Fragment>
      ))}
    </div>
  );
}
