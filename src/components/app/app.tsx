import Favorites from '../../pages/favorites/favorites';
import Login from '../../pages/login/login';
import Main, {MainProps} from '../../pages/main/main';
import NotFound from '../../pages/not-found/not-found';

type AppProps = {
  main: MainProps;
}

export default function App(props: AppProps): JSX.Element {
  // временно будет так и без типов
  return (
    props.main && <Main {...props.main} />
    ||
    props.login && <Login />
    ||
    props.notFound && <NotFound />
    ||
    props.favorites && <Favorites {...props.favorites} />
  );
}
