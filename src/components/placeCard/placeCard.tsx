export type placeCardProps = {
  id: string;
  title: string;
  placeType: string;
  mark?: string;
  priceValue: number;
  priceSuffix: string;
  currencyToken?: string;
  starRating: 1 | 2 | 3 | 4 | 5;
  imageSrc: string;
  placeLinkSrc: string;
  isBookmark: boolean;
};

export function PlaceCard(props: placeCardProps) {
  const currencyToken: string = props.currencyToken ?? '€';

  return (
    <article className="cities__card place-card" key={props.id}>
      {
        props.mark &&
        <div className="place-card__mark">
          <span>{props.mark}</span>
        </div>
      }
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href={props.placeLinkSrc}>
          <img
            className="place-card__image"
            src={props.imageSrc}
            width={260}
            height={200}
            alt="Place image"
          />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">{currencyToken}{props.priceValue} </b>
            <span className="place-card__price-text">
                /&nbsp;{props.priceSuffix}
            </span>
          </div>
          <button
            className={`place-card__bookmark-button button ${props.isBookmark && 'place-card__bookmark-button--active'}`}
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
                props.isBookmark ?
                  'In bookmarks' :
                  'To bookmarks'
              }
            </span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${String(props.starRating * 20)}%`}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href={props.placeLinkSrc}>{props.title}</a>
        </h2>
        <p className="place-card__type">{props.placeType}</p>
      </div>
    </article>
  );
}
