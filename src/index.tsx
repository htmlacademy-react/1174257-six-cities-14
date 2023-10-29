import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { mainData } from './data/main';
import { offerData } from './data/offer';
import { favoritesData } from './data/favorites';
import { AuthStatus } from './data/auth';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      main={mainData}
      favorites={favoritesData}
      offer={offerData}

      authStatus={AuthStatus.Auth}
    />
  </React.StrictMode>
);
