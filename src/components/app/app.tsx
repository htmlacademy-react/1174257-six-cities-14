import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthStatus } from '../../data/auth';
import { Path } from '../../data/path';
import Favorites, { FavoritesPageProps } from '../../pages/favorites/favorites';
import Login from '../../pages/login/login';
import Main, { MainPageProps } from '../../pages/main/main';
import NotFound from '../../pages/not-found/not-found';
import Offer, { OfferPageProps } from '../../pages/offer/offer';
import ProtectRoute from '../protect-route/protect-route';
import ScrollToTop from '../utils/scroll-to-top';

type AppProps = {
  main: MainPageProps;
  offers: OfferPageProps;
  favorites: FavoritesPageProps;
  authStatus: AuthStatus;
}

export default function App({
  main,
  offers,
  favorites,
  authStatus,
}: AppProps): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path={Path.Main}>
            <Route index element={<Main {...main} />} />

            <Route element={<ProtectRoute status={authStatus} redirect={Path.Main} revers />}>
              <Route path={Path.Login} element={<Login/>} />
            </Route>

            <Route element={<ProtectRoute status={authStatus} redirect={Path.Login} />}>
              <Route path={Path.Favorites} element={<Favorites {...favorites} />} />
            </Route>

            <Route path={Path.Offer}>
              <Route index element={<NotFound />} />
              <Route path={`${Path.Offer}/:id`} element={<Offer {...offers} />} />
            </Route>

            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
