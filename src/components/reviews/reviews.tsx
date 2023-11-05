import classNames from 'classnames';
import uniqid from 'uniqid';

import StarRating from '../../ui/star-rating/star-rating';
import Button from '../../ui/button/button';
import ReviewItem, { ReviewItemProps } from './components/review-item/review-item';

export type ReviewsProps = {
  className?: string;
  reviewItems: ReviewItemProps[];
};

export default function Reviews({
  className,
  reviewItems,
}: ReviewsProps): JSX.Element {
  const reviewsClass = classNames('reviews', className);

  return (
    <section className={reviewsClass}>
      <h2 className="reviews__title">
        Reviews · <span className="reviews__amount">{reviewItems.length}</span>
      </h2>

      {reviewItems && (
        <ul className="reviews__list">
          {reviewItems.map((item) => <ReviewItem {...item} key={uniqid()}/>)}
        </ul>
      )}

      <form className="reviews__form form" action="#" method="post">
        <label className="reviews__label form__label" htmlFor="review">Your review</label>
        <StarRating className='reviews__rating-form' />
        <textarea
          className="reviews__textarea form__textarea"
          id="review"
          name="review"
          placeholder="Tell how was your stay, what you like and what can be improved"
          defaultValue={''}
          minLength={50}
          maxLength={300}
        />
        <div className="reviews__button-wrapper">
          <p className="reviews__help">To submit review please make sure to set{' '}
            <span className="reviews__star">rating</span> and describe your stay with at least{' '}
            <b className="reviews__text-amount">50 characters</b>.
          </p>

          <Button
            className="reviews__submit form__submit button"
            type="submit"
            isDisabled
            text='Submit'
          />
        </div>
      </form>
    </section>
  );
}
