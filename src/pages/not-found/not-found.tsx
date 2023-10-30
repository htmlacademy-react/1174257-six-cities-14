import Layout from '../../components/layout/layout';
import { Path } from '../../data/path';
import Button from '../../ui/button/button';

export default function NotFound(): JSX.Element {
  return (
    <Layout
      className={{gray: true, page: 'not-found'}}
      mainElClassName={{mod: 'login'}}
    >

      <div className="page__login-container container">
        <section className="not-found">
          <h1 className="not-found__title">Whoops!</h1>
          <p className="not-found__text">Page Not Found :(</p>

          <Button text='Back' href={Path.Main} className='not-found__link' />
        </section>
      </div>
    </Layout>
  );
}
