import classNames from 'classnames';
import uniqid from 'uniqid';
import ReviewForm from './components/review-form/review-form';
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

      <ReviewForm />
    </section>
  );
}
