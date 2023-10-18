type TabItem = {
  id: string;
  href: string;
  isActive?: boolean;
  text: string;
};

export type MainTabsProps = {
  list: TabItem[];
};

export default function MainTabs({list}: MainTabsProps): JSX.Element {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {list.map((item) => (
            <li className="locations__item" key={item.id}>

              {item.isActive && (
                <a
                  className='locations__item-link tabs__item tabs__item--active'
                >
                  <span>{item.text}</span>
                </a>
              )}

              {!item.isActive && (
                <a
                  className='locations__item-link tabs__item'
                  href={item.href}
                >
                  <span>{item.text}</span>
                </a>
              )}

            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
