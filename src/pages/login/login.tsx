import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

import Button from '../../ui/button/button';
import Field from '../../ui/field/field';
import Layout from '../../components/layout/layout';

export default function Login(): JSX.Element {
  return (
    <Layout
      className={{gray: true, page: 'login'}}
      mainElClassName={{mod: 'login'}}
    >
      <>
        <Helmet>
          <title>6 cities: authorization</title>
        </Helmet>

        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" action="#" method="post">
              <Field
                label='E-mail'
                type='email'
                name='email'
                placeholder='Email'
                isRequired
                className='login__input-wrapper'
                inputClassName='login__input'
              />
              <Field
                label='Password'
                type='password'
                name='password'
                placeholder='Password'
                isRequired
                className='login__input-wrapper'
                inputClassName='login__input'
              />
              <Button
                text='Sign in'
                type='submit'
                className='login__submit form__submit'
              />
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" to="#">
                <span>Amsterdam</span>
              </Link>
            </div>
          </section>
        </div>
      </>
    </Layout>
  );
}
