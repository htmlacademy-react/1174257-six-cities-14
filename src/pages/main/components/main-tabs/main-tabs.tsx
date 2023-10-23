import { Link } from 'react-router-dom';
import uniqid from 'uniqid';

type TabItem = {
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
            <li className="locations__item" key={uniqid()}>

              {item.isActive && (
                <Link
                  className='locations__item-link tabs__item tabs__item--active'
                  to={item.href}
                >
                  <span>{item.text}</span>
                </Link>
              )}

              {!item.isActive && (
                <Link
                  className='locations__item-link tabs__item'
                  to={item.href}
                >
                  <span>{item.text}</span>
                </Link>
              )}

            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
