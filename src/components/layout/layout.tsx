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
  className = {
    gray: false,
    page: '',
  },
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

{/*
<div className="page page--gray page--login">
  <Header />

  <main className="page__main page__main--login">
  </main>
</div>


<div className="page page--gray page--main">
  <Header isMainPage />

  <main className="page__main page__main--index">
  </main>
</div>


<div className="page page--gray page--not-found">
  <Header />

  <main className="page__main page__main--login">
  </main>
</div>


<div className="page">
  <Header />

  <main className="page__main page__main--offer"></main>
</div>
*/}
