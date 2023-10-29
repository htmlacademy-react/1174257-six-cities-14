import { Path } from '../../data/path';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main, {MainProps} from '../../pages/main/main';
import Login from '../../pages/login/login';
import Favorites, { FavoritesProps } from '../../pages/favorites/favorites';
import Offer, { OfferProps } from '../../pages/offer/offer';
import NotFound from '../../pages/not-found/not-found';

type AppProps = {
  main: MainProps;
  offer: OfferProps;
  favorites: FavoritesProps;
}

export default function App(props: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={Path.Main} element={<Main {...props.main} />} />
        <Route path={Path.Login} element={<Login />} />
        <Route path={Path.Favorites} element={<Favorites {...props.favorites} />} />
        <Route path={Path.Offer} element={<Offer {...props.offer} />} />

        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
