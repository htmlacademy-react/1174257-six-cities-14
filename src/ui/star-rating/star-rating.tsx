import classNames from 'classnames';
import { ChangeEvent, Fragment } from 'react';
import uniqid from 'uniqid';

type StarRatingProps = {
  className?: string;
  rating: string;
  inputOnChange: (evt: ChangeEvent<HTMLInputElement>) => void;
}
export default function StarRating({
  className,
  rating,
  inputOnChange,
}: StarRatingProps): JSX.Element {
  const starClass = classNames('form__rating', className);
  const starsCount = 5;
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
            onChange={inputOnChange}
            checked={Number(rating) === (array.length - i)}
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
