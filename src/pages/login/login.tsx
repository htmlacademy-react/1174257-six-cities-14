import Header from '../../components/header/header';
import Button from '../../ui/button/button';
import Field from '../../ui/field/field';

export default function Login(): JSX.Element {
  return (
    <div className="page page--gray page--login">
      <Header />

      <main className="page__main page__main--login">
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
                inputClassName='form__input'
              />
              <Field
                label='Password'
                type='password'
                name='password'
                placeholder='Password'
                isRequired
                className='login__input-wrapper'
                inputClassName='form__input'
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
              <a className="locations__item-link" href="#">
                <span>Amsterdam</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
