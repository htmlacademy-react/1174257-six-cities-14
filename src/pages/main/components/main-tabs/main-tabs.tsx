import { Link } from 'react-router-dom';
import classNames from 'classnames';
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
  const linkClass = (isActive: boolean) => classNames('locations__item-link tabs__item', {['tabs__item--active']: isActive});

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {list.map((item) => (
            <li className="locations__item" key={uniqid()}>
              <Link
                className={linkClass(Boolean(item.isActive))}
                to={item.href}
                aria-current={item.isActive}
              >
                <span>{item.text}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
