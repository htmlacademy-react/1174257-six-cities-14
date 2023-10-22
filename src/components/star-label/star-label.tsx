import classNames from 'classnames';

export type StarLabelProps = {
  value: number;
  showValueBlock?: boolean;
  className?: string;
  parentClassName?: string;
};

export default function StarLabel({
  value,
  showValueBlock = false,
  className,
  parentClassName = '',
}: StarLabelProps): JSX.Element {
  const progress = (Math.floor(value) * 20 > 100) ? 100 : Math.floor(value) * 20;
  const ratingClass = classNames(
    'rating',
    `rating${parentClassName && ` ${parentClassName}__rating`}`,
    className
  );

  return (
    <div className={ratingClass}>
      <div className={`rating__stars${parentClassName && ` ${parentClassName}__stars`}`}>
        <span style={{ width: `${String(progress)}%`}} />
        <span className="visually-hidden">Rating</span>
      </div>
      {showValueBlock && (
        <span className={`rating__value${parentClassName && ` ${parentClassName}__rating-value`}`}>
          {value}
        </span>
      )}
    </div>
  );
}
