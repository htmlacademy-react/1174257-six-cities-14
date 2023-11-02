import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import ProtectRoute from '../protect-route/protect-route';
import Main, {MainProps} from '../../pages/main/main';
import Login from '../../pages/login/login';
import Favorites, { FavoritesProps } from '../../pages/favorites/favorites';
import Offer, { OfferProps } from '../../pages/offer/offer';
import NotFound from '../../pages/not-found/not-found';

import { Path } from '../../data/path';
import { AuthStatus } from '../../data/auth';

type AppProps = {
  main: MainProps;
  offer: OfferProps;
  favorites: FavoritesProps;
  authStatus: AuthStatus;
}

export default function App({
  main,
  offer,
  favorites,
  authStatus,
}: AppProps): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={Path.Main}>
            <Route index element={<Main {...main} />} />

            <Route element={<ProtectRoute status={authStatus} redirect={Path.Main} revers />}>
              <Route path={Path.Login} element={<Login/>} />
            </Route>

            <Route element={<ProtectRoute status={authStatus} redirect={Path.Login} />}>
              <Route path={Path.Favorites} element={<Favorites {...favorites} />} />
            </Route>

            <Route path={Path.Offer} element={<Offer {...offer} />} />

            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
