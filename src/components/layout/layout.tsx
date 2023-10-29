import Footer from '../footer/footer';
import Header from '../header/header';
import classNames from 'classnames';

type LayoutProps = {
  className?: {
    [key: string]: boolean | string;
  };
  mainElClassName?: {
    [key: string]: boolean | string;
  };
  isMainPage?: boolean;
  hasFooter?: boolean;
  children: JSX.Element;
}

export default function Layout({
  className = {},
  mainElClassName = {},
  isMainPage = false,
  hasFooter = false,
  children,
}: LayoutProps): JSX.Element {
  const pageClass = classNames('page', {
    ['page--gray']: className.gray,
    [`page--${className.page}`]: Boolean(className.page),
  });

  const mainElClass = classNames('page__main', {
    [`page__main--${mainElClassName.mod}`]: true,
  });

  return (
    <div className={pageClass}>
      <Header isMainPage={isMainPage} />

      <main className={mainElClass}>
        {children}
      </main>

      {hasFooter && <Footer />}
    </div>
  );
}
