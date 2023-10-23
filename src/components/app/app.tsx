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
        <Route path='/' element={<Main {...props.main} />} />
        <Route path='login' element={<Login />} />
        <Route path='favorites' element={<Favorites {...props.favorites} />} />
        <Route path='offer' element={<Offer {...props.offer} />} />

        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
