import Main, {MainProps} from '../../pages/main/main';
// import Favorites from '../../pages/favorites/favorites';
// import Login from '../../pages/login/login';
// import NotFound from '../../pages/not-found/not-found';
// import Offer from '../../pages/offer/offer';

type AppProps = {
  main: MainProps;
}

export default function App(props: AppProps): JSX.Element {
  return (
    props.main && <Main {...props.main} />
    // ||
    // props.login && <Login />
    // ||
    // props.notFound && <NotFound />
    // ||
    // props.favorites && <Favorites {...props.favorites} />
    // ||
    // props.offer && <Offer {...props.offer} />
  );
}
