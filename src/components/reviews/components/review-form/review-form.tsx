import { ChangeEvent, useState } from 'react';
import Button from '../../../../ui/button/button';
import StarRating from '../../../../ui/star-rating/star-rating';

export default function ReviewForm() {
  const MIN_COMMENT_LENGTH = 50;
  const MAX_COMMENT_LENGTH = 300;

  const [state, setState] = useState({
    rating: '',
    comment: '',
  });

  const handleOnRatignChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      rating: evt.target.value,
    });
  };

  const handleOnTextareaChange = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    setState({
      ...state,
      comment: evt.target.value,
    });
  };

  const isValid = state.comment.length >= MIN_COMMENT_LENGTH && state.rating !== '';

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <StarRating className='reviews__rating-form' rating={state.rating} inputOnChange={handleOnRatignChange}/>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        defaultValue={state.comment}
        minLength={MIN_COMMENT_LENGTH}
        maxLength={MAX_COMMENT_LENGTH}
        onChange={handleOnTextareaChange}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe your stay with at least{' '}
          <b className="reviews__text-amount">50 characters</b>.
        </p>

        <Button
          className="reviews__submit form__submit button"
          type="submit"
          isDisabled={!isValid}
          text='Submit'
        />
      </div>
    </form>
  );
}
