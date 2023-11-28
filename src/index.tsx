import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './components/app/app';

import { AuthStatus } from './data/auth';
import { favoritesData } from './data/favorites';
import { mainData } from './data/main';
import { offersData } from './data/offers';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      main={mainData}
      favorites={favoritesData}
      offers={offersData}
      authStatus={AuthStatus.Auth}
    />
  </React.StrictMode>
);
