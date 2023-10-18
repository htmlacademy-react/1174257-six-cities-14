import Header from '../../components/header/header';
import Button from '../../ui/button/button';

export default function NotFound(): JSX.Element {
  return (
    <div className="page page--gray page--not-found">
      <Header />

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="not-found">
            <h1 className="not-found__title">Whoops!</h1>
            <p className="not-found__text">Page Not Found :(</p>

            <Button text='Back' href='#' className='not-found__link' />
          </section>
        </div>
      </main>
    </div>
  );
}
