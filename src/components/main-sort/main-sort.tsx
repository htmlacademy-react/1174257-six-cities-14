type SortOption = {
  id: string;
  isActive?: boolean;
  text: string;
};
export type MainSortProps = {
  options: SortOption[];
};

export default function MainSort({options}: MainSortProps) {
  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span className="places__sorting-type" tabIndex={0}>
        {options[0].text} {/* TODO */}
        <svg className="places__sorting-arrow" width={7} height={4}>
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul className="places__options places__options--custom"> {/* TODO active class: places__options--opened */}
        {options.map((item) => (
          <li
            key={item.id}
            className={`places__option ${item.isActive && 'places__option--active'}`}
            tabIndex={0}
          >
            {item.text}
          </li>
        ))}
      </ul>
    </form>
  );
}
