import Image from '../../../../ui/image/image';
import StarLabel from '../../../star-label/star-label';

type UserProps = {
  avatarUrl: string;
  name: string;
}

export type ReviewItemProps = {
  rating: number;
  comment: string;
  date: string;
  user: UserProps;
};

export default function ReviewItem({
  rating,
  comment,
  date,
  user,
}: ReviewItemProps): JSX.Element {
  const dateObj = new Date(date);
  const dateTime = dateObj.toISOString().slice(0,-8);
  const dateText = `${dateObj.toLocaleString('en-EN', { month: 'long' })} ${dateObj.getFullYear()}`;

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <Image
            className="reviews__avatar user__avatar"
            src={user.avatarUrl}
            width={54}
            height={54}
            alt="Reviews avatar"
          />
        </div>
        <span className="reviews__user-name">{user.name}</span>
      </div>
      <div className="reviews__info">
        <StarLabel
          value={rating}
          parentClassName='reviews'
        />
        <p className="reviews__text">{comment}</p>
        <time className="reviews__time" dateTime={dateTime}>
          {dateText}
        </time>
      </div>
    </li>
  );
}
