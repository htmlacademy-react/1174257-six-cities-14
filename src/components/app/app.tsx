import { Path } from '../../data/path';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main, {MainProps} from '../../pages/main/main';
import Login from '../../pages/login/login';
import Favorites, { FavoritesProps } from '../../pages/favorites/favorites';
import Offer, { OfferProps } from '../../pages/offer/offer';
import NotFound from '../../pages/not-found/not-found';
import { HelmetProvider } from 'react-helmet-async';
import ProtectRoute from '../protect-route/protect-route';
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
          <Route path={Path.Main} element={<Main {...main} />} />
          <Route path={Path.Login} element={<Login />} />
          <Route path={Path.Favorites}
            element={
              <ProtectRoute status={authStatus} redirect={Path.Login}>
                <Favorites {...favorites} />
              </ProtectRoute>
            }
          />
          <Route path={Path.Offer} element={<Offer {...offer} />} />

          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
